const person = {};
person.name="moon";
person.email="mahamodulhasan@gmail.com";
person.phone='01771517322'
console.log(person);



class Person {

    constructor (name,email){
        this.name = name
        this.email = email
        console.log(this)
    }
    // mathods
    changeName (name){
        this.name = name
    }
    sendEmail (msg){
        console.log(this.email)
        console.log('send email')
        console.log(msg)
    }
}
// now create and instance
const p1 = new Person('moon','moon@gmail.com')
const p2 = new Person('bedoha','test@gmail.com')
// const p3 = new Person('salvi','salvi@gmail.com')

console.log(p1)
console.log(p2)
p2.sendEmail('test@gmail.com')