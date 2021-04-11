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
    var telefono = document.getElementById('tel').value;
    var comentario = document.getElementById('comentario').value;
    if(nombre == "" || email== "" || telefono == "" || comentario== ""){
        //swal('Good job!', 'You clicked the button!', 'error');
    }else{
    db.collection("dudas").add({
        nombre: nombre,
        email: email,
        telefono: telefono,
        comentario: comentario
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('nombre').value= '';
            document.getElementById('email').value= '';
            document.getElementById('tel').value= '';
            document.getElementById('comentario').value= '';
            swal('Good job!', 'You clicked the button!', 'success');

        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }
}







