let age
function getvalidvoterinfo(age)
{
    let message=age>18?"you can vote" : "you can't vote"
    console.log(message);
}
console.log(age);
getvalidvoterinfo(35)

//String reverse
let sentense="I love my country"
let reverse=""
for(let i=0;i<sentense.length;i++)
{
    reverse=sentense[i]+reverse
}
console.log(reverse);

//