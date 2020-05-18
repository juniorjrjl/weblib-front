
import User from '../../../service/User'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'FindCPF',
    methods:{
        access: async function(){
            let routeToNavigate = ""
            try{
                const response = await User.findByCpf(this.cpf.replace('.','').replace('.','').replace('-',''))
                routeToNavigate = ""
                console.log(response)
            }catch(error){
                console.log(error.response.data)
                routeToNavigate = "/NewUser"
            }
            this.$router.push(routeToNavigate)
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