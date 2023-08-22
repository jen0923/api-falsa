const express= require("express");
const app = express();

const {faker} = require ('@faker-js/faker');

class Usuario {
    constructor() {
        this._id = faker.string.uuid(),
        this.nombre = faker.person.firstName(),
        this.apellido = faker.person.lastName(),
        this.telefono = faker.phone.number(),
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid(),
        this.nombre = faker.company.name(),
        this.direccion = {
            calle: faker.location.street(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            cp: faker.location.zipCode(),
            pais: faker.location.country()
        }
    }
}

const user = new Usuario();
const business = new Empresa();
const newCompany = { Usuario: new Usuario(), Empresa: new Empresa() };

app.get ("/api/users/new", (req, res) => {
    let nuevoUsuario= new Usuario ();
    res.json(nuevoUsuario);
})


app.get ("/api/companies/new", (req, res) => {
    let nuevoEmpresa= new Empresa ();
    res.json(nuevoEmpresa);
})

app.get ("/api/user/companies/new", (req, res) => {
        res.json(newCompany);
      });


app.listen(8000, () => console.log("Servidor corriendo") );