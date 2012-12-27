## jTranslator - JavaScript Translator ##
A JavaScript to Human-Readable-English translator.

Take any JavaScript file and put it through jtranslator.js to understand how the code works in plain English.

### Problem Definition ###
Whilst reading JavaScript, in my mind I am constantly translating the code into human english, so I decided in true programmer-lazy fashion to write a script to do this "translating" for me automatically. It will also probably help those new to JavaScript to help understand the language better.  

### How It Works ###
The script uses regular expressions to count, find and replace code. Simples.

#### Input ####
	var boolean = true;
	var string = "string";
	var number = 1;
	var list = [1, [1,2,'3',["four",5,"six"]], "3"];
	var emptylist = [];
	
	function func(number) {
		var result = number + 1;
		return result;
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

### To Do ###
* Use [esprima.js](http://esprima.org/) for wider code coverage and more accurate translations
* Add in support for multiple, custom translations
* Use popular libraries such as `jQuery`, `Backbone.js` to use as a litmus test

### Author & Version ###
v0.0.1 (pre-Alpha) by Jasdeep Khalsa. Not for production use.

### Contact ###
* Email: jasdeep {at} simplyspiritdesign {dot} com
* Twitter: [@JasdeepKhalsa1](http://twitter.com/@JasdeepKhalsa1)