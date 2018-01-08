for(let key in Obj) {
  if(Obj.hasOwnProperty(key)) { // ensure it's its own key not inherited from Object constructor
    Obj[key] // value
  }
}

// ES6 .keys() // returns non-inherited keys only
Object.keys(Obj).forEach((key) => {
  Obj[key]
})

// Convert object to array
const Obj = {a:1, b:2, c:3};
const Arr = Object.keys(Obj).map(k => Obj[k]);
