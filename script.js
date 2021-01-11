//1.create a request variable
var request=new XMLHttpRequest();
//2.create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.send the connection
request.send();
//4.register a event listner.once data is ready load the data
request.onload=function(){

    var countrydata=JSON.parse(this.response);
    for(let i in countrydata)
    {
        console.log(countrydata[i].name);
    }
    
}