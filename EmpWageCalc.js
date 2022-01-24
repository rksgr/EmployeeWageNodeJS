console.log("Hi All!\n"+ 
"Welcome to Bridgelabz!\n"+
"Today we shall calculate Wage of employee depending on work done by him.");

const NO_WORK = 0;
const PART_TIME_WORK = 4;
const FULL_TIME_WORK = 8;
const PER_HR_WAGE = 20;

/**
 * UC 1: Check if employee is present or not
 */
 function checkEmployeeAttendance(){
    let employeePresent = false;
    if(Math.random() > 0.5){
        employeePresent = true;
    }else if(Math.random() <= 0.5){
        employeePresent = false;
    }
    console.log("If employee present today: "+employeePresent);
    return employeePresent;
}
checkEmployeeAttendance();

/**
 * UC 2: Calculate daily employee wage based on part time or full time work using switch case 
 */

 function calculateDailyWage(){

    // To get a random number out of 1, 2 or 3
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
     return empWageToday;
}
calculateDailyWage();


