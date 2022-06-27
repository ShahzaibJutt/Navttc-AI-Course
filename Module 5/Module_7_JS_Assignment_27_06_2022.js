var results = [];
// Task 1

var arr1 = [1, 2, 3, 'x', 4, 5];
arr1.forEach((element, i) => {
	if (element == 'x') {
		results.push(arr1.splice(i - 1, 1));
	}
});


// Task 2

var arr2 = [1, 2, 33, 'tick', 4, 5];
arr2.forEach((element, i) => {
	if (element == 'tick') {
		results.push(arr2[i - 1] *= 10);
	}
});

// Task 3

arr2.forEach((element, i) => {
	if (element == 'tick') {
		results.push(arr2[i - 1] * arr2[i - 2]);
	}
});

// Task 4

console.log(results);