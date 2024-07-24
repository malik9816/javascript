
function formValidation() {
    let name = document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let errorMessage=document.getElementById("errorMessage");
    
    let errors = [];
    if(name === ""){
        errors.push("Name is required");
    }else if(email === ""){
        errors.push("Email is required");
    }else if(password === ""){
        errors.push("password is required");
    }else if(password > 4){
        errors.push("Password should be max 8 character long")
    }

    if(errors.length > 0){
        errorMessage.innerHTML = errors.join("<br>");
        return false;
    }else{
        errorMessage.innerHTML = "Form submittion successfull"
    }
}
formValidation()