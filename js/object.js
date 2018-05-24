let personNo = 1;
let personArray = [];


class Person {
    constructor(name, sex, age, height, weight, target) {
        personNo = personNo
        name = name || 'person';
        sex = sex || 1;
        age = age || 28;
        height = height|| 183;
        weight = weight || 92;
        target = target || 1;
        diet = function () {

            return this.diet = (66.5 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age)) * this.target;
    
        };
        // this.dietProtein = 0;
        // this.dietCarbo = 0;
        // this.dietFat = 0;

    }
    // function calcDiet() {

    //     return this.diet = (66.5 + (13.7 * this.weight) + (5 * this.height) - (6.8 * this.age)) * this.target;

    // }
    // clacProtein() {
    //     return this.dietProtein = this.diet * 0.3 / 4;
    // }
    // clacCarbo() {
    //     return this.dietCarbo = this.diet * 0.5 / 4;
    // }
    // clacFat() {
    //     return this.dietFat = this.diet * 0.2 / 9;
    // }
    // personNochange() {
    //     personNo = personNo++
    // }
}


document.getElementById('calculate').addEventListener('click', function (person) {

    var person = new Person(
        name = document.getElementById('name').value,
        sex = document.getElementById('sex').value,
        age = document.getElementById('age').value,
        height = document.getElementById('height').value,
        weight = document.getElementById('weight').value,
        target = document.getElementById('target').value,
        diet(),
    )
    personArray.push(person);
    console.log(person.diet());
    // return personArray document.getElementById('calculate').innerHTML();
    console.log(person)
    console.log(personArray)

});