//configuración personal de Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCgRYV4k6S31HYg6keqRmftxEJqHxqzi2k",
    authDomain: "safetoweb-da1d9.firebaseapp.com",
    databaseURL: "https://safetoweb-da1d9-default-rtdb.firebaseio.com",
    projectId: "safetoweb-da1d9",
    storageBucket: "safetoweb-da1d9.appspot.com",
    messagingSenderId: "858787187883",
    appId: "1:858787187883:web:85dc61179582c34d65bbee",
    measurementId: "G-TQKZVF1MW2"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var forma = document.getElementById("forma");
forma["enviar"].addEventListener("click", guardar, false);
//Agregar documentos
function guardar() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var operacion = document.getElementById('operacion').value;
    var propiedad = document.getElementById('propiedad').value;
    var ubicacion = document.getElementById('ubicacion').value;
    var presupuesto = document.getElementById('presupuesto').value;
    var pago = document.getElementById('pago').value;
    var credito = document.getElementById('credito').value;
    var asesoria = document.getElementById('asesoria').value;
    var no_recamaras = document.getElementById('no_recamaras').value;
    var caract = document.getElementById('caract').value;
    if(nombre == "" || email== "" || operacion == "" || propiedad == "" || ubicacion == "" || presupuesto == "" || 
    pago== "" || credito== "" || asesoria == "" || no_recamaras==""){
        //swal('Good job!', 'You clicked the button!', 'error');
    }else{
    db.collection("compra_inmueble").add({
        nombre: nombre,
        email: email,
        operacion: operacion,
        propiedad: propiedad,
        ubicacion: ubicacion,
        presupuesto: presupuesto,
        pago: pago,
        credito: credito,
        asesoria: asesoria,
        no_recamaras: no_recamaras,
        caract: caract
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('nombre').value= '';
            document.getElementById('email').value= '';
            document.getElementById('ubicacion').value= '';
            document.getElementById('presupuesto').value= '';
            document.getElementById('pago').value= '';
            document.getElementById('asesoria').value= '';
            document.getElementById('no_recamaras').value= '';
            document.getElementById('caract').value= '';
            swal('Good job!', 'You clicked the button!', 'success');

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }
}





