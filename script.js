const calculateBmi = (mass,height) => mass/(height*height);

const markProfile = {
    fullname: 'Mark Joe',
    mass: 60,
    height: 1.5 
};

const johnProfile = {
    fullname: 'John Smith',
     mass: 80, 
     height: 1.7
};

markProfile.bmi = calculateBmi(markProfile.mass,markProfile.height);

johnProfile.bmi = calculateBmi(johnProfile.mass,johnProfile.height);

if(markProfile.bmi > johnProfile.bmi ) {
    console.log(markProfile.fullname + ' has higher BMI than ' + johnProfile.fullname + ' which is '+ markProfile.bmi.toFixed(2));
} else if(markProfile.bmi < johnProfile.bmi) {
    console.log(johnProfile.fullname + ' has higher BMI than ' + markProfile.fullname + ' which is '+ johnProfile.bmi.toFixed(2));
}else {
    console.log(markProfile.fullname + ' has same BMI as '+ johnProfile.fullname);
}
