const person = {};
person.name="moon";
person.email="mahamodulhasan@gmail.com";
person.phone='01771517322'
console.log(person);



class Person {

    constructor (name,email){
        this._name = name
        this._email = email
        
    }

    get name() { 
       return this._name 
    }
    set name(value) { 
       
       return this._name = value
    }

    print(){
        console.log(this)
    }

}
// now create and instance
const p1 = new Person('moon','moon@gmail.com')
const p2 = new Person('aziza','test@gmail.com')

p1.name= 'Mahamodul  Hasan'

console.log(p1)