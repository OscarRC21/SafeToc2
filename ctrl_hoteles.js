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

//Agregar documentos
function guardar(){
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var fecha = document.getElementById('fecha').value;

    db.collection("users").add({
        first: nombre,
        last: apellido,
        born: fecha
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('fecha').value = '';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//Leer documentos
var tabla = document.getElementById('tabla');
db.collection("Hotel").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
        <tr>
        <td>${doc.data().hotel}</td>
        <td>${doc.data().lugar}</td>
        <td>${doc.data().tipo}</td>
        <td>${doc.data().Descripcion}</td>
        <br><br>
        <td><input type="button" class="btn btn-warning" value="Reservacion" onclick="window.location.href='reservacion.html'" /></td>
        </tr>
        `
    });
});

//<td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Reservar</button></td>

//editar documentos
function editar(id,nombre,apellido,fecha){

    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido;
    document.getElementById('fecha').value = fecha;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function(){
        var washingtonRef = db.collection("users").doc(id);
        // Set the "capital" field of the city 'DC'

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var fecha = document.getElementById('fecha').value;

        return washingtonRef.update({
            first: nombre,
            last: apellido,
            born: fecha
        })
        .then(function() {
            console.log("Document successfully updated!");
            boton.innerHTML = 'Guardar';
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('fecha').value = '';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
}




