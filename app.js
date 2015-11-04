var hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
var stores = [];

function CookieStand(storeLocation, minCustHr, maxCustHr, avgCookiesPerCust) {

	this.storeLocation= storeLocation
	this.minCustHr= minCustHr;
	this.maxCustHr= maxCustHr;
	this.avgCookiesPerCust= avgCookiesPerCust;
	this.hourlySales= [];
	this.totalCookies= 0;
	stores.push(this);

	this.calcRand = function() {
		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
	};

	this.calcCookiesPerHr= function() {
		for (var i=0; i < hours.length; i++) {
		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
		this.totalCookies += this.hourlySales[i];
		}
	};

	this.makeList= function() {

		var table = document.getElementById('CookieTable')
		this.calcCookiesPerHr();
		var tr = document.createElement('tr');
		var storeName = document.createElement('th');
		storeName.textContent = this.storeLocation;
		tr.appendChild(storeName);
		for (var i=0; i < hours.length; i++){
			var td = document.createElement('td');
			td.textContent = this.hourlySales[i];
			tr.appendChild(td);
			}
		var dailyCookies = document.createElement('td');
		dailyCookies.textContent = this.totalCookies;
		tr.appendChild(dailyCookies);

		table.appendChild(tr);
	};

};

function displayTable () {
		var table = document.getElementById('CookieTable');
		var tr = document.createElement('tr');
		var blankCell = document.createElement('th');
 		blankCell.textContent = "";
 		tr.appendChild(blankCell);
		for (var i=0; i < hours.length; i++){
			var td = document.createElement('td');
			td.textContent = hours[i];
			tr.appendChild(td);
		}
		var displayTotal = document.createElement('th');
		displayTotal.textContent = "Total Cookies";
		tr.appendChild(displayTotal);
		table.appendChild(tr);
};

var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var seaTac= new CookieStand("SeaTac Aiport", 6, 44, 1.2);
var southCenter= new CookieStand("Southcenter Mall", 11, 38, 1.9);
var bellevueSquare= new CookieStand("bellevue Square", 20, 48, 3.3);
var alki= new CookieStand("alki beach", 3, 24, 2.6);


function showTable() {
	displayTable();
	for (var i = 0; i < stores.length; i++) {
		stores[i].makeList();
	}
}

showTable();


