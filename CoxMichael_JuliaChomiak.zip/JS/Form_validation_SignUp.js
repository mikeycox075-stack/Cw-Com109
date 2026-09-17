function checkform(){

    clearErrorMsgs(); //caling the clear error msg function so that it clears msgs.
    clearInputErrors(); //caling the clear error msg function so it clears inputs.

    //email *
    let a = document.forms["sign_up_form"]["Em"].value; //getting email from form.
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //getting regex.
    if (!emailRegex.test(a)) { //compairing. 
    displayError("Em-error", "Please enter a valid email address");
    inputError("Em");

    return false;
}

    //password *
    let b = document.forms["sign_up_form"]["Pas"].value; //getting password from form. 
    if (b == "") {
    displayError("Pas-error", "Please enter a valid Passowrd");
    inputError("Pas"); //throws error.
    return false;
}

    //confirm passowrd *
    let c = document.forms["sign_up_form"]["Pas"].value; //gets password 1 and two from form. 
    let d = document.forms["sign_up_form"]["Pas2"].value;
    if (d == "") {
    displayError("Pas2-error", "Please enter a valid Password");
    inputError("Pas2");//throws error.
    return false;
}
    if( d != c) { //compaires them.
    displayError("Pas2-error", "Please enter a valid Password");
    inputError("Pas2"); 

    return false;
}

	//name *
	let e = document.forms["sign_up_form"]["Fn"].value; //gets first name.
  	if (e == "") { //checks for nulls.
    displayError("Fn-error", "Please enter a First Name");
    inputError("Fn"); 
    return false;
}

    //surname *
    let f = document.forms["sign_up_form"]["Sn"].value; //checks for second name. 
    if (f == "") { //checks for nulls.
    displayError("Sn-error", "Please enter a Second Name");
    inputError("Sn"); 
    return false;
}

    //DOB *
    let g = document.forms["sign_up_form"]["DOB"].value; //gets dob from form.
    const DOBRegex = /^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[0-2])[\/\-](19|20)\d{2}$/; 
    //creates regex for dob for example 12/12/2001.
    if (!DOBRegex.test(g)) { //compairs.
    displayError("DOB-error", "Please enter a valid Date of birth"); //throws error.
    inputError("DOB"); 
    return false;
}
    //PHONE NUMBER*
    let h = document.forms["sign_up_form"]["Ph"].value; //gets phone number from form.
    const PhoneRegex = /^(?:\+44|0)(?:\d\s?){9,10}$/; //creates regex.
    if (!PhoneRegex.test(h)) { //compaires.
    displayError("Ph-error", "Please enter a valid Phone Number");
    inputError("Ph"); 
    return false; //throws an error.
}
    //ADDRESS*
    let i = document.forms["sign_up_form"]["Ad"].value; //gets address.
    const AddressRegex = /^[0-9A-Za-z\s.,'\/\-#]{5,100}$/; //creating a regex.
    if (!AddressRegex.test(i)) {
    displayError("Ad-error", "Please enter a valid Address");
    inputError("Ad");  //checks for valid email then throws an error.
    //if incorrect. 
    return false;
}

    //TOWN *
    let j = document.forms["sign_up_form"]["Tw"].value; //gets town from form. 
    if (j == "") { //checks for nulls. 
    displayError("Tw-error", "Please enter a valid Town");
    inputError("Tw"); //throws error.
    return false;
}

    //COUNTY * 
    let k = document.forms["sign_up_form"]["Ct"].value; //gets Country from form.
    if (k == "") { //checks for nulls.
    displayError("Ct-error", "Please enter a valid Country");
    inputError("Ct");//throws error.
    return false;
}

    //POSTCODE *
    let l = document.forms["sign_up_form"]["Post"].value;
    const PostRegex = /^(gir 0aa|[a-z]{1,2}\d[a-z\d]? ?\d[a-z]{2})$/i; //creating regex. 
    if (!PostRegex.test(l)) { //compaires regex with form input.
    displayError("Post-error", "Please enter a Postcode");
    inputError("Post"); ;//throws error.
    return false; //returns false. 

    //tells the user the sign up form has been successfully filled out. 
}
    alert("You have enterd valid details, please wait while we send you an email with the details of the creation of your account")

}//end of function 



function clearErrorMsgs() {
    let errorMsgs = document.querySelectorAll(".error-msg");

    for (let i = 0; i < errorMsgs.length; i++) { //going through each error msg.
        errorMsgs[i].style.display = "none"; // hiding the error. 
        errorMsgs[i].textContent = "";       //setting it to null. 
    }
}//end of function. w


function clearInputErrors() {
    let inputs = document.querySelectorAll("input"); //getting inputs.

    for (let i = 0; i < inputs.length; i++) { //going through inputs.
        inputs[i].style.border = ""; // remove the border highlight.
    }
}//end of function.
