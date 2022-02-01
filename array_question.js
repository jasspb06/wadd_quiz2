function getarray(array){
    var gArray = [];
    
    
    for(i=0; i < array.length; i++)
    {
        if(gArray.indexOf(array[i]) === -1) 
        {
            gArray.push(array[i]);
        }
    }
    return gArray;
}

var names = ["John", "Peter", "Clark", "Harry", "John", "Alice"];
var gNames = getarray(names);
console.log(gNames)