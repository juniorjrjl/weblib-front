import { Fragment } from 'vue-fragment';
import  UserInput  from '../../../service/model/UserInput';
import User from '../../../service/User'
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators';

export default {
    name: 'Form',
    components: { Fragment },
    data: function(){
        return{
            user: {
                name: "",
                email: "",
                cpf: "",
            },
            userContraint:{
                name: "",
                email: "",
                cpf:{
                    Required: "O campo 'cpf' é obrigatório",
                }
            }
        }
    },
    methods: {
        create: async function(){
            const user = new UserInput.Builder()
                .withCpf(this.user.cpf)
                .withName(this.user.name)
                .withEmail(this.user.email)
                .build();
                try{
                    const response = await User.newUser(user)
                    console.log(response)
                }catch(error){
                    console.log(error.response.data)
                }
        },
        nameKeyup: function(){
            if (!this.$v.user.name.required){
                this.userContraint.name = "O campo 'nome' é obrigatório";
            }else if (!this.$v.user.name.minLength){
                this.userContraint.name = "O campo 'nome' deve ter pelo menos menos 4 caractéres";
            }else if (!this.$v.user.name.maxLength){
                this.userContraint.name = "O campo 'nome' deve ter no máximo 150 caractéres";
            }
        },
        emailKeyup: function(){
            if (!this.$v.user.email.required){
                this.userContraint.email = "O campo 'e-mail' é obrigatório";
            }else if (! this.$v.user.email.email){
                this.userContraint.email = "Informe um e-mail válido";
            }
        }
    },
    validations: {
        user: {
            name: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(150)
            },
            email:{
                required,
                email
            },
            cpf:{
                required
            }
        }
    }
}