class User {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(newName){
        if(newName){
            this._name = newName;
        }
    }
};

const rob = new User('rob');

console.log(rob.name);

rob.name = 'fred';

console.log(rob.name);
