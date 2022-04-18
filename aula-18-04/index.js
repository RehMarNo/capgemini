class Car{
    constructor(name, year, modelo) {
        this.name = name;
        this.year = year;
        this.modelo = modelo;
    }

    display(){
        console.log(`Name: ${this.name}
        Year: ${this.year}
        Modelo: ${this.modelo}`);
    }
}

class Modelo extends Car {
    constructor(name, year, modelo) {
        super(name, year);
        this.modelo = modelo;
    }

    show() {
        return this.name + ' ' + this.year + ' ' + this.modelo;
    }
}

let fusca = new Car("fusca", 1996);
fusca.display();

let car2 = new Modelo("KA", 2000, "ford");

console.log(car2.show());