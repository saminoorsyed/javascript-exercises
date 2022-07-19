const getAge = function(person) {
    const currentYear = new Date().getFullYear();
    return (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth
};

const findTheOldest = function(people) {
    let oldestPerson = people[0];
    people = (people.slice()).splice(1);

    for (let person of people) {
        if (getAge(person)> getAge(oldestPerson)){
            oldestPerson = person;
        }
    }
    return oldestPerson
}

// Do not edit below this line
module.exports = findTheOldest;
