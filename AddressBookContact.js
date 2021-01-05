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

    get getFirstName(){return this.firstName;}
    get getLastName(){return this.lastName;}
    get getAddress(){return this.address;}
    get getCity(){return this.city;}
    get getState(){return this.state;}
    get getZip(){return this.zip;}
    get getPhoneNumber(){return this.phoneNumber;}
    get getEmail(){return this.email;} 

    set setFirstName(firstName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(firstName)){
            this.firstName = firstName;

        }
            
        else{
            throw 'First Name is Incorrect!';
        }
    }

    set setLastName(lastName){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(lastName)){
            this.lastName = lastName;

        }
            
        else{
            throw 'Last Name is Incorrect!';
        }
    }

    set setAddress(address){
        let addressRegex = RegExp('[A-Za-z]{4,}');
        if(addressRegex.test(address)){
            this.address = address;
        }
        else{
            throw 'Address is Incorrect!';
        }
    }

    set setCity(city){
        let cityRegex = RegExp('[A-Za-z]{4,}');
        if(cityRegex.test(city)){
            this.city = city;
        }
        else{
            throw 'City is Incorrect!';
        }
    }

    set setState(state){
        let stateRegex = RegExp('[A-Za-z]{4,}');
        if(stateRegex.test(state)){
            this.state = state;
        }
        else{
            throw 'State is Incorrect!';
        }
    }

    set setZip(zip){
        let zipRegex = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        if(zipRegex.test(zip)){
            this.zip = zip;
        }
        else{
            throw 'Zip is Incorrect!';
        }
    }

    set setEmail(email){
        let emailRegex = RegExp('^[a-zA-Z]+([._+-]{0,1}[0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{3})$');
        if(emailRegex.test(email)){
            this.email = email;
        }
        else{
            throw 'Email is Incorrect!';
        }
    }

    set setPhoneNumber(phoneNumber){
        let phoneRegex = RegExp('[91 ]{3}[6-9][0-9]{9}');
        if(phoneRegex.test(phoneNumber)){
            this.phoneNumber = phoneNumber;
        }
        else
        throw 'Phone Number is Incorrect'
    }






    toString(){
        return "firstName: "+this.firstName+" lastName: "+this.lastName+" address: "+this.address+" city: "+this.city+" state: "+this.state+
               " zip: "+this.zip+" phoneNumber: "+this.phoneNumber+" email: "+this.email;
    }


}

let contactsArray = new Array();
let contact1 = new AddressBookContact();
try{
    contact1.setFirstName = 'John';
    contact1.setLastName = 'Hopkins';
    contact1.setAddress = 'Namghar Path';
    contact1.setCity = 'Guwahati';
    contact1.setState = 'Assam';
    contact1.setZip = '781 036';
    contact1.setPhoneNumber = '91 7812728985';
    contact1.setEmail = 'johnhopkins@gmail.com';

}catch(e){
    console.error(e);
}

contactsArray.push(contact1);
console.log(contactsArray);

function editExixtingContact(firstName, lastName, newFirstName, newLastName, newAddress, newCity, newState, newZip, newPhoneNumber, newEmail){
    let flag = 0;
    if(contactsArray.length == 0){
        console.log("Contacts Array is emplty!")
    }

    else{
        for(i=0; i<contactsArray.length; i++){
            if(contactsArray[i].getFirstName == firstName && contactsArray[i].getLastName == lastName){
                flag = 1;
                try{
                    contactsArray[i].setFirstName = newFirstName;
                    contactsArray[i].setLastName = newLastName;
                    contactsArray[i].setAddress = newAddress;
                    contactsArray[i].setCity = newCity;
                    contactsArray[i].setState = newState;
                    contactsArray[i].setZip = newZip;
                    contactsArray[i].setPhoneNumber = newPhoneNumber;
                    contactsArray[i].setEmail = newEmail;

                } catch(e){
                    console.error(e);
                }
                
            }
        }
        if(flag = 0){
            console.log("No contact with given name found!");
        }
    }
}

//editExixtingContact("John", "Hopkins", "Karl", "Rock", "Hengrabari", "Guwahati", "Assam", "781036", "91 8987384783", "karlrock@gmail.com");
//console.log(contactsArray);

function deleteExistingContact(firstName, lastName){
    let flag = 0;
    if(contactsArray.length == 0){
        console.log("Contacts Array is emplty!")
    }

    else{
        for(i=0; i<contactsArray.length; i++){
            if(contactsArray[i].getFirstName == firstName && contactsArray[i].getLastName == lastName){
                flag = 1;
                contactsArray.splice(i,1);
            }
        }
    }
    if(flag = 0){
        console.log("No contact with given name found!");
    }

}
deleteExistingContact("John","Hopkins");
console.log(contactsArray);

