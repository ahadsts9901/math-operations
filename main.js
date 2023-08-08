// Add
function add() {
    showNumberInputPrompt('Enter a Number To Add', 'Add', (input, result) => {
        return `${input} + ${result.value} = ${Number(input) + Number(result.value)}`;
    });
}

// Subtract
function subtract() {
    showNumberInputPrompt('Enter a Number To Subtract', 'Subtract', (input, result) => {
        return `${input} - ${result.value} = ${Number(input) - Number(result.value)}`;
    });
}

// Multiply
function multiply() {
    showNumberInputPrompt('Enter a Number To Multiply', 'Multiply', (input, result) => {
        return `${input} X ${result.value} = ${Number(input) * Number(result.value)}`;
    });
}

// Divide
function divide() {
    showNumberInputPrompt('Enter a Number To Divide', 'Divide', (input, result) => {
        return `${input} / ${result.value} = ${Number(input) / Number(result.value)}`;
    });
}

// Square
function square() {
    showNumberResult(`Square of`, (num) => num * num);
}

// SquareRoot
function squareRoot() {
    showNumberResult(`Square root of`, (num) => Math.sqrt(num).toFixed(2));
}

// Cube
function cube() {
    showNumberResult(`Cube of`, (num) => num * num * num);
}

// Modulus
function modulus() {
    showNumberResult(`Modulus of`, (num) => num % 2);
}

// Generate factors of a number
function generateFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Factor
function factor() {
    let input = parseFloat(document.getElementById("input").value);
    let factors = generateFactors(input);
    Swal.fire({
        title: `Factors of ${input}`,
        html: `The factors of ${input} are: ${factors.join(', ')}`,
        confirmButtonColor: '#5d68ba'
    });
    document.getElementById("input").value = "";
}

// Generate multiplication table
function table() {
    let input = parseFloat(document.getElementById("input").value);
    let tableHtml = '<table class="w-full">';
    for (let i = 1; i <= 10; i++) {
        tableHtml += `
            <tr>
                <td class="px-2">${input} x ${i}</td>
                <td class="px-2">=</td>
                <td class="px-2">${input * i}</td>
            </tr>
        `;
    }
    tableHtml += '</table>';
    Swal.fire({
        title: `Table of ${input}`,
        html: tableHtml,
        confirmButtonColor: '#5d68ba'
    });
    document.getElementById("input").value = "";
}

// Show SweetAlert prompt for number input
function showNumberInputPrompt(title, buttonText, resultFunction) {
    Swal.fire({
        title: title,
        input: 'number',
        inputAttributes: {
            step: 'any'
        },
        showCancelButton: true,
        confirmButtonText: buttonText,
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#5d68ba',
        cancelButtonColor: '#5d68ba',
        inputValidator: (value) => {
            if (!value) {
                return 'You need to enter a number!';
            }
        },
    }).then((result) => {
        let input = parseFloat(document.getElementById("input").value);
        if (result.isConfirmed) {
            Swal.fire({
                title: resultFunction(input, result),
                confirmButtonColor: '#5d68ba'
            });
        }
        document.getElementById("input").value = "";
    });
}

// Show SweetAlert with calculated result and update history
function showNumberResult(titlePrefix, calculationFunction) {
    let num = parseFloat(document.getElementById("input").value);
    if (isNaN(num)) {
        Swal.fire({
            title: 'Invalid Number',
            text: 'Please enter a valid number',
            icon: 'error',
            confirmButtonColor: '#5d68ba'
        });
        return;
    }
    Swal.fire({
        title: `${titlePrefix} ${num}`,
        text: `${titlePrefix} ${num} is ${calculationFunction(num)}`,
        confirmButtonColor: '#5d68ba'
    });
    document.getElementById("input").value = "";
}