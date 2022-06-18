// Task 1
console.log('Hello, World');

// Task 2
var x1 = "Shahzaib";
var x2 = 5;

console.log(x1 + x2);

// Task 3

list1 = [1, 'ABC', true, 5, 67, '66'];
list1.pop();
console.log(list1);
list1.splice(2, 1);
console.log(list1);
list1.forEach(element => console.log(element));

// Task 4
slist = ["ali", "usman", "danish", "ikrma", "athar", "waqas", "qasim", "sqlain", "shahzaib", "farhan"];

// Task 5
let i = 0;
while (i < slist.length) {
    console.log(slist[i][1]);
    i++;
}

// Task 6
var x = 10;
const cx = 20;
// cx = 21
{
    let x = 19;
    console.log(x);
}
console.log(x);

// Task 7
list = [1, 2, 3, 4, 5, -6, -9, -7, -11];
list1 = [];
list.forEach(element => {
    if (element <= 0)
        list1.push(element);
});
console.log(list1);


// Task 8
let elist = [];
list.forEach(element => {
    if (element % 2 == 0)
        elist.push(element);
});
console.log(elist);


// Task 9
list.forEach(element => element % 2 == 1 ? console.log('Access Granted') : console.log('Access Denied'));

// Task 10
let totalmarks = 90;
if (totalmarks >= 90 && totalmarks <= 100)
    console.log('A');
else if (totalmarks >= 80 && totalmarks < 90)
    console.log('B');
else if (totalmarks >= 70 && totalmarks < 80)
    console.log('C');
else if (totalmarks >= 60 && totalmarks < 70)
    console.log('D');
else if (totalmarks >= 50 && totalmarks < 60)
    console.log('E');
else if (totalmarks < 50)
    console.log('F');

// Task 11
let input;
if (input)
    res = 5 + 10;
else
    res = -55 - 55
console.log(res)