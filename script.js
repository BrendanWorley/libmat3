// ------ GLOBAL VARIABLES ---------------------------------
const numPosition = document.querySelector('.numPosition');
const refreshButton = document.querySelector('.refresh');
const numPosButton = document.querySelector('.numPosButton');
const member1 = document.querySelector('.member1');
const member2 = document.querySelector('.member2');
const result = document.querySelector('.result');
const arithOp = document.querySelector('.arithOp');
const genButton = document.querySelector('.genButton');
const checkButton = document.querySelector('.checkButton');
const checkResult = document.querySelector('.checkResult');
let checkData = 'НЕПРАВИЛЬНО';
const inputData = document.querySelectorAll('#inputData');
console.log(inputData);
const inputField = document.querySelectorAll('#inputField');
console.log(inputField);

// ------- CLASSES TO BE STYLED --------------------------
// const challenge = document.querySelector('.challenge');
// challenge.style.fontSize = '60px';

// const response1 = document.querySelector('.response1');
// response1.style.display = 'flex';
// response1.style.flexDirection = 'column';
// response1.style.textAlign = 'center';
// response1.style.width = '200px';


// const response2 = document.querySelector('.response2');
// response2.style.display = 'flex';
// response2.style.flexDirection = 'column';
// response2.style.textAlign = 'center';
// response2.style.width = '200px';

// const responseRes = document.querySelector('.responseRes');
// responseRes.style.display = 'flex';
// responseRes.style.flexDirection = 'column';
// responseRes.style.textAlign = 'center';
// responseRes.style.width = '200px';

// const response = document.querySelector('.response');
// response.style.display = 'flex';
// response.style.flexDirection = 'row';

// checkResult.style.color = 'white';

    // ----- CHALLENGING VARIABLES ----------------------------------
    let generatedScenario = 0;
    let generatedMember1 = 0;
    let generatedMember2 = 0;
    let generatedResult = 0;

    // ------ RESPONDING VARIABLES -------------------------------
    let respondingMember1 = 0;
    let respondingMember2 = 0;
    let respondingArith = '';
    let respondingResult = 0;


    // ------ RESPONDING INPUT -----------------------------------
    const response1__digitResponse = document.querySelector('.response1__digitResponse');
    
    const response1__checkbox_summand = document.querySelector('.response1__checkbox_summand');
    const response1__checkbox_sum = document.querySelector('.response1__checkbox_sum');
    const response1__checkbox_minuend = document.querySelector('.response1__checkbox_minuend');
    const response1__checkbox_subtrahend = document.querySelector('.response1__checkbox_subtrahend');
    const response1__checkbox_difference = document.querySelector('.response1__checkbox_difference');
    const 
    response1__checkbox_multiplier = document.querySelector('.response1__checkbox_multiplier');
    const response1__checkbox_product = document.querySelector('.response1__checkbox_product');
    const response1__checkbox_dividend = document.querySelector('.response1__checkbox_dividend');
    const response1__checkbox_divisor = document.querySelector('.response1__checkbox_divisor');
    const response1__checkbox_quotient = document.querySelector('.response1__checkbox_quotient');
    
    const response__arith = document.querySelector('.response__arith');
    
    const response2__digitResponse = document.querySelector('.response2__digitResponse');
    
    const response2__checkbox_summand = document.querySelector('.response2__checkbox_summand');
    const response2__checkbox_sum = document.querySelector('.response2__checkbox_sum');
    const response2__checkbox_minuend = document.querySelector('.response2__checkbox_minuend');
    const response2__checkbox_subtrahend = document.querySelector('.response2__checkbox_subtrahend');
    const response2__checkbox_difference = document.querySelector('.response2__checkbox_difference');
    const response2__checkbox_multiplier = document.querySelector('.response2__checkbox_multiplier');
    const response2__checkbox_product = document.querySelector('.response2__checkbox_product');
    const response2__checkbox_dividend = document.querySelector('.response2__checkbox_dividend');
    const response2__checkbox_divisor = document.querySelector('.response2__checkbox_divisor');
    const response2__checkbox_quotient = document.querySelector('.response2__checkbox_quotient');

    const responseRes__digitResponse = document.querySelector('.responseRes__digitResponse');
    
    const responseRes__checkbox_summand = document.querySelector('.responseRes__checkbox_summand');
    const responseRes__checkbox_sum = document.querySelector('.responseRes__checkbox_sum');
    const responseRes__checkbox_minuend = document.querySelector('.responseRes__checkbox_minuend');
    const responseRes__checkbox_subtrahend = document.querySelector('.responseRes__checkbox_subtrahend');
    const responseRes__checkbox_difference = document.querySelector('.responseRes__checkbox_difference');
    const responseRes__checkbox_multiplier = document.querySelector('.responseRes__checkbox_multiplier');
    const responseRes__checkbox_product = document.querySelector('.responseRes__checkbox_product');
    const responseRes__checkbox_dividend = document.querySelector('.responseRes__checkbox_dividend');
    const responseRes__checkbox_divisor = document.querySelector('.responseRes__checkbox_divisor');
    const responseRes__checkbox_quotient = document.querySelector('.responseRes__checkbox_quotient');



