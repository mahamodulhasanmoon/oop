class Person {

    constructor (name,email){
        this._name = name
        this.email = email
    }

    get name () {
         return  this._name
        }
    set name (value) {
         return  this._name = value
        }
    get email () {
         return  this._email
        }
    set email (value) {
         return  this._email = value
        }

    getName () { 
        return this._name
    }
    getEmail () { 
        return this._email
    }

    static isValid (age) {
return (age>= 18)
    }

}

module.exports = Person