function checkSpeed(speed, region) {
  let allowedSpeed = 0;

  switch(region) {
    case 'residential': allowedSpeed = 20; break;
    case 'city': allowedSpeed = 50; break;
    case 'interstate': allowedSpeed = 90; break;
    case 'motorway': allowedSpeed = 130; break;
  }
  
    if (speed <= allowedSpeed) {
      text = `Driving ${speed} km/h in a ${allowedSpeed} zone`;
    } else if (speed <= allowedSpeed + 20) {
      text = `The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - speeding`;
    } else if (speed <= allowedSpeed + 40) {
      text = `The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - excessive speeding`;
    } else {
      text = `The speed is ${speed - allowedSpeed} km/h faster than the allowed speed of ${allowedSpeed} - reckless driving`;;
    }

  console.log(text);
}

checkSpeed(200, 'motorway');
