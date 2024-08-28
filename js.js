// Función para encriptar texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoEncriptado;
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

// Función para capturar el texto y mostrar el resultado
function manejarEncriptacion() {
    let texto = document.querySelector('.textArea').value;
    let textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado);
}

function manejarDesencriptacion() {
    let texto = document.querySelector('.textArea').value;
    let textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en pantalla
function mostrarResultado(resultado) {
    let contenedorImagen = document.querySelector('.contenedor__imagen');
    let contenedorContenido = document.querySelector('.contenedor__contenido');
    let contenedorBoton = document.querySelector('.contenedor__boton');

    contenedorImagen.style.display = 'none';
    contenedorContenido.querySelector('h4').style.display = 'none';
    contenedorContenido.querySelector('p').textContent = resultado;
    contenedorBoton.style.display = 'block';
}

// Función para copiar texto
function copiarTexto() {
    let textoACopiar = document.querySelector('.contenedor__contenido p').textContent;
    navigator.clipboard.writeText(textoACopiar)
        .then(() => alert('Texto copiado al portapapeles!'))
        .catch(err => console.error('Error al copiar el texto:', err));
}

// Conectar funciones a botones
document.querySelector('.boton__encriptar').addEventListener('click', manejarEncriptacion);
document.querySelector('.boton__desencriptar').addEventListener('click', manejarDesencriptacion);
document.querySelector('.contenedor__boton .boton').addEventListener('click', copiarTexto);
