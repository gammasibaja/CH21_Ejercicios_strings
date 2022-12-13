let btn_Enviar = document.getElementById("btn_Enviar");
btn_Enviar.addEventListener ("click", function(event){
    event.preventDefault();

    let exampleFormControlInput1 = document.getElementById ("exampleFormControlInput1");
    let exampleFormControlTextarea1= document.getElementById("exampleFormControlTextarea1");
    let alerta_error = docuemnt.getElementById ("alerta_error");

    if (exampleFormControlTextarea1.ariaValueMax.length>20){
        alerta_error.innerHTML = "el mensaje debe contener 20 caracteres o más"
        alerta_error.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();

    }
    if (exampleFormControlInput1.value.match(emailRegex)==null){
        alerta_error.style.display="block";
        alerta_error.innerHTML+="<br>El correo electronico no es válido"
    }
    let RFCRegex
    if (exampleFormControlInput2.value.match(RFCRegex)==null){
        alerta_error.style.display="block";
        alerta_error.innerHTML +="<br>El RFC electronico no es válido"
    }
})