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
