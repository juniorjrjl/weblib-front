export default class UserInput{

    constructor(build){
        this.name = build.name;
        this.email = build.email;
        this.cpf = build.cpf;
    }

    static get Builder(){
        class Builder{

            constructor(){}

            withCpf(cpf){
                this.cpf = cpf.replace('.','').replace('.','').replace('-','');
                return this;
            }

            withName(name){
                this.name = name;
                return this;
            }

            withEmail(email){
                this.email = email;
                return this
            }
            
            build(){
                return new UserInput(this)
            }
        }
        return Builder;
    }

}