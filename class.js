'use strict';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    call() {
        console.log(`name: ${this.name}`);
    }
}

const jun = new Person('Jun Kyu', 26);
jun.call();



