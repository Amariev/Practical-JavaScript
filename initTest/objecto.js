let user = {
    nombre: 'Wiiii',
    apellido: 'Fake',
    edad: 4, 
}

function printObject(object){
    Object.values(object).forEach(element => console.log(element))
}

printObject(user)
