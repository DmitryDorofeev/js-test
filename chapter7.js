var o = {x: 7};
console.log(o);
if ('x' in o) o.x = 1;
console.log(o);
delete o.x;
console.log(o);

console.log('===============================');
var d = new Date();
console.log(d.constructor === Date);
console.log(d.toString());
console.log(d.toLocaleString());

o = {x: 9, y: 80};
console.log(o.propertyIsEnumerable('x'));
console.log(o.propertyIsEnumerable('z'));

console.log('===============================');
var a = [];
a[-1.23] = true;
a[0] = true;
console.log(a);
a.shift();
console.log(a);
console.log(a.join());

var b = [8, 14, 78, 1, 7, 94, 6];
b.sort(function (a, b) {
	return a-b;
});
console.log(b);

b.push(-89);

console.log(b);