// --------- SETTING UP THE POSITIONS AND CLASSES ----------
refreshButton.addEventListener('click', () => {
    
        location.reload();
        
    
});

numPosButton.addEventListener('click', () => {
    
    if (numPosistionConverted == 2) {
        console.log(numPosistionConverted);
        } else if (numPosistionConverted == 3) {
            console.log(numPosistionConverted);
            } else if (numPosistionConverted == 4) {
                console.log(numPosistionConverted);
                } else {
                    alert('Введите правильный разряд чисел');
            };
        
});

numPosistionConverted = Number(numPosition.value);
console.log('number position =', numPosistionConverted);

// ------------ GENERATING THE CHALLENGE -------------------
genButton.addEventListener('click', generateChallenge);

function generateChallenge() {
        let maxDigit = 999;

        if (numPosistionConverted == 2) {
            maxDigit = 99;
            console.log('max Digit =', maxDigit);
        } else if (numPosistionConverted == 3) {
            maxDigit = 999;
            console.log('max Digit =', maxDigit);
        } else if (numPosistionConverted == 4) {
            maxDigit = 9999;
            console.log('max Digit =', maxDigit);
        };

        // clearing out all inputData-------------
        for (i = 0; i < inputData.length; i++) {
            inputData[i].checked = false;
        };

        for (i = 0; i < inputField.length; i++) {
            inputField[i].value = '';
        };
        checkResult.textContent = 'ожидание результата';
        checkResult.style.backgroundColor = 'lightblue';

        // ---------------------------------------

        let scenario = Math.floor((Math.random() * 8))
        

        switch (scenario) {
            case 0:
                console.log('x + a = b');
                XplusA();
                // generatedScenario = 0
                break;
            case 1:
                console.log('a + x = b');
                AplusX();
                // generatedScenario = 1;
                break;
            case 2:
                console.log('x - a = b');
                XminusA();
                // generatedScenario = 2;
                break;
            case 3:
                console.log('a - x = b');
                AminusX();
                // generatedScenario = 3;
                break;
            case 4:
                console.log('x * a = b');
                XmultA();
                // generatedScenario = 4;
                break;
            case 5:
                console.log('a * x = b');
                AmultX();
                // generatedScenario = 5;
                break;
            case 6:
                console.log('x / a = b');
                XdevA();
                // generatedScenario = 6;
                break;
            case 7:
                console.log('a / x = b');
                AdevX();
                // generatedScenario = 7;
                break;
        };

        function XplusA() {
            // scenario - 0
            let b = Math.floor((Math.random() * maxDigit) + 1);
            console.log('b=', b);
            result.textContent = b;
            generatedResult = b;
            let a = b - (Math.floor((Math.random() * b) + 1));
            console.log('a=', a);
            member2.textContent = a;
            generatedMember2 = a;
            let x = b - a;
            generatedMember1 = x;
            console.log('x=', x);
            member1.textContent = 'X';
            arithOp.textContent = ' + ';
        };

        function AplusX() {
            // scenario - 1
            let b = Math.floor((Math.random() * maxDigit) + 1);
            console.log('b=', b);
            result.textContent = b;
            generatedResult = b;
            let a = b - (Math.floor((Math.random() * b) + 1));
            console.log('a=', a);
            member1.textContent = a;
            generatedMember1 = a;
            let x = b - a;
            generatedMember2 = x;
            console.log('x=', x);
            member2.textContent = 'X';
            arithOp.textContent = ' + ';
        };


        function XminusA() {
            // scenario - 2
            let b = Math.floor((Math.random() * maxDigit) + 1);
            console.log('b=', b);
            result.textContent = b;
            generatedResult = b;
            let a = Math.floor((Math.random() * (maxDigit - b)) + 1);
            console.log('a=', a);
            member2.textContent = a;
            generatedMember2 = a;
            let x = a + b;
            generatedMember1 = x;
            console.log('x=', x);
            member1.textContent = 'X';
            arithOp.textContent = ' - ';
        };

        function AminusX() {
            // scenario - 3
            let a = Math.floor((Math.random() * maxDigit) + 1);
            console.log('a=', a);
            member1.textContent = a;
            generatedMember1 = a;
            let b = a - (Math.floor((Math.random() * a) + 1));
            console.log('b=', b);
            result.textContent = b;
            generatedResult = b;
            let x = a - b;
            generatedMember2 = x;
            console.log('x=', x);
            member2.textContent = 'X';
            arithOp.textContent = ' - ';
        };

        function XmultA() {
            //scenario - 4
            let a = Math.floor((Math.random() * 9) + 1);
            console.log('a=', a);
            member2.textContent = a;
            generatedMember2 = a;
            let x = Math.floor((Math.random() * (999 / a)) + 1);
            console.log('x=', x);
            member1.textContent = 'X';
            generatedMember1 = x;
            let b = x * a;
            generatedResult = b;
            console.log('b=', b);
            result.textContent = b;
            arithOp.textContent = ' * ';
        };

        function AmultX() {
            // scenario - 5
            let a = Math.floor((Math.random() * 9) + 1);
            console.log('a=', a);
            member1.textContent = a;
            generatedMember1 = a;
            let x = Math.floor((Math.random() * (999 / a)) + 1);
            console.log('x=', x);
            member2.textContent = 'X';
            generatedMember2 = x;
            let b = x * a;
            generatedResult = b;
            console.log('b=', b);
            result.textContent = b;
            arithOp.textContent = ' * ';
        };

        function XdevA() {
            // scenario - 6
            let a = Math.floor((Math.random() * 10) + 1);
            console.log('a=', a);
            member2.textContent = a;
            generatedMember2 = a;
            arithOp.textContent = ' : ';
            
            for (i = 1; i <= maxDigit; i++) {
                let b = Math.floor((Math.random() * 111) + 1);
                let x = a * b;
                if (x <= maxDigit) {
                    console.log('b=', b);
                    result.textContent = b;
                    generatedResult = b;
                    console.log('x=', x);
                    member1.textContent = 'X';
                    generatedMember1 = x;
                    break;
                };
            };
            
        };

        function AdevX() {
            // scenario - 7
            let x = Math.floor((Math.random() * 10) + 1);
            console.log('x=', x);
            member2.textContent = 'X';
            generatedMember2 = x;
            arithOp.textContent = ' : '
            
            for (i = 1; i <= maxDigit; i++) {
                let b = Math.floor((Math.random() * 111) + 1);
                let a = x * b;
                if (a <= maxDigit) {
                    console.log('b=', b);
                    result.textContent = b;
                    generatedResult = b;
                    console.log('a=', a);
                    member1.textContent = a;
                    generatedMember1 = a;

                    break;
                };
            };
        };

        generatedScenario = scenario;
        console.log('generated scenario: ', generatedScenario);
        console.log('gen member1: ', generatedMember1, ';', 'gen memeber2: ', generatedMember2, ';', 'gen result: ', generatedResult, ';',);

};

