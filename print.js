function print(){

    console.log('abc');

}

//print();



//var months = [ {"id":1,"name":"January"}, {"id":2,"name":"February"} ];
//console.log(JSON.stringify(months));



var month = {};
var monthNames = ["January", "February"];
var monthsArray = [];

for (let i = 0; i < 2; i++) {
    month.id = (i + 1);
    month.name = monthNames[i];
    monthsArray.push({month});
}
console.log(JSON.stringify(monthsArray));