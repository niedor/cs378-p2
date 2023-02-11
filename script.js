function decrementQuantity(id, input) {
    const minusButton = document.getElementById(id)
    const quantityField = document.getElementById(input)

    const currentValue = Number(quantityField.value) || 0;

    if (quantityField.value != 0) {
        quantityField.value = currentValue - 1;
    }
}

function incrementQuantity(id, input) {
    const plusButton = document.getElementById(id)
    const quantityField = document.getElementById(input)

    const currentValue = Number(quantityField.value) || 0;
    quantityField.value = currentValue + 1;
}

function updateSubtotal() {
    console.log("I got into updateSubtotal()");
    console.log("Innerhtml: " + document.getElementById("subtotal-val").innerHTML);
    
    let value = 0;
    value += document.getElementById("item-quantity-mac").value * 5;
    value += document.getElementById("item-quantity-pasta").value * 5;
    value += document.getElementById("item-quantity-tacos").value * 8;
    value += document.getElementById("item-quantity-ench").value * 10;

    document.getElementById("subtotal-val").innerHTML = "$" + value;
}

function clearAll() {
    document.getElementById("item-quantity-mac").value = 0;
    document.getElementById("item-quantity-pasta").value = 0;
    document.getElementById("item-quantity-tacos").value = 0;
    document.getElementById("item-quantity-ench").value = 0;
}

function openPopup() {
    document.getElementById("popup-container").style.display = "block";

    const orderInfo = document.getElementById("order");
    const subtotal = document.getElementById("subtotal-val").innerHTML;
    // if (subtotal != "$0") {
    //     // return $('<p>'>).addClass('order-list')
    // }
}

function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}