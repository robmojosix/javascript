class data {
  constructor() {
	 this.d = "my data etc";
  }

  // What JSON.stringify calls
  toJSON() {
 	  return { data: this.d }
	}
};

JSON.stringify(new data());
