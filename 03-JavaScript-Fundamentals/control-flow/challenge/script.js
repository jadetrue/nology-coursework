function handleNumber(event) {
    let number = event.target.value;

    if (!number) return;
    
    // Check if positive or negative number has been entered.

    if (Math.sign(number) > 0)  {
        alert("Your number is positive.");
    } else {
        alert("Your number is negative.");
    }

    /*if (number > 20) {
        alert("Your number is higher than mine");
    } else {
        alert("Your number is lower than mine");
    }*/
}

// Logging to the console 3 different values and returning the highest.

function maxThree(x, y, z) {
    max_val = 0;
    if (x > y) {
        max_val = x;
    } else {
        max_val = y;
    } 
    if (z > max_val) {
        max_val = z;
    }
    return max_val;
}

console.log(maxThree(10, 1, 200));

// Days until the weekend.

function handleDay(event) {
    let daysUntilWeekend = event.target.value;
    
    //if (!daysUntilWeekend) return;

   let days;
   switch (daysUntilWeekend) {
        case "Monday":
            days = "5 days until the weekend starts";
            break;
        case "Tuesday":
            days = "4 days until the weekend starts";
            break;
        case "Wednesday":
            days = "3 days until the weekend starts";
            break;
        case "Thursday":
            days = "2 days until the weekend starts";
            break;
        case "Friday":
            days = "1 days until the weekend starts";
            break;
        case "Saturday":
            days = "It's the weekend!";
            break;
        case "Sunday":
            days = "It's the weekend!";
            break;
        default: 
            days = "Sorry we didn't recognise that day";
    } 

    alert(days);
}


// Veg challenge
const veg = "cabbage";
switch (veg) {
    case "potato":
    case "carrot":
        alert("£1.50 per kg");
        break;
    case "brocolli":
        alert("99p");
        break;
    case "cabbage":
        alert("67p");
        break;
    case "asparugus":
        alert("50p");
        break;  
}