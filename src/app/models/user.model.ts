export class User {
    id: string;
    firstName: string;
    lastName: string; 
    email: string;
    age: number;
    city: string;
    country: string;
    choose: string;


    constructor(firstName, lastName, email, age, city, country, choose){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.city = city;
        this.country = country;
        this.choose = choose;
    }
}