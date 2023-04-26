let nombre = "José "
let apellido = "Moreno"
let estudiante = "José" + " " + "Moreno  ";
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
let numeroCharEstudiante = estudiante.length;
console.log(numeroCharEstudiante);

let primCharN = nombre[0];
let lastCharA = apellido[5];
console.log(primCharN);
console.log(lastCharA);

let trueEstudiante = estudiante.includes("José")
console.log(trueEstudiante)

let acortarEspacios = estudiante.trim().length;
console.log("estudiante sin espacios es " + acortarEspacios);


