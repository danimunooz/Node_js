const express = require('express');
const path = require('path');
const app = express(); //crear una instancia de la aplicacion express
const PORT = 3000;
//configurar express para que procese los datos del formulario en formato url
app.use(express.urlencoded({ extended: true }));//middleware que permite a express entender datos enviados-
//definir la ruta para servir el archivo html
app.get('/', (req, res) => {
    //envia el archivo formulario .html al cliente
    res.sendFile(path.join(__dirname, 'formulario.html'))//
});
//define la ruta para procesar el envio del formulario
app.post('/registro', (req, res) => {
    //accede a los datos enviados en el formulario 
    // const datosFormulario = req.body;
    const { nombre, email, edad, cursos } = req.body;
    console.log(`
        Nombre: ${nombre}
        Email: ${email}
        Edad: ${edad}
        Cursos: ${cursos}
    `);
    res.send(`Se registró el estudiante correctamente:
        <br> 
        Nombre: ${nombre},
        <br> 
        Email: ${email},
        <br> 
        Edad: ${edad},
        <br> 
        Cursos: ${cursos}`);
});
app.listen(PORT, () => {
    console.log(`servidor en ejecucion en http://localhost:${PORT}`);
});