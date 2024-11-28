function calcu(){
    const height = userHeight.value
    console.log(height);
    const weight = userWeight.value
    console.log(weight);
    const newHeight = height/100
    const bmi = (weight/(newHeight**2)).toFixed(2)

    result.innerHTML = `<p>${bmi}</p>`


    
}
