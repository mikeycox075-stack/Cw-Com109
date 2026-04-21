let cart = [];

// save cart so stays after page refresh
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}
// load cart on page load
window.onload = function() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCart();
};
// updating cart
function addItem(name, price, imageSrc) {
    const product = cart.find(item => item.name === name);

    if (product) {
        product.qty += 1;   // if item found in cart
    } else {
        cart.push({name, price, imageSrc, qty: 1});   // if item not in cart
    }
    updateCart();
    saveCart();
}
function removeItem(name) {
    cart = cart.filter(item => item.name !== name); // removes item from cart
    updateCart();
    saveCart();
}
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartIcon = document.querySelector(".cart");
    const paymentFrm = document.getElementById("payment");
    const checkoutBtn = document.querySelector(".checkout");

    cartItems.innerHTML = "";
    let total = 0;      // cart total
    let totalQty = 0;   // total no. of items in cart

    cart.forEach(item => {
        const li = document.createElement("li");    // to display items in cart

        // li formatting
        // col1 -> item img
        const itemCol1 = document.createElement("div");
        itemCol1.classList.add("item-col1");
        const itemImg = document.createElement("img");
        itemImg.src = `${item.imageSrc}`;
        itemImg.alt = `${item.name}`;   // img alt text
        itemCol1.appendChild(itemImg);    // attaches img to col1
        // col2 -> name
        const itemCol2 = document.createElement("div");
        itemCol2.classList.add("item-col2");
        itemCol2.textContent = `${item.name}`;
        // col3 -> price
        const itemCol3 = document.createElement("div");
        itemCol3.classList.add("item-col3");
        itemCol3.textContent = `£${item.price}`;
        // col4 -> qty
        const itemCol4 = document.createElement("div");
        itemCol4.classList.add("item-col4");
        itemCol4.textContent = `Qty: ${item.qty}`;
        // remove-item btn
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");
        removeBtn.onclick = () => removeItem(item.name);
        // remove-btn icon
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "Images/Icons/delete.svg";
        deleteIcon.alt = "Remove Item"; // img alt text
        removeBtn.appendChild(deleteIcon);

        li.appendChild(itemCol1);
        li.appendChild(itemCol2);
        li.appendChild(itemCol3);
        li.appendChild(itemCol4);
        li.appendChild(removeBtn);
        cartItems.appendChild(li);

        total += item.price * item.qty;
        totalQty += item.qty;
    });

    cartTotal.textContent = total.toFixed(2);   // to display cart total
// updating basket badge
    let badge = cartIcon.querySelector(".badge");
    if (!badge) {
        badge = document.createElement("span");
        badge.classList.add("badge");
        cartIcon.appendChild(badge);
    }
 // update badge/hide it when no items in cart
    if (totalQty > 0) {
        badge.textContent = totalQty;
        badge.style.display = 'flex';   // badge = visible
        // payment frm & checkout btn enabled
        paymentFrm.querySelectorAll("input", "button").forEach(field => field.disabled = false);
        checkoutBtn.disabled = false;
    } else {
        badge.style.display = 'none';   // badge invisible = no items in cart
        // payment frm & checkout btn disbaled
        paymentFrm.querySelectorAll("input", "button").forEach(field => field.disabled = true);
        checkoutBtn.disabled = true;
        paymentFrm.reset(); // empties all input fields
        clearErrorMsgs();
        clearInputErrors();
    }
}
// opening/closing cart
function openCart() {
    const basket = document.getElementById("shopping-basket");
    basket.classList.add("open");   // animation class
}
function closeCart() {
    const basket = document.getElementById("shopping-basket");
    basket.classList.remove("open");   // animation class
}

// payment form validation
function validateForm(event) {
    event.preventDefault(); // prevents submission if invalid

    clearErrorMsgs();   // clears previous error msgs
    clearInputErrors(); // clears highlighted input fields

    let isValid = true; // form valid by default

    const fname = document.getElementById("fname").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const postCode = document.getElementById("pcode").value.trim();
    const cardName = document.getElementById("cname").value.trim();
    const cardNum = document.getElementById("cnum").value.trim();
    const expDate = document.getElementById("expdate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    // format checks
    const postCodePattern = /^BT\d{1,2}\s\d{1}[a-zA-Z]{2}$/i;   // BT00 0LL/BT0 0LL
    const cardNumPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;   // 1111-1111-1111-1111
    //const expDatePattern = /^0[1-9]|1[1-2]\/\d{2}$/;    // MM/YY
    const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;   // 3 digits

    // presence checks
    if (fname === "") {
        displayError("fname-error", "Enter Full Name");
        inputError("fname");
        isValid = false;
    }
    if (address === "") {
        displayError("address-error", "Enter Address");
        inputError("address");
        isValid = false;
    }
    if (city === "") {
        displayError("city-error", "Enter City/Town");
        inputError("city");
        isValid = false;
    }
    if (cardName === "") {
        displayError("cname-error", "Enter Name on Card");
        inputError("cname");
        isValid = false;
    }
    // post code
    if (!postCodePattern.test(postCode)) {
        displayError("pcode-error", "Enter valid Post Code (eg. BT00 0LL)");
        inputError("pcode");
        isValid = false;
    }
    // card num
    if (!cardNumPattern.test(cardNum)) {
        displayError("cnum-error", "Enter valid Card Number (eg. 1234-1234-1234-1234)");
        inputError("cnum");
        isValid = false;
    }
    // exp date
    if (!expDatePattern.test(expDate)) {
        displayError("expdate-error", "Enter valid Expiry Date (eg. 11/26)");
        inputError("expdate");
        isValid = false;
    }
    // cvv
    if (!cvvPattern.test(cvv)) {
        displayError("cvv-error", "Enter valid CVV (must be 3 digits)");
        inputError("cvv");
        isValid = false;
    }

    // all fields valid = submission allowed
    if (isValid) {
        openTransaction();
        // clear cart
        cart = [];
        updateCart();
        saveCart();
        // clear payment frm
        document.getElementById("payment").reset();
        closeCart();
        return true;
    } else {
        return false;
    }
}
function clearErrorMsgs() {
    const errorMsgs = document.querySelectorAll(".error-msg");
    errorMsgs.forEach(msg => {  // goes through each error msg
        msg.style.display = "none"; // hides error msg
    });
}
function clearInputErrors() {
    const inputFields = document.querySelectorAll("#payment input");
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
    inputField.style.border = "1px solid #fff281";
}
// successful payment alert
function openTransaction() {
    const sucPay = document.getElementById("sp");
    sucPay.classList.add("open");
}
function closeTransaction() {
    const sucPay = document.getElementById("sp");
    sucPay.classList.remove("open");
}