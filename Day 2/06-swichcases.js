const { log } = require("node:console");

function getBrowser(browser)
{
    switch(browser)
    {
        case "Chrome":
            console.log("Its chrome browser");
            break

        case "IE":
            console.log("This is IE");
            break

        case "Fire fox":
            console.log("This is firefix browser");
            break
                
        default:
            console.log("Unknowen browser");
            break
    }
}
function getTestingTypes()
{
    switch(testingType)
    {
        case "SIT":
            console.log("System Integration Testing");
            break;
        case "UAT":
            console.log("User Acceptance Testing");
            break;
        case "PST":
            console.log("Production support testing")
            break;
        default:
            console.log("Unknown testing");
            break;
    }
}
getBrowser("IE")
let testingType="UAT"
getTestingTypes()