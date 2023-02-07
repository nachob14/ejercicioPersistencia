//Crea una variable con tu nombre
let nombre = 'Juan';

// Crea una variable con tu apellido
let apellido = 'Bordon';

// Crea un objeto con tu nombre y tu apellido
let persona = { nombre: nombre, apellido: apellido };

// Almacena el objeto anterior en la SessionStorage
// sessionStorage.setItem('persona', JSON.stringify(persona));

// Almacena el objeto anterior en la LocalStorage
// localStorage.setItem('persona', JSON.stringify(persona));

// Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
let fecha = new Date();
fecha.setMinutes(fecha.getMinutes() + 2);
// document.cookie = `persona=${JSON.stringify(persona)};expires=${fecha.toUTCString()}`

// ver los datos almacenados en la SessionStorage, LocalStorage y las cookies
console.log(sessionStorage.getItem('persona'));
console.log(localStorage.getItem('persona'));
console.log(document.cookie);


