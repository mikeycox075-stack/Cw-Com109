function checkform(){
    //email *
    let a = document.forms["sign_up_form"]["Em"].value; //getting email from form
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //getting regex
    if (!emailRegex.test(a)) { //compairing 
    alert("Please enter a valid email address"); //throws error if incorrect 
    return false;
}

    //password *
    let b = document.forms["sign_up_form"]["Pas"].value;a //getting password from form 
    if (b == "") {
    alert("Password must be filled out"); //throws error if incorrect as it compaires 
    return false;
}

    //confirm passowrd *
    let c = document.forms["sign_up_form"]["Pas"].value; //gets password 1 and two from form 
    let d = document.forms["sign_up_form"]["Pas2"].value;
    if (d == "") {
    alert("Password must be filled out"); //checks for nulls
    return false;
}
    if( d != c) {
    alert("Passwords must be match"); //compaires them
    return false;
}

	//name *
	let e = document.forms["sign_up_form"]["Fn"].value; //gets first name
  	if (e == "") {
    alert("Name must be filled out"); //checks for nulls
    return false;
}

    //surname *
    let f = document.forms["sign_up_form"]["Sn"].value; //checks for second name 
    if (f == "") {
    alert("Surname must be filled out"); //checks for nulls
    return false;
}

    //DOB *
    let g = document.forms["sign_up_form"]["DOB"].value; //gets dob from form
    const DOBRegex = /^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[0-2])[\/\-](19|20)\d{2}$/; 
    //creates regex for dob for example 12/12/2001.
    if (!DOBRegex.test(g)) { //compairs 
    alert("Please enter a valid DOB");//throws error 
    return false;
}
    //PHONE NUMBER*
    let h = document.forms["sign_up_form"]["Ph"].value; //gets phone number from form 
    const PhoneRegex = /^(?:\+44|0)(?:\d\s?){9,10}$/; //creates regex 
    if (!PhoneRegex.test(h)) { //compaires 
    alert("Please enter a valid Phone Number"); //throws an error 
    return false;
}
    //ADDRESS*
    let i = document.forms["sign_up_form"]["Ad"].value; //gets address
    const AddressRegex = /^[0-9A-Za-z\s.,'\/\-#]{5,100}$/; //creating a regex.
    if (!AddressRegex.test(i)) {
    alert("Please enter a valid Address"); //checks for valid email then throws an error.
    //if incorrect. 
    return false;
}

    //TOWN *
    let j = document.forms["sign_up_form"]["Tw"].value; //gets town from form. 
    if (j == "") { //checks for nulls 
    alert("Town must be filled out"); //throws error.
    return false;
}

    //COUNTY * 
    let k = document.forms["sign_up_form"]["Ct"].value; //gets Country from form.
    if (k == "") { //checks for nulls
    alert("County must be filled out");//throws error.
    return false;
}

    //POSTCODE *
    let l = document.forms["sign_up_form"]["Post"].value;
    const PostRegex = /^(gir 0aa|[a-z]{1,2}\d[a-z\d]? ?\d[a-z]{2})$/i; //creating regex. 
    if (!PostRegex.test(l)) { //compaires regex with form input.
    alert("Please enter a valid Postcode"); //throws error.
    return false; //returns false. 

    //tells the user the sign up form has been successfully filled out. 

    alert("You have enterd valid details, please wait while we send you an email with the details of the creation of your account")
}
}//end of function 