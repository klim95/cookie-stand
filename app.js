var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

var pikePlaceMarket = {

	minCustHr: 17,
	maxCustHr: 88,
	avgCookiesPerCust: 5.2,
	hourlySales: [],

	calcRand: function() {
		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
	},
	calcCookiesPerHr: function() {
		for (var i=0; i < hours.length; i++) {
		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
		}
	},
	makeList: function() {
		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag. 
		for (var i=0; i < hours.length; i++){ 
			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
			li.textContent = this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
		}
		document.body.appendChild(ul); //document refers to the html
	},
	calcTotalCookies: function() {

	}
};


var seaTacAirport = {

	minCustHr: 6,
	maxCustHr: 44,
	avgCookiesPerCust: 1.2,
	hourlySales: [],

	calcRand: function() {
		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
	},
	calcCookiesPerHr: function() {
		for (var i=0; i < hours.length; i++) {
		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
		}
	},
	makeList: function() {
		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag. 
		for (var i=0; i < hours.length; i++){ 
			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
			li.textContent = this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
		}
		document.body.appendChild(ul); //document refers to the html
	},
	calcTotalCookies: function() {
		
	}
};


var southCenterMall = {

	minCustHr: 11,
	maxCustHr: 38,
	avgCookiesPerCust: 1.9,
	hourlySales: [],

	calcRand: function() {
		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
	},
	calcCookiesPerHr: function() {
		for (var i=0; i < hours.length; i++) {
		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
		}
	},
	makeList: function() {
		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag. 
		for (var i=0; i < hours.length; i++){ 
			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
			li.textContent = this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
		}
		document.body.appendChild(ul); //document refers to the html
	},
	calcTotalCookies: function() {
		
	}
};


var bellevueSquare = {

	minCustHr: 20,
	maxCustHr: 48,
	avgCookiesPerCust: 3.3,
	hourlySales: [],

	calcRand: function() {
		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
	},
	calcCookiesPerHr: function() {
		for (var i=0; i < hours.length; i++) {
		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
		}
	},
	makeList: function() {
		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag. 
		for (var i=0; i < hours.length; i++){ 
			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
			li.textContent = this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
		}
		document.body.appendChild(ul); //document refers to the html
	},
	calcTotalCookies: function() {
		
	}
};


var alki = {

	minCustHr: 3,
	maxCustHr: 24,
	avgCookiesPerCust: 2.6,
	hourlySales: [],

	calcRand: function() {
		return (Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
	},
	calcCookiesPerHr: function() {
		for (var i=0; i < hours.length; i++) {
		this.hourlySales.push(Math.floor(this.calcRand() * this.avgCookiesPerCust));
		}
	},
	makeList: function() {
		this.calcCookiesPerHr(); // this is calling the method after we pushed the CookiesPerHr values into them
		var ul = document.createElement('ul'); // declaring a new variable. its creating an empty html tag. 
		for (var i=0; i < hours.length; i++){ 
			var li = document.createElement('li'); // declaring a new variable "li" within the loop. Creating empty li tags.
			li.textContent = this.hourlySales[i]; // this is pushing the hourlySales values into the text for each li tag within the loop
			ul.appendChild(li); // this is putting the li tag and adding it under the ul tag
		}
		document.body.appendChild(ul); //document refers to the html
	},
	calcTotalCookies: function() {
		
	}
};