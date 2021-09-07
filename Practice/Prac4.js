function Player(fname,lname){
    fname ? this._fname = fname : this._fname = 'unknown';
    lname ? this._lname = lname : this._lname = 'unknown'; 
}
let p1 = new Player('Sim');
console.log(p1);

Player.prototype.name = function(){
    return `${this._fname}   ${this._lname}`;
}

console.log(p1.name())
