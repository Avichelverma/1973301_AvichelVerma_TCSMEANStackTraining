class Product {
	name: String;
	price: Number;
	imageUrl: String;

	constructor(name: String, price: Number, imageUrl: String) {
		this.name = name;
		this.price = price;
		this.imageUrl = imageUrl;
	}

	productInfo() {
		return `${this.name} + ${this.imageUrl}`;
	}
}

class Cart {
	productName: String;
	price: Number;

	constructor(productName: String, price: Number) {
		this.productName = productName;
		this.price = price;
	}
}

const productListing: Array<Product> = [];
var cartListing: Array<Cart> = [];

let product1 = new Product('iPhone 12', 999, './images/iphone12.png');
let product2 = new Product('Pixel 4', 799, 'images/pixel4.png');
let product3 = new Product('Samsung Galaxy Fold', 2000, './images/samsungfoldnote.png');
let product4 = new Product('iPhone 12 mini', 699, './images/iphoneMini.png');
let product5 = new Product('Samsung Fold Z', 1500, './images/samsungfold.png');
let product6 = new Product('Moto Flip', 899, './images/motoflip.png');
let product7 = new Product('Samsung S21', 1200, './images/samsungs21.png');

productListing.push(product1);
productListing.push(product2);
productListing.push(product3);
productListing.push(product4);
productListing.push(product5);
productListing.push(product6);
productListing.push(product7);

function displayProductListing() {
	let container = document.getElementById('cardContainer');
	let content = '';

	productListing.forEach((product, index) => {
		content += `<div id=${index} class="card" style="width: 18rem;">
                        <img src=${product.imageUrl} class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <h6 class="card-text">Price: $${product.price}</h6>
                            <div class="quantity-wrapper">
                                <button type="button" class='btn btn-secondary' onclick="onAddItem(${index})">Add</button>
                            </div>
                        </div>
                    </div>`;
	});

	container.innerHTML = content;
}

function onAddItem(index) {
	let cartItem = productItemEntry(index);
	insertCartListIntoSession(cartItem);
	displayCartListing();
	displayCartSize();
	calculateTotalAmount();
}

function productItemEntry(index) {
	let productName = productListing[index].name;
	let productPrice = productListing[index].price;
	let cartItem = new Cart(productName, productPrice);
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
	let list = cartListing.filter((item, idx) => index !== idx);
	// Update CartList
	localStorage.setItem('cartListing', JSON.stringify(list));
	displayCartListing();
	displayCartSize();
	calculateTotalAmount();
}

function displayCartSize() {
	let cartSize = cartListing.length;
	document.getElementById('totalCartSize').innerHTML = String(cartSize);
}

function displayCartListing() {
	retrieveDataFromSession();
	let container = document.getElementById('cartListing');
	let content = '';

	cartListing.forEach((item, index) => {
		content += `<li id=${index} class="list-group-item d-flex">
						<div class='cart-list-item'>
							<h6>${item.productName}</h6>
							<span class="text-muted">$${item.price}</span>
						</div>
						<i onclick="onDeleteCartItem(${index})" class="bi bi-trash"></i>
					</li>`;
	});

	container.innerHTML = content;
}

function calculateTotalAmount() {
	let total = 0;
	cartListing.forEach((item) => {
		total += Number(item.price);
	});
	document.getElementById('totalAmount').innerHTML = `$${total}`;
}
