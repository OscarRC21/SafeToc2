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
    var telefono = document.getElementById('telefono').value;
    var ubicacion = document.getElementById('ubicacion').value;
    var presupuesto = document.getElementById('presupuesto').value;
    var no_recamaras = document.getElementById('no_recamaras').value;
    var caract = document.getElementById('caract').value;
    db.collection("quiero_rentar").add({
        nombre: nombre,
        email: email,
        telefono: telefono,
        ubicacion: ubicacion,
        presupuesto: presupuesto,
        no_recamaras: no_recamaras,
        caract: caract
    })
        .then(function (docRef) {
            document.getElementById('nombre').value= '';
            document.getElementById('email').value= '';
            document.getElementById('telefono').value= '';
            document.getElementById('ubicacion').value= '';
            document.getElementById('presupuesto').value= '';
            document.getElementById('no_recamaras').value= '';
            document.getElementById('caract').value= '';
            swal('Good job!', 'You clicked the button!', 'success');

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}







