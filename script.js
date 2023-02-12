function decrementQuantity(id, input) {
    const minusButton = document.getElementById(id)
    const quantityField = document.getElementById(input)

    const currentValue = Number(quantityField.value) || 0;

    if (quantityField.value != 0) {
        quantityField.value = currentValue - 1;
    }
    updateSubtotal();
}

function incrementQuantity(id, input) {
    const plusButton = document.getElementById(id)
    const quantityField = document.getElementById(input)

    const currentValue = Number(quantityField.value) || 0;
    quantityField.value = currentValue + 1;
    updateSubtotal();
}

function updateSubtotal() {
    let value = 0;
    value += Number(document.getElementById("item-quantity-mac").value) * 5;
    value += Number(document.getElementById("item-quantity-pasta").value) * 5;
    value += Number(document.getElementById("item-quantity-tacos").value) * 8;
    value += Number(document.getElementById("item-quantity-ench").value) * 10;

    document.getElementById("subtotal-val").innerHTML = "$" + value;
}

function clearAll() {
    document.getElementById("item-quantity-mac").value = 0;
    document.getElementById("item-quantity-pasta").value = 0;
    document.getElementById("item-quantity-tacos").value = 0;
    document.getElementById("item-quantity-ench").value = 0;

    document.getElementById("subtotal-val").innerHTML = "$0";
    document.getElementById("order").innerHTML = "No items in cart";
    document.getElementById("popup-description").innerHTML = "Whoops..";

}

function updateOrderList() {
    macQuantity = Number(document.getElementById("item-quantity-mac").value);
    pastaQuantity = Number(document.getElementById("item-quantity-pasta").value);
    tacoQuantity = Number(document.getElementById("item-quantity-tacos").value);
    enchQuantity = Number(document.getElementById("item-quantity-ench").value);

    if (macQuantity || pastaQuantity || tacoQuantity || enchQuantity) {
        document.getElementById("popup-description").innerHTML = "Your order has been placed!";

        var elem = "";
        if (macQuantity) {
            elem += `${macQuantity} mac & cheese \n`
        }
        
        if (pastaQuantity) {
            elem += `${pastaQuantity} pasta \n`
        }

        if (tacoQuantity) {
            elem += `${tacoQuantity} taco \n`
        }

        if (enchQuantity) {
            elem += `${enchQuantity} enchilada`
        }

        document.getElementById("order").innerHTML = elem;
    }
}

function openPopup() {
    updateOrderList();
    document.getElementById("popup-container").style.display = "block";
}

function closePopup() {
    document.getElementById("popup-container").style.display = "none";
}