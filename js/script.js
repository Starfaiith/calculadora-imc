function calcular(){
  let valAltura = parseInt(document.getElementById("valAltura").value)
  let valPeso = parseInt(document.getElementById("valPeso").value)
  let result = (document.getElementById('result'))
  let estadoIMC = (document.getElementById('estadoIMC'))
  if(valPeso /(valAltura * valAltura) < 0.00167){
       estadoIMC.value = "Magreza"
       result.value = (valPeso /(valAltura * valAltura))
  }
  if(valPeso /(valAltura * valAltura) < 0.00237 && valPeso /(valAltura * valAltura) >= 0.00167){
       estadoIMC.value = "Normal"
       result.value = (valPeso /(valAltura * valAltura))
  }
  if(valPeso /(valAltura * valAltura) < 0.00273 && valPeso /(valAltura * valAltura) >= 0.00237){
       estadoIMC.value = "Sobrepeso"
       result.value = (valPeso /(valAltura * valAltura))
  }
  if(valPeso /(valAltura * valAltura) >= 0.00273 ){
       estadoIMC.value = "Obesidade"
       result.value = (valPeso /(valAltura * valAltura))
  }
};