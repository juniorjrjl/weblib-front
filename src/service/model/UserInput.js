export default class UserInput{

    constructor(name, email, cpf){
        this,name = name;
        this.email = email;
        this.cpf = cpf;
    }

    get name(){
        return this.name;
    }

    get email(){
        return this.email;
    }

    get cpf(){
        return this.cpf;
    }

}