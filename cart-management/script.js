var Product = /** @class */ (function () {
    function Product(name, price, imageUrl) {
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
    Product.prototype.productInfo = function () {
        return this.name + " + " + this.imageUrl;
    };
    return Product;
}());
var Cart = /** @class */ (function () {
    function Cart(productName, price) {
        this.productName = productName;
        this.price = price;
    }
    return Cart;
}());
var productListing = [];
var cartListing = [];
var product1 = new Product('iPhone 12', 999, './images/iphone12.png');
var product2 = new Product('Pixel 4', 799, 'images/pixel4.png');
var product3 = new Product('Samsung Galaxy Fold', 2000, './images/samsungfoldnote.png');
var product4 = new Product('iPhone 12 mini', 699, './images/iphoneMini.png');
var product5 = new Product('Samsung Fold Z', 1500, './images/samsungfold.png');
var product6 = new Product('Moto Flip', 899, './images/motoflip.png');
var product7 = new Product('Samsung S21', 1200, './images/samsungs21.png');
productListing.push(product1);
productListing.push(product2);
productListing.push(product3);
productListing.push(product4);
productListing.push(product5);
productListing.push(product6);
productListing.push(product7);
function displayProductListing() {
    var container = document.getElementById('cardContainer');
    var content = '';
    productListing.forEach(function (product, index) {
        content += "<div id=" + index + " class=\"card\" style=\"width: 18rem;\">\n                        <img src=" + product.imageUrl + " class=\"card-img-top\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">" + product.name + "</h5>\n                            <h6 class=\"card-text\">Price: $" + product.price + "</h6>\n                            <div class=\"quantity-wrapper\">\n                                <button type=\"button\" class='btn btn-secondary' onclick=\"onAddItem(" + index + ")\">Add</button>\n                            </div>\n                        </div>\n                    </div>";
    });
    container.innerHTML = content;
}
function onAddItem(index) {
    var cartItem = productItemEntry(index);
    insertCartListIntoSession(cartItem);
    displayCartListing();
    displayCartSize();
    calculateTotalAmount();
}
function productItemEntry(index) {
    var productName = productListing[index].name;
    var productPrice = productListing[index].price;
    var cartItem = new Cart(productName, productPrice);
    return cartItem;
}
function retrieveDataFromSession() {
    var str = localStorage.getItem('cartListing');
    if (str !== null) {
        cartListing = JSON.parse(str);
    }
}
function insertCartListIntoSession(cartItem) {
    retrieveDataFromSession();
    cartListing.push(cartItem);
    localStorage.setItem('cartListing', JSON.stringify(cartListing));
}
function onDeleteCartItem(index) {
    var list = cartListing.filter(function (item, idx) { return index !== idx; });
    // Update CartList
    localStorage.setItem('cartListing', JSON.stringify(list));
    displayCartListing();
    displayCartSize();
    calculateTotalAmount();
}
function displayCartSize() {
    var cartSize = cartListing.length;
    document.getElementById('totalCartSize').innerHTML = String(cartSize);
}
function displayCartListing() {
    retrieveDataFromSession();
    var container = document.getElementById('cartListing');
    var content = '';
    cartListing.forEach(function (item, index) {
        content += "<li id=" + index + " class=\"list-group-item d-flex\">\n\t\t\t\t\t\t<div class='cart-list-item'>\n\t\t\t\t\t\t\t<h6>" + item.productName + "</h6>\n\t\t\t\t\t\t\t<span class=\"text-muted\">$" + item.price + "</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<i onclick=\"onDeleteCartItem(" + index + ")\" class=\"bi bi-trash\"></i>\n\t\t\t\t\t</li>";
    });
    container.innerHTML = content;
}
function calculateTotalAmount() {
    var total = 0;
    cartListing.forEach(function (item) {
        total += Number(item.price);
    });
    document.getElementById('totalAmount').innerHTML = "$" + total;
}
