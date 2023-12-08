const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI(){
    const heightValue = document.getElementById("height").value/100;
    const weightValue = document.getElementById("weight").value;
    const BmiValue = weightValue / (heightValue * heightValue);
    bmiInputEl.value = BmiValue;

    if(BmiValue < 18.5){
        weightConditionEl.innerText = "Under Weight"
    }else if(BmiValue >= 18.5 && BmiValue <= 24.9){
        weightConditionEl.innerText = "Normal Weight"
    }else if (BmiValue >= 25 && BmiValue <= 29.9){
        weightConditionEl.innerText ="Overweight"
    }else if(BmiValue >= 30){
        weightConditionEl.innerText ="Obesity"
    }
}
btnEl.addEventListener("click", calculateBMI);