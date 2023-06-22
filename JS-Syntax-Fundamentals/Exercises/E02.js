function ticketPrice(count, group, day) {
    let price = 0;

    switch(group){

        case 'Students':

        switch(day) {
            case 'Friday':
                if (count < 30) {
                    price =  count  * 8.45;
                }
                else {
                    price = count * 8.45 * 0.85;
                }
            break;

            case 'Saturday':
                if (count < 30) {
                    price = count * 9.80;
                }
                else {
                    price = count * 9.80 * 0.85;
                }
            break;

            case 'Sunday':
                if (count < 30) {
                    price = count * 10.46;
                }
                else {
                    price = count * 10.46 * 0.85;
                }
            break;
        } 
            
        break;

        case 'Business':

        switch(day) {
            case 'Friday':
                if (count < 100) {
                    price = count * 10.90;
                }
                else {
                    price = (count * 10.90) - (10 * 10.90);
                }
            break;

            case 'Saturday':
                if (count < 100) {
                    price = count * 15.60;
                }
                else {
                    price = (count * 15.60) - (10 * 15.60);
                }
            break;

            case 'Sunday':
                if (count < 100) {
                    price = count * 16;
                }
                else {
                    price = (count * 16) - (10 * 16);
                }
        }

        break;

        case 'Regular':

        switch(day) {
            case 'Friday':
                if (count < 10 || count > 20) {
                    price =  count  * 15;
                }
                else {
                    price = count * 15 * 0.95;
                }
            break;

            case 'Saturday':
                if (count < 10 || count > 20) {
                    price = count * 20;
                }
                else {
                    price = count * 20 * 0.95;
                }
            break;

            case 'Sunday':
                if (count < 10 || count > 20) {
                    price = count * 22.50;
                }
                else {
                    price = count * 22.50 * 0.95;
                }
            break;
        } 
            
        break;


    }   
    
    console.log(`Total price: ${price.toFixed(2)}`);
}