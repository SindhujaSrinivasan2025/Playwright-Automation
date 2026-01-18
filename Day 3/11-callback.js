function checkAvailabilty(movieName,callback)
{
console.log(`Checking the movie name:`,movieName);
console.log(`Run the advertisement while fetching from the server`)

setTimeout(()=>
{
console.log("Movie "+movieName+" is available");
callback() 
},2000) 
}

function playMovie()
{
console.log("Now playwing the Movie");
}

checkAvailabilty("SpiderMan",playMovie)