// --------------- RESPONSE CHECK --------------------------------------
checkButton.addEventListener('click', checkRespond);

function checkRespond() {
    respondingMember1 = Number(response1__digitResponse.value);
    respondingArith = response__arith.value;
    respondingMember2 = Number(response2__digitResponse.value);
    respondingResult = Number(responseRes__digitResponse.value);
    console.log(respondingMember1, respondingArith, respondingMember2, ' = ', respondingResult);
    console.log(response1__checkbox_subtrahend.checked, response2__checkbox_difference.checked, responseRes__checkbox_minuend.checked);

    switch (generatedScenario) {
        case 0:
            if (respondingMember1 === generatedResult 
                && respondingArith === '-'
                && respondingMember2 === generatedMember2 
                && respondingResult === generatedMember1 
                && response1__checkbox_sum.checked === true 
                && response2__checkbox_summand.checked === true 
                && responseRes__checkbox_summand.checked === true) {
                console.log('ПРАВИЛЬНО');
                checkData = 'Правильно !'
                break;
            } else {
                console.log('НЕПРАВИЛЬНО');
                checkData = 'НЕПРАВИЛЬНО';
                break;
            };
        case 1:
            if (respondingMember1 === generatedResult
                && respondingArith === '-'
                && respondingMember2 === generatedMember1
                && respondingResult === generatedMember2
                && response1__checkbox_sum.checked === true
                && response2__checkbox_summand.checked === true
                && responseRes__checkbox_summand.checked === true) {
                    console.log('ПРАВИЛЬНО');
                    checkData = 'Правильно !'
                    break;
                } else {
                    console.log('НЕПРАВИЛЬНО');
                    checkData = 'НЕПРАВИЛЬНО';
                    break;
                };
        case 2:
            if (respondingMember1 === generatedMember2
                && respondingArith === '+'
                && respondingMember2 === generatedResult
                && respondingResult === generatedMember1
                && response1__checkbox_subtrahend.checked === true
                && response2__checkbox_difference.checked === true
                && responseRes__checkbox_minuend.checked === true) {
                    console.log('ПРАВИЛЬНО');
                    checkData = 'Правильно !'
                    break;
                } else {
                    console.log('НЕПРАВИЛЬНО');
                    checkData = 'НЕПРАВИЛЬНО';
                    break;
                };
        case 3:
            if (respondingMember1 === generatedMember1
                && respondingArith === '-'
                && respondingMember2 === generatedResult
                && respondingResult === generatedMember2
                && response1__checkbox_minuend.checked
                && response2__checkbox_difference.checked
                && responseRes__checkbox_subtrahend.checked) {
                    console.log('ПРАВИЛЬНО');
                    checkData = 'Правильно !'
                    break;
                } else {
                    console.log('НЕПРАВИЛЬНО');
                    checkData = 'НЕПРАВИЛЬНО';
                    break;
                };
        case 4:
            if (respondingMember1 === generatedResult
                && respondingArith === '/'
                && respondingMember2 === generatedMember2
                && respondingResult === generatedMember1
                && response1__checkbox_product.checked === true
                && response2__checkbox_multiplier.checked === true
                && responseRes__checkbox_multiplier.checked === true) {
                    console.log('ПРАВИЛЬНО');
                    checkData = 'Правильно !'
                    break;
                } else {
                    console.log('НЕПРАВИЛЬНО');
                    checkData = 'НЕПРАВИЛЬНО';
                    break;
                };
        case 5:
            if (respondingMember1 === generatedResult
                && respondingArith === '/'
                && respondingMember2 === generatedMember1
                && respondingResult === generatedMember2
                && response1__checkbox_product.checked === true
                && response2__checkbox_multiplier.checked === true
                && responseRes__checkbox_multiplier.checked === true) {
                    console.log('ПРАВИЛЬНО');
                    checkData = 'Правильно !'
                    break;
                } else {
                    console.log('НЕПРАВИЛЬНО');
                    checkData = 'НЕПРАВИЛЬНО';
                    break;
                };
        case 6:
            if (respondingMember1 === generatedMember2
                && respondingArith === '*'
                && respondingMember2 === generatedResult
                && respondingResult === generatedMember1
                && response1__checkbox_divisor.checked === true
                && response2__checkbox_quotient.checked === true
                && responseRes__checkbox_dividend.checked === true) {
                    console.log('ПРАВИЛЬНО');
                    checkData = 'Правильно !'
                    break;
                } else {
                    console.log('НЕПРАВИЛЬНО');
                    checkData = 'НЕПРАВИЛЬНО';
                    break;
                };
        case 7:
            if (respondingMember1 === generatedMember1
                && respondingArith === '/'
                && respondingMember2 === generatedResult
                && respondingResult === generatedMember2
                && response1__checkbox_dividend.checked === true
                && response2__checkbox_quotient.checked === true
                && responseRes__checkbox_divisor) {
                    console.log('ПРАВИЛЬНО');
                    checkData = 'Правильно !'
                    break;
                } else {
                    console.log('НЕПРАВИЛЬНО');
                    checkData = 'НЕПРАВИЛЬНО';
                    break;
                };
        
                
    };
    if (checkData === 'Правильно !') {
        checkResult.textContent = 'Правильно';
        checkResult.style.backgroundColor = 'lightgreen';
    } else if (checkData === 'НЕПРАВИЛЬНО') {
        checkResult.textContent = 'НЕПРАВИЛЬНО';
        checkResult.style.backgroundColor = 'red';
    }
};








