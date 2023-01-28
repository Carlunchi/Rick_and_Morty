

export default function validation(inputs){
    const errors ={}
    const regexEmail= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexpassword= /^(?=\w*\d)\S{6,10}$/;
    const regexnumber= /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;

    if(!regexEmail.test(inputs.username)){
        errors.username = "Ingrese un Email"
    }
    if(!inputs.username){
        errors.username = "No debe estar vacio"
    }
    if(!inputs.username.length > 35){
        errors.username = "Debe ser menor a 35 caracteres"
    }
    if(!regexnumber.test(inputs.password)){
        errors.password = "La contraseña debe contener al menos un número y una letra"
    }
    if (!regexpassword.test(inputs.password)){
        errors.password = "Debe tener entre 6 y 10 caracteres"
    }
    return errors;
}