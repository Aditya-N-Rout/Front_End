class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

class Worker extends Person {
    constructor(xp = 0, hourlywage = 10, name, age, energy) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlywage = hourlywage;
    }
    goToWork() {
        this.xp += 10;
    }
}

function intern() {
    let intern = new Worker(0, 10, "Bob", 21, 110);
    intern.goToWork();
    console.log(intern );
}

function manager() {
    let manager = new Worker(100, 30, "Alice", 30, 120);
    manager.doSomethingFun();
    console.log(manager);
}

intern();
manager();

 