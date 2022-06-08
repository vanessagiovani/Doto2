var err = document.getElementById("err")

function validate(){
    if(validateUsername()){
        return;
    }
    else if(validateEmail()){
        return;
    }
    else if(validatePassword()){
        return;
    }
    else if(validateRegion()){
        return;
    }
    else if(validateDOB()){
        return;
    }
    else{
        err.innerHTML = "Account Created";
    }
}

function validateUsername(){
    var name = document.getElementById("username").value;

    if(name.length < 6){
        err.innerHTML = "Username must be minimal 6 characters long"
        return true;
    }
    return false;
}

function validateEmail(){
    var Email = document.getElementById("email").value;

    if(Email.includes('@') == false){
        err.innerHTML = "Email must contains @"
        return true
    }
    else if(Email.includes("@.")){
        err.innerHTML = "Invalid Email"
        return true
    }
    return false;
}

function validatePassword(){
    var Password = document.getElementById("password").value;

    var upperCaseTtl = 0;
    var lowerCaseTtl = 0;
    var num = 0;

    for (let i = 0; i < Password.length; i++){
        if(!isNaN(Password.charAt(i))){
            num++;
        }
        else{
            if(Password.charAt(i) == Password.charAt(i).toUpperCase()){
                upperCaseTtl++;
            }
            else if(Password.charAt(i) == Password.charAt(i).toLowerCase()){
                lowerCaseTtl++;
            }
        }
    }

    if(upperCaseTtl == 0){
        err.innerHTML = "Password must contains uppercase letter";
        return true;
    }
    else if(lowerCaseTtl == 0){
        err.innerHTML = "Password must contains lowercase letter";
        return true;
    }
    else if(num == 0){
        err.innerHTML = "Password must contains number";
        return true;
    }
    else if(Password.length < 8){
        err.innerHTML = "Password must be at least 8 characters";
        return true;
    }
    return false;
}

function validateRegion(){
    var reg = document.getElementById("region").value;
    console.log(reg);
    if(reg == "Choose Here"){
        err.innerHTML = "Region must be chosen";
        return true;
    }
    return false;
}

function validateDOB(){
    var date = document.getElementById("dob").value;
    console.log(date);
    if(date == ""){
        err.innerHTML = "Date must be filled";
        return true;
    }
    return false;
}

function clearInner(){
    err.innerHTML="";
}