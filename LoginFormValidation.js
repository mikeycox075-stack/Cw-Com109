function checkform(){

    let a = $('#Em').val();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(a)) {
        alert("Please enter a valid email address");
        return false;
    }

    // PASSWORD *
    let b = $('#Pas').val();
    if (b === "") {
        alert("Password must be filled out");
        return false;
    }

}
