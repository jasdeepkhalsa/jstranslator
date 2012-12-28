## jTranslator - JavaScript Translator ##
A JavaScript to Human-Readable-English translator.

Take any JavaScript file and put it through `jtranslator.js` to understand how the code works in plain English.

### Problem Definition ###
Whilst reading JavaScript, in my mind I am constantly translating the code into human english, so I decided in true programmer-lazy fashion to write a script to do this "translating" for me automatically.

It will also probably help those new to JavaScript to help understand the language better.

Further, I realized something very interesting...

...Unlike human-to-human translations, machine-to-human translations can be much more accurate because the rules of programming exist under a set of strict conditions and parameters.

Therefore, machine-to-human translation engines have the opportunity to really become extremely accurate and useful, especially in helping us understand more complex programs and undocumented code.

### How It Works ###
The script uses regular expressions to count, find and replace code. Simples.

Existing comments are preserved.

Here is a (very) basic `input` and `output`:

#### Input (sample.js) ####
	var boolean = true;
	var string = "string";
	var number = 1;
	var list = [1, [1,2,'3',["four",5,"six"]], "3"];
	var emptylist = [];
	
	function func(number) {
		var result = number + 1;
		return result;
	}
	
	// comment
	
	var object = {
		1 : 1,
		2 : {0:0, '0':{'key':'value'}},
		"3" : "3"
	};
	
	if (boolean === true) {
		console.log(true);
	} else if (boolean == false) {
		console.log(false);
	} else {
		console.log("else");
	}
	
	for (key in object) {
		for (value in object[key]) {
			console.log(value);
			console.log(object[key]);
		}
	}
	
	/* block comment */
	
	for(var i = 0;i<list.length;i++){
		console.log(list[i]);
	}

#### Output ####
	variable true or false (boolean) #equals# true; 
	variable string #equals# "string"; 
	variable number #equals# 1; 
	variable list #equals# [1, [1,2,'3',["four",5,"six"]], "3"]; 
	variable emptylist #equals# [] (empty list); 
	
	create the function func(number) {
		variable result #equals# number + 1; 
		and outputs result; 
	}
	
	// comment
	
	variable object #equals# {
		1 : 1,
		2 : {0:0, '0':{'key':'value'}},
		"3" : "3"
	}; 
	
	if the following condition is true:  (true or false (boolean) #is absolutely equal to# true) {
		log in the console: (true); 
	} otherwise if the following condition is true:  (true or false (boolean) #is equal to# false) {
		log in the console: (false); 
	} otherwise {
		log in the console: ("otherwise"); 
	}
	
	for (key inside object) {
		for (value inside object[key]) {
			log in the console: (value); 
			log in the console: (object[key]); 
		}
	}
	
	/* block comment */
	
	for(variable i #equals# 0; i#is less than#list.length; i#increase by one#){
		log in the console: (list[i]); 
	}

### To Do ###
* Switch to using [esprima.js](http://esprima.org/) for wider code coverage and more accurate translations
* Add in support for more complex coding scenarios e.g. prototypal inheritance, anonymous functions, asyncronous functions, callbacks etc.
* Add in support for plugging in multiple, custom translations (e.g. JavaScript to US English, JavaScript to French - cool idea huh?)
* Use popular libraries such as `jQuery`, `Backbone.js` as a litmus test

### Author & Version ###
v0.0.1 (pre-Alpha) by Jasdeep Khalsa. Not for production use.

### Contact ###
* Email: jasdeep {at} simplyspiritdesign {dot} com
* Twitter: [@JasdeepKhalsa1](http://twitter.com/@JasdeepKhalsa1)