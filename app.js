function encriptarTexto(texto) {
  // Convertir todas las letras a minúsculas
  texto = texto.toLowerCase();

  // Reemplazar las letras según las reglas de encriptación
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");

  return texto;
}

function desencriptarTexto(textoEncriptado) {
  // Reemplazar las palabras encriptadas por las letras originales
  textoEncriptado = textoEncriptado.replace(/enter/g, "e");
  textoEncriptado = textoEncriptado.replace(/imes/g, "i");
  textoEncriptado = textoEncriptado.replace(/ai/g, "a");
  textoEncriptado = textoEncriptado.replace(/ober/g, "o");
  textoEncriptado = textoEncriptado.replace(/ufat/g, "u");

  return textoEncriptado;
}

function mostrarBotones() {
  var campoResultado = document.getElementById("campoResultado").value.trim();
  document.getElementById("btnCopiar").style.display =
    campoResultado === "" ? "none" : "block";
}

function validarTexto(texto) {
  // Expresión regular para validar que no haya caracteres especiales ni letras mayúsculas
  var regex = /^[a-z\s]*$/;
  return regex.test(texto);
}

document.getElementById("btnEncriptar").addEventListener("click", function () {
  var textoOriginal = document.getElementById("textoOriginal").value.trim();
  
  // Validar el texto antes de encriptar
  if (!validarTexto(textoOriginal)) {
    alert("Por favor, solo letras minúsculas y sin acentos");
    return;
  }
  
  var textoEncriptado = encriptarTexto(textoOriginal);
  var campoResultado = document.getElementById("campoResultado");
  campoResultado.value = textoEncriptado;

  // Ocultar imagen y texto
  document.querySelector(".img-encriptar").style.display = "none";
  document.querySelector(".textoFinal").style.display = "none";

  // Mostrar textarea
  campoResultado.style.display = "block";

  // Mostrar botones de copiar y limpiar
  mostrarBotones();
});

document.getElementById("btnDesencriptar").addEventListener("click", function () {
  var textoEncriptado = document.getElementById("campoResultado").value.trim();
  if (textoEncriptado === "") {
    alert("No hay texto encriptado para desencriptar.");
    return;
  }
  var textoDesencriptado = desencriptarTexto(textoEncriptado);
  document.getElementById("campoResultado").value = textoDesencriptado;

  // Ocultar imagen y texto
  document.querySelector(".img-encriptar").style.display = "none";
  document.querySelector(".textoFinal").style.display = "none";

  // Mostrar textarea y botón de copiar
  document.getElementById("campoResultado").style.display = "block";
  mostrarBotones();
});

document.getElementById("btnCopiar").addEventListener("click", function () {
  var campoResultado = document.getElementById("campoResultado");
  campoResultado.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
});
