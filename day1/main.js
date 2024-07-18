// class Student {
//     name;
//     age;
//     gender;
//     major;
// }

// const st = new Student();
// st.name = "mgmg";
// st.age = 15;
// st.gender = "male";
// st.major = "pro";

// console.log(st);

// const st2 = new Student();
// st2.name = "susu";
// st2.age = 20;
// st2.gender = "Female";
// st2.major = "english";

// console.log(st2);


class Car {
    engine;
    wheel;
    light;
    color;
    brand;
}

const car = new Car();
    car.engine = "telsa";
    car.wheel = "honda";
    car.light = "viz";
    car.brand = "Toyota";
    car.color = "skyblue";
    
    console.log(car);



class Test {
    x(){
        console.log("x");
    }
    y(){
        console.log("y");
    }

    constructor(a,b){
        console.log("constructor",a,b);
    }
}

// constructor method is run firster than other method.If constructor have any parameter you should put same argument when you're initialized 
const test = new Test("aaa","bb");
test.x();
test.y();



class Total {
    a = "aaa";
    b = "bbb";
    constructor(){
        this.c = "ccc";
    }
    x(){
        console.log(this);
        return "method x";
    }
}

const tot = new Total();
// console.log(tot);
console.log(tot.x());



class People{
    constructor(name,age,gender,job){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.job = job;
    }
    
    birthYear(){
        return 2024 - this.age;
    }
}

const sto = new People("mgmg",23,"male","programmer");
console.log(sto);
console.log(sto.birthYear());

const pep = new People("kyaw",20,"male","teacher");
console.log(pep);

console.log("------------");



// private properties


console.log("------------");


class Tank {
    a = "aaa";
    #b = "bbb";
    static d = "ddd" ;
    constructor(){
        this.c = "ccc";
    }
    x(){
        console.log(this);
        return "method x";
    }
    z() {
        console.log(this.#b);
        return "z";
    }

    static u () {
        return "method u";
    }
   
}
console.log(Tank.d);
console.log(Tank.u());

// const tan = new Tank();
// // console.log(tan);
// console.log(tan.a);
// // console.log(tan.b);
// console.log(tan.c);
// console.log(tan.x());
// console.log(tan.z());


console.log("------------------");
// extends

class Pupil{
    constructor (name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

class Student extends Pupil{
    constructor(name,age,gender,major){
        super(name,age,gender);
        this.major = major;
    }
}


const stu = new Student("koko",23,"Male","english");
console.log(stu);
