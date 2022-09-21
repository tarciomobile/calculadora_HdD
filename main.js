//Calculando a nota mínima e a média
function calculo(){
  
var nota1 =Number( document.getElementById("nota1").value )
var nota2 =Number( document.getElementById("nota2").value )
var nota3 =Number( document.getElementById("nota3").value )
var nota4 =Number( document.getElementById("nota4").value )

var excluida = Math.min(nota1, nota2, nota3, nota4)
var media=(nota1+nota2+nota3+nota4 - excluida)/3

document.getElementById("media").textContent="Média: " + media.toFixed(2)

document.getElementById("exclude").textContent="Nota excluída: " + excluida.toFixed(2)

}
