// logicless Pool
function Player() {
  // initial player state and setup

  this.refresh = function() {
    // clean up object for reuse
  }
}

let pool = ['', '', ''];

// fill pool with Player instances
pool.fill( new Player() );

// using the pool
const player1 = pool.shift();
const player2 = pool.shift();

player1.refresh();

pool.push(player1);




// logicless Object
function Player() {
  // initial player state and setup
}

function Pool(objectContructor) {
  let pool = ['', '', ''];
  pool.fill(new objectContructor());

  this.get = function() {
    return pool.shift();
  }

  this.return = function(obj) {
    // some way of cleaning up object state
    // possibly a decorator on the object
    pool.push(obj);
  }
}

// using the pool
let playerPool = new Pool(Player);

const player1 = Pool.get();
const player2 = Pool.get();

Pool.return(player1);
