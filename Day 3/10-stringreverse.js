let companyname="test"
let reverse=""
function getreverse()
{
 for(let i=0;i<companyname.length;i++)
 {
    reverse=companyname[i]+reverse
 }
 console.log(reverse);
}
getreverse()
