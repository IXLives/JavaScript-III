/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Window/Context, This refers to the window/console object

* 2. Implicit Binding is when an object is referenced using dot notation. In this case, This refers to the object left of the dot

* 3. New Binding is used in conjuction with constructor functions and when the keyword New is invoked. This refers to the object created by the constructor

* 4. Explicit binding is when an override method like bind, apply, or call is used.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.a = 99;
console.log(this.a);

// Principle 2

// code example for Implicit Binding

const impObj = {
    name: 'Object',
    type: 'Parent',
    size: 0,
    rate: 1,
    grow: function(){
        this.size += this.rate;
        return `I am ${this.size}`;
    }
}

console.log(impObj.grow());

// Principle 3

// code example for New Binding

function Person(ident) {
    this.species = 'Human';
    this.name = ident.name;
}

Person.prototype.tenHut = function(){
    return `${this.name}, ${this.species}, sir!`;
};

const jack = new Person({
    species: 'Human',
    name: 'Jack',
});
console.log(jack.tenHut());

// Principle 4

// code example for Explicit Binding

function Man(manIdent) {
    Person.call(this, manIdent);
    this.hasGender = manIdent.hasGender;
}
Man.prototype = Object.create(Person.prototype);

const jacob = new Man({
    species: 'Human',
    name: 'Jacob',
    hasGender: true
});

console.log(jacob.tenHut());