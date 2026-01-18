function getincrement()
{

    for (let index = 0; index < 10; index++) 
    {
    console.log(index);
    }
}

function getdecrement()
{
    for (let index = 10; index <=10 && index>=0; index--)
        {
        console.log(index);
        }
}

let number
function oddoreven(number)
{
    if(number%2==0)
    {
        console.log("Even number")
    }
    else
    {
        console.log("Odd number")
    }

}

console.log("Print Decrement:");
getdecrement()
console.log("Print Increment:");
getincrement()
console.log("Odd or even number:");
oddoreven(10)