var budgetDetailObj = [];
var totalBudget = 0;

function onFormSubmit() {
	insertBudgetIntoSession();
	resetForm();
}

function readFormData() {
	var obj = {};
	obj.clientName = document.getElementById('cname').value;
	obj.projectName = document.getElementById('pname').value;
	obj.budget = document.getElementById('budget').value;
	return obj;
}

function retrieveDataFromSession() {
	var str = sessionStorage.getItem('budgetDetails');
	console.log('retriving array');
	console.log(str);
	if (str !== null) {
		budgetDetailObj = JSON.parse(str);
	}
}

function insertBudgetIntoSession() {
	retrieveDataFromSession();
	var newEntry = readFormData();
	budgetDetailObj.push(newEntry);
	sessionStorage.setItem('budgetDetails', JSON.stringify(budgetDetailObj));
}

function displayBudgetTable() {
	retrieveDataFromSession();
	var table = document.getElementById('budgetTable');
	for (let i = 0; i < budgetDetailObj.length; i++) {
		var newRow = table.insertRow();
		var cell1 = newRow.insertCell();
		var cell2 = newRow.insertCell();
		var cell3 = newRow.insertCell();
		cell1.innerHTML = budgetDetailObj[i].clientName;
		cell2.innerHTML = budgetDetailObj[i].projectName;
		cell3.innerHTML = budgetDetailObj[i].budget;
		totalBudget += Number(budgetDetailObj[i].budget);
	}
	displayTotalBudget();
}

function resetForm() {
	document.getElementById('cname').value = '';
	document.getElementById('pname').value = '';
	document.getElementById('budget').value = '';
}

function displayTotalBudget() {
	document.getElementById('totalBudget').innerHTML = 'Total Budget: ' + totalBudget;
}
