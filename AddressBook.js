console.log("***Welcome to Address Book***");

class Contact{
    //Using Rest paameters to add multiple arguments
    constructor(...contactDetails){
        this.firstName = contactDetails[0];
        this.lastName = contactDetails[1];
        this.address = contactDetails[2];
        this.city = contactDetails[3];
        this.state = contactDetails[4];
        this.zipCode = contactDetails[5];
        this.phoneNumber = contactDetails[6];
        this.email = contactDetails[7];
    }
    //getter and setter method
    get firstName() {
        return this._firstName; 
    }

    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(firstName)) this._firstName = firstName;
        else throw 'First name is incorrect';
    }

    get lastName() {
        return this._lastName; 
    }

    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if(nameRegex.test(lastName)) this._lastName = lastName;
        else throw 'Last name is incorrect';
    }

    get address() {
        return this._address; 
    }

    set address(address) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(regex.test(address)) this._address = address;
        else throw 'Address is incorrect';
    }

    get city() {
        return this._city; 
    }

    set city(city) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(regex.test(city)) this._city = city;
        else throw 'City is incorrect';
    }

    get state() {
        return this._state; 
    }

    set state(state) {
        let regex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if(regex.test(state)) this._state = state;
        else throw 'State is incorrect';
    }

    get zipCode() {
        return this._zipCode; 
    }

    set zipCode(zipCode) {
        let regex = RegExp('^[0-9]{3}\\s{0,1}[0-9]{3}$')
        if(regex.test(zipCode)) this._zipCode = zipCode;
        else throw 'ZIP code is incorrect';
    }

    get phoneNumber() {
        return this._phoneNumber; 
    }

    set phoneNumber(phoneNumber) {
        let regex = RegExp('[1-9][0-9]{9}')
        if(regex.test(phoneNumber)) this._phoneNumber = phoneNumber;
        else throw 'Phone number is incorrect';
    }

    get email() {
        return this._email; 
    }

    set email(email) {
        let regex = RegExp("[\\w+_-]+(?:\\.[\\w_-]+)*@(?:[\\w]+\\.){1,2}[a-zA-Z]{2,}")
        if(regex.test(email)) this._email = email;
        else throw 'Email is incorrect';
    }

    toString(){
        return "First Name : "+ this.firstName + "\nLast Name : "+ this.lastName + "\nAddress : "+ this.address +"\nCity : "+ this.city + "\nState : "+ this.state +"\nZip : "+ this.zipCode+ "\nPhone Number : "+ this.phoneNumber + "\nEmail : "+ this.email;
    }
}

let contact = new Contact("Hitesh","Meher","Bhubaneswar","Khordha","Odisha", 751024, 1234567890,"hitesh@gmail.com");
console.log(contact.toString());