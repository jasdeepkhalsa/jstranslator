(function(){
// jTranslator v0.0.1
// By Jasdeep Khalsa - @jasdeepkhalsa1
// Licensed under the GPL

// Load the javascript file asyncronously using an XMLHttpRequest
if (window.XMLHttpRequest)
{
    xmlhttp = new XMLHttpRequest(); // If its a modern browser
}
else
{
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // if its an older browser
}
xmlhttp.open("GET","sample.js",false);
xmlhttp.send();
var f = xmlhttp.responseText;

// Input
title("Input");
console.log(f); // Print to console

// Count
// @array - valid regex's
// [variables, booleans, functions, strings, lists, for loops, if statements, objects]
title("Count");
count([
  /(var\s?[A-z0-9_]*)\s?=/gim,
  /true|false/gim,
  /(function\s?\w*\(.*?\))/gim,
  /"(\w*)"/gim,
  /\[[0-9A-z,"'\[\]]*\]/gim,
  /for\s?\([0-9A-z,;=\.\s<>!-+]*\)/gim,
  /if\s?\([0-9A-z,;=\.\s<>!-+]*\)/gim,
  /\{[0-9A-z:,"'\.\s\{\}]*\}/gim
  ]);

// Replace
// @object literal - [key] valid regex to find: [value] valid string to replace   
replace({
  '/var/gim':'variable',
  '/===/gim':'#is absolutely equal to#',
  '/==/gim':'#is equal to#',
  '/=/gim':'#equals#',
  '/function\s?(\w*)\(.*?\)/gim':'create the function',
  '/</gim':'#is less than#',
  '/<=/gim':'#is less than or equal to#',
  '/>/gim':'#is more than#',
  '/>=/gim': '#is more than or equal to#',
  '/return/gim' : 'and outputs',
  '/else/gim':'otherwise',
  '/else if/gim':'otherwise if',
  '/ in /gim':' inside ',
  '/console.log/gim':'log in the console: ',
  '/boolean/gim':'true or false (boolean)',
  '/eval/gim':'run this as javascript: ',
  '/.toString/gim':'< convert to a string',
  '/;/gim':'; ',
  '/new/gim':'a new instance of',
  '/if/gim':'if the following condition is true: ',
  '/[\x2B\x2B]{2}/gim':'#increase by one#',
  '/[\x2D\x2D]{2}/gim':'#decrease by one#',
  '/[\x5B\x5D]/gim':'[] (empty list)'
});

// Output
title("Output");
console.log(f); // Print to console

function count(regex) {
  for (var key in regex)
  {
    var array = regex[key].exec(f);
    var array2 = f.match(regex[key]);
    if (array.length === 1)
    {
      if (array2.length > 1)
      {
        pretty(array2);
      }
      if (array2.length == 1)
      {
        pretty(array2);
      }
    }
    else
    {
        regMatch(f, regex[key]);
    }
  }
}

function regMatch(f, regex){
	var regMatch = f.match(regex);
	var regex = regex.toString();
	var regex_out = regex.substring(1, regex.length - 4);
	regExec(regMatch, regex_out);
}

function regExec(regMatch, regex){
	var add = [];
	var regex = new RegExp(regex);
	for(match in regMatch){
		var regExec = regex.exec(regMatch[match]);
		add.push(regExec[1]);
	}
	pretty(add);
}

function replace(regex)
{
  for (var key in regex)
  {
    f = f.replace(eval(key), regex[key]);
  }
}

function title(string)
{
  return console.log("\n''' " + string + " '''\n");
}

// Pretty printer for the console
function pretty(obj){
	console.log(obj.length , obj);
}

// Helper function for internal use
function h(){
    this.kv = function (obj)
    {
      for (key in obj)
      {
        console.log("key:" + key + ", value:" + obj[key]);
      }
    };

    this.k = function (obj)
    {
      pretty(Object.keys(obj));
    }	
}
var help = new h();
})()