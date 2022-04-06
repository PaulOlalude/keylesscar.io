function checkDriverAge (age) {
    console.log(checkDriverAge)
    if (age < 18) {
        return "sorry, you're too young to drive";
    } else if (age > 18) {
        return "powering on, enjoy the ride";
    }
    else if (age === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}




/*var age= prompt("what is your age?");
if (Number(age)<18) {
    alert("sorry, you're too young to drive this car, powering off!");
} else if (Number(age)> 18) {
    alert("powering on, Enjoy the ride!");
} else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
}*/