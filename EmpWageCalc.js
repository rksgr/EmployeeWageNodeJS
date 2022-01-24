console.log("Hi All!\n"+ 
"Welcome to Bridgelabz!\n"+
"Today we shall calculate Wage of employee depending on work done by him.");

const NO_WORK = 0;
const PART_TIME_WORK = 4;
const FULL_TIME_WORK = 8;
const PER_HR_WAGE = 20;
const WORKING_DAYS_IN_MONTH = 20;

/**
 * UC 1: Check if employee is present or not
 */
let employeePresent = false;
if(Math.random() > 0.5){
    employeePresent = true;
}else if(Math.random() <= 0.5){
    employeePresent = false;
}
console.log("If employee present today: " + employeePresent);

/**
 * UC 2: Calculate daily employee wage based on part time or full time work using switch case 
 */

// To get a random number out of 1, 2 or 3
{
    let workNoOrPartOrFullTime = Math.ceil((Math.random()*10)/3);
    let empWageToday = 0;

    switch(workNoOrPartOrFullTime){
        case(1):
        empWageToday = NO_WORK* PER_HR_WAGE;
        break;
        case(2):
        empWageToday = PART_TIME_WORK*PER_HR_WAGE;
        break;
        case(3):
        empWageToday = FULL_TIME_WORK*PER_HR_WAGE;
        break;
    }
    console.log("Wage of employee today: $"+ empWageToday);
}

/**
 * UC 3: Write function to get work hours
 * @return : Hours worked by the employee in a given day
 */
function getWorkHours(){
    let randomHours = Math.floor((Math.random()*10)/3);
    let hours_worked = 0;

    if(randomHours == 0){
        hours_worked = 0;
    }else if(randomHours == 1){
        hours_worked = 4;
    }else if(randomHours == 2){
        hours_worked = 8;
    }
    return hours_worked;
}
console.log("Hours worked by employee today = "+ getWorkHours());

/**
 * UC 4: Calculate wages for a month assuming 20 working days in a month
 */
{
    let days = 0;
    let wages_of_month = 0;
    while(days < WORKING_DAYS_IN_MONTH){
        wages_of_month += PER_HR_WAGE*getWorkHours(); 
        days++;
    }
    console.log("The wage of the employee in this month = "+ wages_of_month);
}