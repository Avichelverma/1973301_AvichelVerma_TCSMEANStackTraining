var blogListing = [];

function onAddBlog() {
	insertBlogIntoSession();
	resetForm();
	displayBlogListing();
}

function readFormData() {
	var obj = {};
	obj.title = document.getElementById('title').value;
	obj.article = document.getElementById('article').value;
	obj.articleImg = document.getElementById('articleImg').files[0].name;
	console.log(obj);
	return obj;
}

function retrieveDataFromSession() {
	var str = localStorage.getItem('blogListing');
	console.log(str);
	if (str !== null) {
		blogListing = JSON.parse(str);
	}
}

function insertBlogIntoSession() {
	retrieveDataFromSession();
	var newEntry = readFormData();
	blogListing.push(newEntry);
	localStorage.setItem('blogListing', JSON.stringify(blogListing));
}

function displayBlogListing() {
	retrieveDataFromSession();
	var container = document.getElementById('cardContainer');
	var content = '';
	if (blogListing.length === 0) {
		content += `<div>
			<h3>Add Some Blogs to the Listing</h3>
		</div>`;
	} else {
		for (let i = 0; i < blogListing.length; i++) {
			content += `<div class="card" style="min-width:40rem;">
			<img src="${blogListing[i].articleImg}" class="card-img-top imgHolder">
			<div class="card-body">
			<h5 class="card-title">${blogListing[i].title}</h5>
			<p class="card-text">${blogListing[i].article}</p>
			</div>
			</div>
			`;
		}
	}
	container.innerHTML = content;
}

function resetForm() {
	document.getElementById('title').value = '';
	document.getElementById('article').value = '';
	document.getElementById('articleImg').value = '';
}
