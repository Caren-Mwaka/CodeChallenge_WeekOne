//Challenge 3: Net Salary Calculator (Toy Problem)

// Main function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
//Since there were no benefits included, the gross salary is the basic salary.
    const PAYE = totalPAYE(grossSalary);
    const NHIF = deductedNHIF(grossSalary);
    const NSSF = deductedNSSF(grossSalary);
    
    const netSalary = grossSalary - (PAYE + NHIF + NSSF);
  
//Function to calculate PAYE (Total Tax) for a given gross salary. Based on the PAYE rate and thresholds in effect from 1 July 2023
function totalPAYE(grossSalary) {
    if (grossSalary <= 24000) {
        return grossSalary * 0.1;
    } 
    else if (grossSalary <= 32333) {
        return (grossSalary - 24000) * 0.25 + (24000 * 0.1);
    } 
    else if (grossSalary <= 500000) {
        return (grossSalary - 32333) * 0.30 + (32333-24000)*0.25 + (24000 * 0.1);;  
    } 
    else if (grossSalary <= 800000) {
        return (grossSalary - 500000) * 0.325 + (500000-32333)*0.30 + (32333-24000)*0.25 + (24000 * 0.1);;
    } 
    else {
        return (grossSalary - 800000) * 0.35 + (800000-500000)*0.325 + (500000-32333)*0.30 + (32333-24000)*0.25 + (24000 * 0.1);;
    }
}

//Function to highlight NHIF Deduction rates in effect from 1 April 2015
function deductedNHIF(grossSalary) {
    if (0 >= grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    }else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } 
    else {
        return 1700;
    }
}

//Function to highlight NSSF Deductions based of the NSSF database that were to take effect from February 1, 2024 for Tier 1 and Tier 2 employees.
function deductedNSSF(grossSalary) {
    if(grossSalary>=7000 && grossSalary <= 36000){
      return 420;
    }
  else if(grossSalary>=36000){
    return 1740;
  }
  else{
    return 0;
  }
}

//values that will be returned when the function caluclateNetSalary is called.  
    return {
        'The gross salary is': grossSalary,
        'The PAYE is': PAYE,
        'The NHIF Deduction is': NHIF,
        'The NSSF Deduction is': NSSF,
        'The Net Salary is': netSalary
    };
}
console.log(calculateNetSalary(500000, 0))