let arrayNumeros = [1, 4, 6, 10]
let estudiantes = [
    {nombre:'Camilo' , edad: 13},
    {nombre:'Agustin' , edad: 22},
    {nombre:'Pepe' , edad: 35},
]
// let dobles = arrayNumeros.map((numero)=> numero * 2 )
// estudiantes.map((elm)=> elm.apellido = 'Salazar')
// console.log(estudiantes)
// console.log(dobles);

// let adultos = estudiantes.filter((estudiante)=> estudiante.nombre === 'Pepe')
// console.log(adultos)

let persona = {
    nombre:'Camilo' , 
    edad: 13,
    altura: 170
}
let {altura : alturaPersona} = persona
console.log(alturaPersona)
alturaPersona = 200
console.log(alturaPersona)
console.log(persona)





let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];

let soloNombres = personas.map(function(persona){
    return persona.nombre
})

let matrix = personas.map((persona) => {
    // if(persona.edad >= 60){
    //     return persona.nombre + ' puede pasar a la matrix'
    // } else {
    //     return persona.nombre + ' no puede pasar a la matrix'
    // }
    return persona.edad >= 60 ? `${persona.nombre} puede pasar` : `${persona.nombre} no puede pasar`
})

console.log(soloNombres)

let adultos = personas.filter((persona)=> {
    return persona.edad > 18
})