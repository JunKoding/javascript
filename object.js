const jun = {name: 'jun', age: '26'};
const person = jun;
console.log(person);

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    call() {
        console.log(this.name);
        console.log(this.age);
    }
}

const seony = new User('seohyun', 21);
seony.call();