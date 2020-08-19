// using rest, spread, destructuring to return double of array

function double(numbers) {
    let [number, ...rest] = numbers;
  	if(rest.length === 0) return [number * 2];
  	else return [number *2, ...double(rest)];
}
