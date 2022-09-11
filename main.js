//alert("Soy Florangel"); Alert es una funcion de JavaScrpit para enviar mensajes al explorador o navegador

//const nombre = "Florangel"; 



//const nombre = prompt ("¿Cual es tu nombre?")

//alert("Tu nombre: " + nombre)

const nombre = document.getElementById("nombre");

const apellido = document.getElementById("apellido");

const email = document.getElementById("email");

const contraseña = document.getElementById("contraseña");

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(nombre.value);
    console.log(apellido.value);
    console.log(email.value);
    console.log(contraseña.value);
    console.log(btn.value);



});
