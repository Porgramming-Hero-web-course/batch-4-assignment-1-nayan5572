{

// Problem 7:
// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getCarAge(): number{
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}

// sample input
const car = new Car("Honda", "Civic", 2018);
const age = car.getCarAge()
const total = `${car.getCarAge()} (assuming current year is ${new Date().getFullYear()})`;
console.log(`${total}`);











}