class Car {
    constructor(brand, price, weight){
        this.brand = brand
        this.price = price
        this.weight = weight
    }

       accelerate() {
            return 'Run run!!'
    }
}


const mercedes = new Car('mercedes', 45000, 2500)

console.log(mercedes.accelerate())