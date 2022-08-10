// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

let nombre = "guillermo";
let edad = 28;
let desarrollador=true;
let fecha= new Date("march 7 94")

console.log(fecha)

let libro_1984 = {
    titulo:1984,
    autor:"George Orwell",
    fecha:"8/6/1949",
    url:"https://es.wikipedia.org/wiki/1984_(novela)"
}

console.log(libro_1984.fecha)