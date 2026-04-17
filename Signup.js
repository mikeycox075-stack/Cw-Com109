let memberships = [];

// save membership being purchased
function saveMembership() {
    localStorage.setItem("memberships", JSON.stringify(memberships));
}
// load memberships on page load
window.onload = function () {
    const savedMemberships = localStorage.getItem("memberships");
    if (savedMemberships) {
        memberships = JSON.parse(savedMemberships);
    }
    updatePurchase();
};

// membership being purchased (one at a time)
function addMembership(tier, cost) {
    memberships[0] = {tier, cost};
    updatePurchase();
    saveMembership();
}
function removeMembership(tier) {
    memberships = memberships.filter(membership => membership.tier !== tier);
    updatePurchase();
    saveMembership();
}
function updatePurchase() {
    const membershipPurchased = document.getElementById("membership-purchased");
    const paymentFrm = document.getElementById("payment-frm");
    const checkoutBtn = document.querySelector(".checkout");

    membershipPurchased.innerHTML = "";

    memberships.forEach(membership => {
        const li = document.createElement("li");    // displays membership being purchased
        // formatting of li
        const liCol1 = document.createElement("div");   // col1 -> price
        liCol1.textContent = `£${membership.cost}`;
        liCol1.classList.add("li-col1");
        const liCol2 = document.createElement("div");   // col2 -> tier
        liCol2.textContent = `${membership.tier} Subscription`;
        liCol2.classList.add("li-col2");
        // remove btn
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-membership");
        removeBtn.onclick = () => removeMembership(membership.tier);
        // remove-btn icon
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "Images/Icons/delete.svg"; 
        deleteIcon.alt = "Remove Membership";   // img alt text
        removeBtn.appendChild(deleteIcon);

        // appending all formatting elements to li
        li.appendChild(liCol1);
        li.appendChild(liCol2);
        li.appendChild(removeBtn);
        membershipPurchased.appendChild(li);
    });

    // disable payment frm if no membership being purchased
    if (memberships.length === 0) {
        paymentFrm.querySelectorAll("input", "button").forEach(field => field.disabled = true);
        checkoutBtn.disabled = true;
        paymentFrm.reset(); // empties all input fields
        clearErrorMsgs();
        clearInputErrors();
    } else {
        paymentFrm.querySelectorAll("input", "button").forEach(field => field.disabled = false);
        checkoutBtn.disabled = false;
    }
}

// payment form validation
function validatePayment(event) {
    event.preventDefault(); // prevents submission if invalid

    clearErrorMsgs();       // clears previous error msgs
    clearInputErrors();     // clears highlighted input fields

    let isValid = true;     // form valid by default

    const cardName = document.getElementById("cname").value.trim();
    const cardNum = document.getElementById("cnum").value.trim();
    const expDate = document.getElementById("expdate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    // format checks
    const cardNumPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;     // 1111-1111-1111-1111
    const expDatePattern = /^(0[1-9]|1[1-2])\/\d{2}$/;      // MM/YY
    const cvvPattern = /^\d{3}$/;                           // 3 digits

    // presence check
    if (cardName === "") {
        displayError("cname-error", "Enter Name on Card");
        inputError("cname");
        isValid = false;
    }
    // format checks
    if (!cardNumPattern.test(cardNum)) {
        displayError("cnum-error", "Enter valid Card Number (eg. 1111-2222-3333-4444)");
        inputError("cnum");
        isValid = false;
    }
    if (!expDatePattern.test(expDate)) {
        displayError("expdate-error", "Enter valid Expiry Date (eg. 11/26)");
        inputError("expdate");
        isValid = false;
    }
    if (!cvvPattern.test(cvv)) {
        displayError("cvv-error", "Enter valid CVV (must be 3 digits)");
        inputError("cvv");
        isValid = false;
    }

    // all fields valid = submission allowed
    if (isValid) {
        alert("Payment successful")
        // clear memberships
        memberships = [];
        updatePurchase();
        // clear payment frm
        document.getElementById("payment-frm").reset();
    }
    else {
        return false;
    }
}
function clearErrorMsgs() {
    const errorMsgs = document.querySelectorAll(".error-msg");
    errorMsgs.forEach(msg => {      // goes through each error msg
        msg.style.display = "none"; // hides error msg
    });
}
function clearInputErrors() {
    const inputFields = document.querySelectorAll("#payment-frm input");
    inputFields.forEach(inputField => {
        inputField.style.border = "";
    });
}
function displayError(errorId, msg) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = msg;
    errorElement.style.display = "block"    // shows error msg
}
function inputError(inputId) {
    const inputField = document.getElementById(inputId);
    inputField.style.border = "1px solid #fff281";  // highlights error fields
}