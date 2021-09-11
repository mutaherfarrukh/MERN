const express = require('express');
const faker = require('faker');
const app = express();
const port = 8000;

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        // this.LastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            Street: faker.address.streetName(),
            City: faker.address.cityName(),
            State : faker.address.state(),
            ZipCode : faker.address.zipCode(),
            Country : faker.address.country()
        }
    }
}

app.get("/api/users/new", (req,res) => {
    res.json(new User())
})

app.get("/api/companies/new", (req,res) => {
    res.json(new Company())
})

app.get("/api/user/company", (req,res) => {
    let newUser = new User();
    let newCompany = new Company();

    res.json({data: {newUser , newCompany}})
})



app.listen(port, ()=>console.log(`running on port ${port} in a new way I like to be!!!`));