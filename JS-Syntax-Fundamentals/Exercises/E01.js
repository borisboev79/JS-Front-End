function ageGroup(age){

    let ageGroup = null;

    if(age < 0) {
        ageGroup = 'out of bounds'
    }
    else if (age < 3) {
        ageGroup = 'baby';
    }
    else if(age < 14) {
        ageGroup = 'child';
    }
    else if(age < 20) {
        ageGroup = 'teenager';
    }
    else if(age < 66) {
        ageGroup = 'adult';
    }
    else  {
        ageGroup = 'elder';
    }
    console.log(ageGroup);
}
