// switch homework
let country = prompt("Enter a country:singapore or other country");
switch (country) {
    case 'singapore':
      alert( "We've got airline for this singapore country!" );
      break;
  
    case 'japan':
    case 'USA':
    case 'korea':
    case 'malaysia':
      alert( 'Welcome,we support airline these country too' );
      break;
  
    default:
      alert( 'We support only for singapore,japan,USA,korea & Malaysia,We hope that this page looks ok!' );
  }