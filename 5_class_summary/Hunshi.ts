export {}

class Person {
    name: string
    walk() {
        console.log("I am walking...");
    }
};

let p = new Person()
p.walk()
console.log(p.name);

class Father {
    releaseSkill() {
        console.log("第七魂技：武魂真身，锤子~");
        
    }
}

// js也是一样，只能单继承
class Hunshi extends Person{

}
let tangsan = new Hunshi()
tangsan.walk()
console.log(tangsan.name)

