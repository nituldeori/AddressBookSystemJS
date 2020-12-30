class AddressBookContact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString(){
        return "firstName: "+this.firstName+" lastName: "+this.lastName+" address: "+this.address+" city: "+this.city+" state: "+this.state+
               " zip: "+this.zip+" phoneNumber: "+this.phoneNumber+" email: "+this.email;
    }


}

let contact1 = new AddressBookContact("Karl", "Rock", "Hengrabari", "Guwahati", "Assam", "781036", "9999", "karlrock@gmail.com");
console.log(contact1.toString());

