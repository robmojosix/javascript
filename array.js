[]
.join( "*" ) to sting arr w/ separator
.pop() removes and returns last
.push() adds to end returns arr length
.shift() remove first return first
.unshift() add to first return arr length
Delete array[position] leaves undefined in position of delete
.splice(2,0,"item") 2 in add item and remove 0
.splice(2,2) 2 in remove 2
.concat() join arrays
.slice(1) creates new array from index 1 to end of array
.slice(2,4) new array from index 2 to 3 (up to 4)
.fill(1)
.sort() alphabetically
.sort( (a, b) => { return a - b } ) sort however you want numerically here. Sort function expects a numeric return (negative, 0, positive) if negative first arg is lower, if positive first arg is higher
.sort( (a, b) => { return 0.5 - Math.random() } ) sort randomly
.sort(function(a, b){
   var x = a.type.toLowerCase();
   var y = b.type.toLowerCase();
   if (x < y) {return -1;}
   if (x > y) {return 1;}
   return 0;
}); // sort strings in objects
.reverse()
.forEach((obj, i) => {}) // iterates over array
.map((obj, i) => {}) // iterates over and returns new array
.filter((item, i, arr) => { item > 10 }) // filter array boolean check
.reduce((total, currentValue, currentIndex, arr) => { return total + currentValue } ) // accumulate total
.find( (x) => { x < 0 })
Array.from(Obj) // turn array like object to array

// Spread syntax to construct and add elements to array - also doesn't mutate array
[...arr, “end”]
[“start”, ...arr]
