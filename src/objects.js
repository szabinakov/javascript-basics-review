const createPerson = (name, age) => {
  const person = {
    name,
    age
  };
return person;

};

const getName = object => {
return object.name;
};

const getProperty = (property, object) => {
return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  return people.reduce((acc, person) => acc + person.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  const person = {
    name,
    age,
    introduce: stranger => {
      return `Hi ${stranger}, my name is ${person.name} and I am ${person.age}!`;
    }
  };
  return person;};

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
