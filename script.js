function updatePrice() {
    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;

    // Fetch the product price from the server based on the selected product
    // Example: You might make an AJAX request to the server to get the price
    const productPrice = fetchProductPriceFromServer(productName);

    // Calculate the total price
    const totalPrice = productPrice * quantity;

    // Update the total price field
    document.getElementById('totalPrice').value = totalPrice.toFixed(2); // Display total price with two decimal places
}

// Example: You need to implement this function to fetch product price from the server
function fetchProductPriceFromServer(productName) {
    // Make an AJAX request or use another method to fetch the price from the server
    // Replace this with your actual implementation
    return 10.00; // Example price, replace with the actual price
}
