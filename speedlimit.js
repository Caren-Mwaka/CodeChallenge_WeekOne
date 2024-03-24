//Challenge 2: Speed Detector (Toy Problem)

//within the function speedDetector;
//Two variables are declared; one denoting the speed limit and uses the let keyword allowimg the value of the speedlimit to be reassigned
//The other one is a constant expression that shows how to calculate and get the demerit points; 
//The Math.floor method rounds down the demerit points to its nearest integer, for instance for 79 where you'd get 1.4 points it rounds it down to 1
function speedDetector(speed){
    let speedLimit = 70;
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
    
    if(speed <= speedLimit){
    return "OK";
    } 
    else if(demeritPoints > 12){
    return "License Suspended!";
    } 
    else {
    return `You have ${demeritPoints} demerit point/s`;
    }
    }
    //To view on browser;
    /*const speed = parseInt(prompt("Enter speed: "));
    const result = speedDetector(speed);
    alert(result);*/
   
    console.log(speedDetector(79));
 // The if else statements fulfills the conditions stipulated in the assignment, that is, If the speed is less than 70, it should print “Ok”. 
 // Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

