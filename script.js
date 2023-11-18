const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('moreinfo').classList.remove('hidden');

    if (bmi < 16.9) {
        description = "Você está muito abaixo do peso!"
    }  else if (bmi >= 17 && bmi <= 18.4) {
        description = 'Você está abaixo do peso!'
    }  else if (bmi >= 18.5 && bmi <= 24.9) {
        description = 'Peso normal!'
    }  else if (bmi >= 25 && bmi <= 29.9) {
        description = 'Você está acima do peso!'
    }  else if (bmi >= 30 && bmi <= 34.9) {
        description = 'Obesidade grau I!'
    }  else if (bmi >= 35 && bmi <= 40) {
        description = 'Obesidade grau II!'
    }  else if (bmi >= 40) {
        description = 'Obesidade grau III!'
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
})