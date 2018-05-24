let nameInput = document.getElementById('name');
let sexInput = document.getElementById('sex');
let ageInput = document.getElementById('age');
let heightInput = document.getElementById('height');
let weightInput = document.getElementById('weight');
let targetInput = document.getElementById('target');
let liveStyleInput = document.getElementById('liveStyle');
let mealsInput = document.getElementById('meals');
let name;
let sex;
let age;
let height;
let weight;
let target;
let liveStyle;
let diet;
let protein;
let carbo;
let fat;
let meals;
let showSummary = document.getElementById('calcSummary');
let summaryContainer = document.getElementById('containerSummary');
var checkElement = document.getElementsByClassName('calculation__field');


nameInput.addEventListener('input', function () {
    name = nameInput.value;    
    if ( name != '') {
        nameInput.style.borderColor = 'green';
    } else {
        nameInput.style.borderColor = 'red';
    }
});

sexInput.addEventListener('change', function () {
    sex = sexInput.value;
    if (sex != 'x') {
        sexInput.style.borderColor = 'green';
    } else {
        sexInput.style.borderColor = 'red';
    }
});

ageInput.addEventListener('input', function () {
    age = ageInput.value;
    if ( age != '' && Number(age) > 0) {
        ageInput.style.borderColor = 'green';
    } else {
        ageInput.style.borderColor = 'red';
    }
});

heightInput.addEventListener('input', function () {
    height = heightInput.value;
    if (height != '' && Number(height) > 0) {
        heightInput.style.borderColor = 'green';
    } else {
        heightInput.style.borderColor = 'red';
    }
});

weightInput.addEventListener('input', function () {
    weight = weightInput.value;
    if (weight != '' && Number(weight) > 0) {
        weightInput.style.borderColor = 'green';
    } else {
        weightInput.style.borderColor = 'red';
    }
});

targetInput.addEventListener('change', function () {
    target = targetInput.value;
    if (target != 'x') {
        targetInput.style.borderColor = 'green';
    } else {
        targetInput.style.borderColor = 'red';
    }
});

liveStyleInput.addEventListener('change', function () {
    liveStyle = liveStyleInput.value;
    if (liveStyle != 'x') {
        liveStyleInput.style.borderColor = 'green';
    } else {
        liveStyleInput.style.borderColor = 'red';
    }
});

mealsInput.addEventListener('change', function () {
    meals = mealsInput.value;
    if (meals != 'x') {
        mealsInput.style.borderColor = 'green';
    } else {
        mealsInput.style.borderColor = 'red';
    }
});

document.getElementById('calculate').addEventListener('click', function () {
    validationForm()
    if (sex == 'Female') {
        diet = Math.round(((655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age))) * liveStyle * target);

    } else if (sex == 'Male') {
        diet = Math.round(((66.5 + (13.7 * weight) + (5 * height) - (6.8 * age))) * liveStyle * target);

    } else if (sex == 'x') {
        document.getElementById('calcSummary').innerHTML = 'Check your answer and try again';

    }
    protein = Math.round(diet * 0.3 / 4);
    carbo = Math.round(diet * 0.5 / 4);
    fat = Math.round(diet * 0.2 / 7);

    if (Number.isNaN(diet)) {
        slideError()
        setTimeout(function () {
            document.getElementById('calcSummary').innerHTML = 'Check your answer and try again';
        }, 1700);

    } else if (diet == undefined) {
        slideError()
        setTimeout(function () {
            document.getElementById('calcSummary').innerHTML = 'Check your answer and try again';
        }, 1700);

    } else {
        slide();
        setTimeout(function () {

            if (mealsInput.value == 'x') {
                document.getElementById('calcSummary').innerHTML = '<div class="summary__header">' + name + ' your daily target is ' + diet + ' cal.' + '</div>' +
                    '<div class="summary__day"> <div>' + protein + 'g proteins per day </div><div>' + carbo + 'g carbo per day </div><div>' + fat + 'g fat per day </div></div>'

            } else {
                document.getElementById('calcSummary').innerHTML = '<div class="summary__header">' + name + ' your daily target is ' + diet + ' cal.' + '</div>' +
                    '<div class="summary__day"> <div>' + protein + 'g proteins per day </div><div>' + carbo + 'g carbo per day </div><div>' + fat + 'g fat per day </div></div>' +
                    '<div class="summary__meals"><div>For ' + meals + ' meals per day it will be:</div><div>' + Math.round(protein / meals) + 'g proteins for meal </div><div>' + Math.round(carbo / meals) + 'g carbo for meal </div><div>' + Math.round(fat / meals) + 'g fat for meal </div></div>';
            }
        }, 1800);
    }
})

document.getElementById('calculation__buttonEvent').addEventListener('click', function () {
    nameInput.value = '';
    sexInput.value = 'x';
    ageInput.value = '';
    heightInput.value = '';
    weightInput.value = '';
    targetInput.value = 'x';
    liveStyleInput.value = 'x';
    mealsInput.value = 'x';
    document.getElementById('calcSummary').innerHTML = '';
    remove();
});

function slide() {
    showSummary.classList.add('summary__display');
    summaryContainer.classList.add('container__summary--display');
    document.getElementsByClassName('container__form')[0].style.height = '650px;';


}

function slideError() {
    showSummary.classList.add('summary__error');
    summaryContainer.classList.add('container__summary--error');
    document.getElementsByClassName('container__form')[0].style.height = '650px;';

}

function remove() {
    showSummary.classList.remove('summary__error');
    showSummary.classList.remove('summary__display');
    summaryContainer.classList.remove('container__summary--error');
    summaryContainer.classList.remove('container__summary--display');
    for ( let i = 0; i < checkElement.length; i++) {
        if (checkElement[i].value == '' || checkElement[i].value == 'x' ) {
            checkElement[i].style.borderColor = 'transparent';
        }
    }
}

function validationForm() {
    
    for ( let i = 0; i < checkElement.length; i++) {
        if (checkElement[i].value == '' || checkElement[i].value == 'x' ) {
            checkElement[i].style.borderColor = 'red';
        }
    }
}