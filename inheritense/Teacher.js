const Person = require("./Person");


class Teacher extends Person {
    constructor (name,email,subject,sallary){
        super(name,email)
        this._subjects = subject;
        this._fee = sallary;
    }

    get subjects(){
        return this._subjects
    }
    get fee(){
        return this._fee
    }
}

module.exports= Teacher