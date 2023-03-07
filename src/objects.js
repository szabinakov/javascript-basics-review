const createPerson = (name, age) => {
  return {
    name: name, 
    age: age
  }
};

const getName = object => {
  return object.name
};

const getProperty = (property, object) => {
  return object[property]
  // use square bracket notation to access a property using its variable name 
};

const hasProperty = (property, object) => {
  if (object[property]){
    return true 
  }
  return false
};

const isOver65 = person => {
  if (person.age > 65){ // use dot notation to retireve each key value 
    return true
  }
  return false 
};

const getAges = people => {
  const ages = [];
  for (i = 0; i < people.length; i++) { 
    if (people[i].age) { 
      ages.push(people[i].age);
    }
  }
  return ages;
};

const findByName = (name, people) => {
  return people.find(person => person.name === name)
}

const findHondas = cars => {
 return cars.filter(car => car.manufacturer === 'Honda')
};

const averageAge = people => {
  const totalAge = people.reduce((acc, person) => acc + person.age, 0)
  const averageAge = totalAge / people.length
  return averageAge
};

const createTalkingPerson = (name, age,) => {
  const person = {
    name,
    age,
    introduce: function introduce(name){
      return `Hi ${name}, my name is ${this.name} and I am ${this.age}!`;
    }
  }
  return person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
