function handleCalculateGrade(event) {
    const grade = event.target.value;

    if (!grade) return;

    let percentage;
    switch (grade) {
        case "A":
        case "a":
            percentage = "90-100%";
            break;
        case "B":
        case "b":  
            percentage = "75-90%";
            break;
        case "C":
        case "c":
            percentage= "50-75%";
            break;
        case "D":
        case "d":
            percentage= "25-50%";
            break;   
        case "E":
        case "e": 
            percentage= "0-25%";
            break;
    } 

    alert("The percentage was " + percentage);
}