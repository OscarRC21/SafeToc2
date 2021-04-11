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
function guardar() {
    var personas = document.getElementById('personas').value;
    var fechallegada = document.getElementById('fechallegada').value;
    var fechasalida = document.getElementById('fechasalida').value;
    var habitaciones = document.getElementById('habitaciones').value;
    window.scrollTo(0, 2500);
    db.collection("reservacion").add({
        personas: personas,
        fechallegada: fechallegada,
        fechasalida: fechasalida,
        habitaciones: habitaciones
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('personas').value = '';
            document.getElementById('fechallegada').value = '';
            document.getElementById('fechasalida').value = '';
            document.getElementById('habitaciones').value = '';
            
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

//Leer documentos
var tabla = document.getElementById('tabla');
db.collection("reservacion").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
        <p><h2>Codigo de reservacion: </h2><h5> ${doc.id} </h5> </p><hr>
        <p><h5>Numero de habitaciones: ${doc.data().habitaciones}</h5></p>
        <p><h5>Numero de habitaciones: ${doc.data().personas}</h5></p>
        <p><h5>Fecha de llegada: ${doc.data().fechallegada}</h5></p>
        <p><h5>Fecha de salida: ${doc.data().fechasalida}</h5></p>
        <button class="btn btn-danger" onclick="eliminar('${doc.id}')">Cancelar</button></td>
        <button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Modificar datos</button></td>
        `
    });
});

//borrar documentos
function eliminar(id) {
    db.collection("reservacion").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

//editar documentos
function editar(id, nombre, apellido, fecha) {

    document.getElementById('personas').value = personas;
    document.getElementById('fechallegada').value = fechallegada;
    document.getElementById('fechasalida').value = fechasalida;
    document.getElementById('habitaciones').value = habitaciones;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function () {
        var washingtonRef = db.collection("reservacion").doc(id);
        // Set the "capital" field of the city 'DC'

        var personas = document.getElementById('personas').value;
        var fechallegada = document.getElementById('fechallegada').value;
        var fechasalida = document.getElementById('fechasalida').value;
        var habitaciones = document.getElementById('habitaciones').value;
        return washingtonRef.update({
            personas: personas,
            fechallegada: fechallegada,
            fechasalida: fechasalida,
            habitaciones: habitaciones
        })
            .then(function () {
                console.log("Document successfully updated!");
                boton.innerHTML = 'Guardar';
                document.getElementById('personas').value = '';
                document.getElementById('fechallegada').value = '';
                document.getElementById('fechasalida').value = '';
                document.getElementById('habitaciones').value = '';
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }
}




