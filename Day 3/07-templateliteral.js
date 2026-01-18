function getTotalTestcases(x)
{
    let testresult=`There is ${x} testcases`
    console.log(testresult);
}
getTotalTestcases(400);


function getTotalTestcasesInRunTime()
{
    let result=process.argv[2]
    console.log("output is:" +result);
}
getTotalTestcasesInRunTime()

