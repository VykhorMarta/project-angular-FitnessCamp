export class User {
    id: string;
    name: string;
    lastName: string; 
    email: string;
    phoneNumber: string;
    work: string;

    constructor(name, lastName, email, phoneNumber, work){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.work = work;
    }
}