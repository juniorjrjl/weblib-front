import Vue from 'vue'
import { Fragment } from 'vue-fragment'
import Card from 'primevue/card'
import InputMask from 'primevue/inputmask';
import Button from 'primevue/button';
import User from '../../../service/User'

Vue.component('Card', Card)
Vue.component('InputMask', InputMask)
Vue.component('Button', Button)

export default {
    name: 'Form',
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
    }
}