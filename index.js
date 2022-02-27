//Rest countries:

var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send()
var data;


request.onload= function(){
    if(request.status == 200 && request.readyState ==4){
        data = JSON.parse(this.response);
        console.log(data);
        GetAsianCountries(data);
        populationLessthan(data);				
        bumpthepopulation(data);
        Touppercase(data);
        Namecapital(data);
        TotalPopulation(data);
        Asiancountriespop(data);
        uscurrency(data);
    }
    else
    {
        console.log("Status is : "+request.status);
    }
}


//Get all the countries from Asia continent /region using Filter function

function GetAsianCountries(details){
    
    var asiancountries =  details.filter((val)=>val["region"]==="Asia")

    console.log(asiancountries.map((val)=>val["name"]))    //output  50 countries are in Asia continent
}

//Get all the countries with a population of less than 2 lakhs using Filter function
function populationLessthan(details){

    var poplessthan2countries = details.filter((val)=>val.population <= 200000)

    console.log(poplessthan2countries.map((val)=>{                //outout 63 countries with less than 2 lacks 
        var str = val["name"]+" : "+val["population"];
        return str;
    }))
}

//Bumpup the current population  of all the counteirs by 1L - Map 

function bumpthepopulation(details){

    var pop = details.map((val)=>{
        val["population"]+=100000;
        return val;
    });
    console.log(pop.map((val)=>{
        var str = val["name"]+" : "+val["population"];
        return str;
    }))

}
//convert all the names in capital - map
function Touppercase(details){

    var names = details.map((val)=>val.name.toUpperCase())

    console.log(names.map((val)=>val))

}
//print follwoig details  name , capital , flag  - foreach,filter
function Namecapital(details){
    var namecap  = details.forEach((val)=>{
        console.log(val.name+" => "+val.capital)
        
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