//UC-1
// const IS_ABSENT=0
// let empCheck=Math.floor(Math.random()*10)%2;
// if(empCheck==IS_ABSENT){
//     console.log("Employee isAbsent");
// }else{
// console.log("Employee is present");
// }


// const IS_PART_TIME=1;
// const IS_FULL_TIME=2;
// const PART_TIME_HOURS=4;
// const FULL_TIME_HOURS=8;
// const WAGE_PER_HOUR=20;
// {
//     let empHrs=0;
//     let empCheck=Math.floor(Math.random()*10)%3;
//     switch(empCheck){
//        case IS_PART_TIME:
//          empHrs=PART_TIME_HOURS;
//          break;
//          case IS_FULL_TIME:
//         empHrs=FULL_TIME_HOURS;
//        break;
//       default:
//            empHrs=0;
//     }

// let empWage=empHrs*WAGE_PER_HOUR;
// console.log("UC2 - Employee wage: "+ empWage);
// }


//UC-3

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs=0;
function getWorkingHours(empCheck)
{
    switch(empCheck){
        case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        return empHrs;
      
        case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        return empHrs;
        default:
            empHrs=0;
            return empHrs;

    }
}

let empCheck=Math.floor(Math.random()*10)%3;
let TotalempHrs=getWorkingHours(empCheck);
let empWage=TotalempHrs*WAGE_PER_HOUR;
//console.log("UC3 - Employee wage: "+ empWage);


//UC-4

const NUM_OF_WORKING_DAYS=2;
let empHrs1=0;
for(let day=0;day<NUM_OF_WORKING_DAYS;day++){
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs1 += getWorkingHours(empCheck);

}
let TotalempWage=empHrs1*WAGE_PER_HOUR;
//console.log("UC4 - Total Hours "+ TotalempWage);

//UC-5

// const MAX_HRS_IN_MONTH = 100;
// let TotalempHrs1=0;
// let totalWorkingDays=0;
// while(TotalempHrs <=MAX_HRS_IN_MONTH && totalWorkingDays <NUM_OF_WORKING_DAYS)
// {
//     totalWorkingDays++;
//     let empCheck=Math.floor(Math.random()*10)%3;
//     TotalempHrs1=getWorkingHours(empCheck);
// }

// let empWage2=TotalempHrs1*WAGE_PER_HOUR;
// console.log("UC5 - Total Days :" +totalWorkingDays+"Total Hours :"+TotalempHrs1+"Emp Wage :"+empWage2);

//UC-6


function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH = 160;
let TotalempHrs1=0;
let totalWorkingDays=0;
let empDailyWageArr= new Array();

while(TotalempHrs <=MAX_HRS_IN_MONTH && totalWorkingDays <NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    TotalempHrs1=getWorkingHours(empCheck);
    TotalempHrs1=empHrs1;
    empDailyWageArr.push(calcDailyWage(empHrs1));
}

let empWage2=calcDailyWage(TotalempHrs1);
console.log("UC5 - Total Days :" +totalWorkingDays+"Total Hours :"+TotalempHrs1+"Emp Wage :"+empWage2);
