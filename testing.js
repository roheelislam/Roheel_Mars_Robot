module.exports = (question)=>{
  //taking User input
  var Input_Row_Col = prompt(question+" \n");
 // var InputColumns = prompt("Enter amount of columns");

  //triming and spiliting user input
    var a= Input_Row_Col.trim().split(" ");

  //var InputRows = base[0];
 // var InputColumns = base[1];
 var object =  { inputRows:a[0], inputColumns:a[1]}
 console.log(object)
return object
//return a;
}


