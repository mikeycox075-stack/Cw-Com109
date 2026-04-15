function checkform(){ //checking the validation of form 

    let a = $('#Em').val(); //getting em id from form and applying it to a 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //attaching a regex to compare 
    if (!emailRegex.test(a)) { //if inout does not equal regex, it throws an error 
        alert("Please enter a valid email address");
        return false; //returns, user must re enter email
    } //end of email

    // PASSWORD *
    let b = $('#Pas').val(); //gets password from form 
    if (b === "") { //checks for null or blank
        alert("Password must be filled out");
        return false; //throws an error 
    } //end of password 

    alert("Logged in");
}//end of function 
