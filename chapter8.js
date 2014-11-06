var f = function faa(x) {
	if (x <= 1) {
		return 1; 
	}
	else {
		return x*faa(x - 1);
	}
}

console.log(f(3));

function max()
{
    var m = Number.NEGATIVE_INFINITY; // интересная хрень
    for(var i = 0; i < arguments.length; i++) {
        if (arguments[i] > m) {
        	m = arguments[i];
        }
    }
    return m;
}
var largest = max(1, 10, 100, 2, 3, 1000, 4, 5, 10000, 6);

console.log(largest);

function sum(a) {
    if ((a instanceof Array) || (a && typeof a == "object" && "length" in a)) { 
            for(var i = 0; i < a.length; i++) {
            var element = a[i];
            if (!element) continue;
            else throw new Error("sum(): все элементы должны быть числами");
        }
        return total;
    }
    else throw new Error("sum(): аргумент должен быть массивом"); 
}
