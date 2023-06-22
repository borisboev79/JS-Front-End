function ticketPrice(day, age) {
    let price = 0;

    if(age < 0 || age > 122){
        console.log('Error!');
    }    

    else if (age >= 0 && age <=18) {
        switch(day){
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 5; break;
        }
        console.log(`${price}$`);
    }
    else if (age > 18 && age <=64) {
        switch(day){
            case 'Weekday': price = 18; break;
            case 'Weekend': price = 20; break;
            case 'Holiday': price = 12; break;
        }
        console.log(`${price}$`);
    }
    else {
        switch(day){
            case 'Weekday': price = 12; break;
            case 'Weekend': price = 15; break;
            case 'Holiday': price = 10; break;
        }
        console.log(`${price}$`);

  }     
}