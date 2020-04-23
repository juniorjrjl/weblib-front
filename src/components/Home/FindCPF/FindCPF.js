import { Fragment } from 'vue-fragment'
import User from '../../../service/User'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'FindCPF',
    components: { Fragment },
    methods:{
        access: async function(){
            try{
                const response = await User.findByCpf(this.cpf.replace('.','').replace('.','').replace('-',''))
                console.log(response)
            }catch(error){
                console.log(error.response.data)
            }
        }
    },
    data: function(){
        return{
            cpf: ""
        }
    },
    validations: {
        cpf: {
            required
        }
    }
}