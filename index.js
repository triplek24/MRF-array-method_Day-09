//Rest countries:

var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
var data;


request.onload= function(){
        data = JSON.parse(request.response);
     

//Get all the countries from Asia continent /region using Filter function
    var asiancountries =  data.filter((val)=>val.region==="Asia")
    for(i=0;i<asiancountries.length;i++){
        console.log(asiancountries[i].name);
    }                                              //output  50 countries are in Asia continent}

//Get all the countries with a population of less than 2 lakhs using Filter function
 var poplessthan2countries = data.filter((val)=>val.population <= 200000);
    for(i=0;i<poplessthan2countries.length;i++){
        console.log(poplessthan2countries.name);
    }

//print follwoig details  name , capital , flag  - foreach,filter
Object.keys(data.keys(data));
    var namecap  = details.forEach((val)=>{
        console.log(`obj[val.name]`);
        
    })
}
//Print the total population of the countries  - reduce
function TotalPopulation(details){
    var totpop = details.reduce((acc,cur)=>{
        acc = acc + parseInt(cur.population);
        return acc;
    },0)
    console.log(totpop); 		//7374137231
}
//Print the total population of the countries in asia - filter & reduce
function Asiancountriespop(details){

    var asianpop = details.filter((val)=>val.region==="Asia")
                            .reduce((acc,curr)=>{
                                acc = acc + parseInt(curr.population);
                                return acc;},0)

    console.log(asianpop); 			//4391254784

}
 function uscurrency(details){
     var currency = details.filter((val)=>val["currencies"]==="united states dollar")
     console.log(countries.map((val)=>val["name"]))
}
