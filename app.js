var hours = ["10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: "];
<<<<<<< HEAD
var stores = [];

function CookieStand(storeLocation, minCustHr, maxCustHr, avgCookiesPerCust) {

	this.storeLocation= storeLocation
=======

function CookieStand(minCustHr, maxCustHr, avgCookiesPerCust) {

>>>>>>> 072d4717185620d292ffa8404162b4133e0cca60
	this.minCustHr= minCustHr;
	this.maxCustHr= maxCustHr;
	this.avgCookiesPerCust= avgCookiesPerCust;
	this.hourlySales= [];
	this.totalCookies= 0;
<<<<<<< HEAD
	stores.push(this);
=======
>>>>>>> 072d4717185620d292ffa8404162b4133e0cca60

	this.calcRand = function() {
		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
	};
<<<<<<< HEAD

=======
>>>>>>> 072d4717185620d292ffa8404162b4133e0cca60
	this.calcCookiesPerHr= function() {
		for (var i=0; i < hours.length; i++) {
		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
		this.totalCookies += this.hourlySales[i];
		}
	};
<<<<<<< HEAD


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


// displayTable();
// pikePlace.makeList();
// seaTac.makeList();
// southCenter.makeList();
// bellevueSquare.makeList();
// alki.makeList();

function showTable() {
	displayTable();
	for (var i = 0; i < stores.length; i++) {
		stores[i].makeList();
	}
}

showTable();


=======
	this.makeList= function() {
		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag.
		for (var i=0; i < hours.length; i++){
			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
			li.textContent = hours[i] + this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
		}
		// var li =
		var pikePlace = document.getElementById('pikePlaceMarket');
		pikePlace.appendChild(ul); //document refers to the html
	};
};

pikePlaceMarket.makeList();




// var seaTacAirport = {

// 	minCustHr: 6,
// 	maxCustHr: 44,
// 	avgCookiesPerCust: 1.2,
// 	hourlySales: [],

// 	calcRand: function() {
// 		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
// 	},
// 	calcCookiesPerHr: function() {
// 		for (var i=0; i < hours.length; i++) {
// 		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
// 		}
// 	},
// 	makeList: function() {
// 		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
// 		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag.
// 		for (var i=0; i < hours.length; i++){
// 			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
// 			li.textContent = this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
// 			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
// 		}
// 		document.body.appendChild(ul); //document refers to the html
// 	},
// 	calcTotalCookies: function() {

// 	}
// };


// var southCenterMall = {

// 	minCustHr: 11,
// 	maxCustHr: 38,
// 	avgCookiesPerCust: 1.9,
// 	hourlySales: [],

// 	calcRand: function() {
// 		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
// 	},
// 	calcCookiesPerHr: function() {
// 		for (var i=0; i < hours.length; i++) {
// 		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
// 		}
// 	},
// 	makeList: function() {
// 		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
// 		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag.
// 		for (var i=0; i < hours.length; i++){
// 			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
// 			li.textContent = this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
// 			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
// 		}
// 		document.body.appendChild(ul); //document refers to the html
// 	},
// 	calcTotalCookies: function() {

// 	}
// };


// var bellevueSquare = {

// 	minCustHr: 20,
// 	maxCustHr: 48,
// 	avgCookiesPerCust: 3.3,
// 	hourlySales: [],

// 	calcRand: function() {
// 		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
// 	},
// 	calcCookiesPerHr: function() {
// 		for (var i=0; i < hours.length; i++) {
// 		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
// 		}
// 	},
// 	makeList: function() {
// 		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
// 		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag.
// 		for (var i=0; i < hours.length; i++){
// 			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
// 			li.textContent = this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
// 			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
// 		}
// 		document.body.appendChild(ul); //document refers to the html
// 	},
// 	calcTotalCookies: function() {

// 	}
// };


// var alki = {

// 	minCustHr: 3,
// 	maxCustHr: 24,
// 	avgCookiesPerCust: 2.6,
// 	hourlySales: [],

// 	calcRand: function() {
// 		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
// 	},
// 	calcCookiesPerHr: function() {
// 		for (var i=0; i < hours.length; i++) {
// 		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
// 		}
// 	},
// 	makeList: function() {
// 		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
// 		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag.
// 		for (var i=0; i < hours.length; i++){
// 			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
// 			li.textContent = this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
// 			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
// 		}
// 		document.body.appendChild(ul); //document refers to the html
// 	},
// 	calcTotalCookies: function() {

// 	}
// };
>>>>>>> 072d4717185620d292ffa8404162b4133e0cca60
