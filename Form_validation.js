function checkform(){
    //email *
    let a = document.forms["sign_up_form"]["Em"].value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(a)) {
    alert("Please enter a valid email address");
    return false;
}

    //password *
    let b = document.forms["sign_up_form"]["Pas"].value;a
    if (b == "") {
    alert("Password must be filled out");
    return false;
}

    //confirm passowrd *
    let c = document.forms["sign_up_form"]["Pas"].value;
    let d = document.forms["sign_up_form"]["Pas2"].value;
    if (d == "") {
    alert("Password must be filled out");
    return false;
}
    if( d != c) {
    alert("Passwords must be match");
    return false;
}

	//name *
	let e = document.forms["sign_up_form"]["Fn"].value;
  	if (e == "") {
    alert("Name must be filled out");
    return false;
}

    //surname *
    let f = document.forms["sign_up_form"]["Sn"].value;
    if (f == "") {
    alert("Surname must be filled out");
    return false;
}

    //DOB *
    let g = document.forms["sign_up_form"]["DOB"].value;
    const DOBRegex = /^(0[1-9]|[12][0-9]|3[01])[\/\-](0[1-9]|1[0-2])[\/\-](19|20)\d{2}$/;
    if (!DOBRegex.test(g)) {
    alert("Please enter a valid DOB");
    return false;
}
    //PHONE NUMBER*
    let h = document.forms["sign_up_form"]["Ph"].value;
    const PhoneRegex = /^(?:\+44|0)(?:\d\s?){9,10}$/;
    if (!PhoneRegex.test(h)) {
    alert("Please enter a valid Phone Number");
    return false;
}
    //ADDRESS*
    let i = document.forms["sign_up_form"]["Ad"].value;
    const AddressRegex = /^[0-9A-Za-z\s.,'\/\-#]{5,100}$/;
    if (!AddressRegex.test(i)) {
    alert("Please enter a valid Address");
    return false;
}

    //TOWN *
    let j = document.forms["sign_up_form"]["Tw"].value;
    if (j == "") {
    alert("Town must be filled out");
    return false;
}

    //COUNTY * 
    let k = document.forms["sign_up_form"]["Ct"].value;
    if (k == "") {
    alert("County must be filled out");
    return false;
}

    //POSTCODE *
    let l = document.forms["sign_up_form"]["Post"].value;
    const PostRegex = /^(gir 0aa|[a-z]{1,2}\d[a-z\d]? ?\d[a-z]{2})$/i;
    if (!PostRegex.test(l)) {
    alert("Please enter a valid Postcode");
    return false;
}
}//end of function 