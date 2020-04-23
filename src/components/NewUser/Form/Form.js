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
                name: {
                    Required: "O campo 'nome' é obrigatório",
                    MinLength: "O campo 'nome' deve ter pelo menos menos 4 caractéres",
                    MaxLength: "O campo 'nome' deve ter no máximo 150 caractéres"
                },
                email:{
                    Required: "O campo 'e-mail' é obrigatório",
                    Email: "Informe um e-mail válido"
                },
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