console.log("Hi All!\n"+ 
"Welcome to Bridgelabz!\n"+
"Today we shall calculate Wage of employee depending on work done by him.");

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