var f = function faa(x) {
	if (x <= 1) {
		return 1; 
	}
	else {
		return x*faa(x - 1);
	}
};

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


function operate(operator, operand1, operand2) {
    return operator(operand1, operand2);
}


var operators = {
        add:      function(x,y) { return x+y; },
        subtract: function(x,y) { return x - y; },
        multiply: function(x,y) { return x*y; },
        divide:   function(x,y) { return x/y; },
        pow:      Math.pow
};

function operate(op_name, operand1, operand2) {
    if (typeof operators[op_name] == "function") {
        return operators[op_name](operand1, operand2); 
    }
    else {
        throw "неизвестный оператор";
    }
}
var j = operate("add", "hello", operate("add", " ", "world"));
var k = operate("pow", 10, 2);

console.log(j, k);

function check(args) {
    var actual = arguments.length; // в книге args.length, видимо, очепятка
    var expected = arguments.callee.length; // тут тоже
    if (actual != expected) {
        throw new Error("неверное число аргументов: ожидается: " + expected + "; фактически передано " + actual);
    }
}

check('lol');
// check('мент', 'аргумент'); // тут вызывается нужный эксепшн, ну и молодец

function getPropertyNames(o) {
    var r = [];
    for (var name in o) { // чувак вары в цикле в книге не пишет)
        r.push(name);
    }
    return r;
}

function copyProperties(from,  to) {
    to = to || {}; // упростил
    for(var p in from) {
        to[p] = from[p];
    }
    return to;
}

function copyUndefinedProperties(from, to) {
    for(var p in from) {
        if (p in to) {
            to[p] = from[p];
        }
    }
}

var sss = {prop1: 890, hhh: 7},
    aaa = {l: 'q'};

console.log(copyProperties(sss, aaa));

function bindMethod(o, f) { // видимо так работает _.bind
    return function() { 
        return f.apply(o, arguments); 
    };
}

var x = "глобальная";
    function z () {
        var x = "локальная";
        function g () { console.log(x); }
        g();
}
z();

function makeProperty(o, name, predicate) {
    var value;
    o["get" + name] = function() { return value; };

    o["set" + name] = function(v) {
        if (predicate && !predicate(v)) {
            throw "set" + name + ": неверное значение " + v;
        }
        else {
           value = v; 
        }
    }; 
}
var o = {};
makeProperty(o, "Name", function(x) { return typeof x == "string"; });
o.setName("Frank");
o.setName("Frank2");
console.log(o.getName()); // в книге тут print(); веселые опечаточки
// o.setName(0); 

function inspect(inspector, title) {
    var expression, result;
    if ("ignore" in arguments.callee) return;
    while(true) {
        var message = "";
        if (title) message = title + "\n";
        message += "Введите выражение, которое следует вычислить:";
        expression = prompt(message, expression);
        if (!expression) return;
        result = inspector(expression);
    }
}
