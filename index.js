
// This case is for the forward movement 
var x =0; var y =0; // try and put this into an object
// var robot = {x:12,y:0}
// console.log(robot.x)


const UserInput = require('./testing.js');
var base= UserInput("Enter the coordinates");

//var base.inputRows, base.inputColumns
//console.log(base.inputRows)
//console.log(base.inputColumns)
      // console.log(InputRows);
      //       console.log(InputColumns);
//console.log(base)

// making objects of input Rows & columns
// var InputRows = base.inputRows
// var InputColumns = base.inputColumns

var InputRows = base[0];
var InputColumns = base[1];
      
      // console.log(InputRows);
      // console.log(InputColumns);

var lost=0;


// Creating 2D Array

// Create one dimensional array 
	var gfg = new Array(InputRows); 

//console.log("Creating 2D array"); 

// Loop to create 2D array using 1D array 
for (var i = 0; i < InputRows; i++) { 
	gfg[i] = new Array(InputColumns); 
} 

var h = 0; 

// Loop to initilize 2D array elements. 
for (var i = 0; i < InputRows; i++) { 
	for (var j = 0; j < InputColumns; j++) { 
		gfg[i][j] = h++; 
	} 
} 










   // convert the inout to character array gere first


// console.log("***Press 'Q' to Quite***\n\n"); 

var orientation=1; 
do {
  var inputVal = prompt(" \n");
    var b= inputVal.trim().split(" ");
    x = parseInt(b[0]);
    y = parseInt(b[1]);




if (x> InputRows || y>InputColumns)
{
  console.log("input values are out of the range, please enter again");
  continue;
}

    
    if  (b[2] == "N")
    {orientation=1;}
    else if  (b[2] == "W")
    {orientation=2;}
    else if  (b[2] == "S")
    {orientation=3;}
    else if  (b[2] == "E")
    {orientation=4;}
    
// do the rest that i have told you ... use the orientat


var Directions = prompt(" \n");
    var UserDirection= Directions.trim().split('');

    		// console.log(b); 

for (var i = 0; i < UserDirection.length; i++) {



  switch (UserDirection[i]) {
    case 'R':  
  // if Right pressed   
      orientation = orientation -1;
  //  check  that or never increases more than 4

      if (orientation <1){
      orientation = 4; 
      }    

  // Name the orientation 
       /* if (orientation ==1){
            console.log ("\n ** NORTH **")
        }
        if (orientation==2){
            console.log ("\n ** WEST **")
        }
        if (orientation ==3){
            console.log ("\n ** SOUTH **")
        }
        if (orientation ==4){
            console.log ("\n ** EAST **")
      } */
      break

    case 'L':
  // if Left pressed   
  //  check  that or never increases more than 4
      orientation = orientation + 1;
      if (orientation > 4){
      orientation = 1;
      }
  // Name the orientation 
        /*if (orientation ==1){
            console.log ("\n ** NORTH **")
        }
        if (orientation==2){
            console.log ("\n ** WEST **")
        }
        if (orientation ==3){
            console.log ("\n ** SOUTH **")
        }
        if (orientation ==4){
            console.log ("\n ** EAST **")
      }*/
       break

        case 'F':

  if (orientation ==1){
   if (y > (InputColumns-1)){
     lost=1;
     }
else{
    if ((y+1)<=50)
  {x=x; y=y+1;}
  }}


  if (orientation==2){
    if ((x-1)>=0)
    {x=x-1; y=y;}
  }


  if (orientation ==3){
    if ((y-1)>=0)
  {x=x; y=y-1;}
  }


 if (orientation ==4){
  if (x > (InputRows-1)){
     lost=1;
     }

  else{
   if ((x+1)<=50)
  {x=x+1; y=y;}
 }}
      break



    case 'Q':
      console.log ("QUIT!!! \n")
      break
    default:
      console.log("Invalid number \n")
      break
  }
}
if (lost==1)
{
  if (orientation ==1){
            console.log (x,y,"N","LOST");
        }
        if (orientation==2){
            console.log (x,y,"W","LOST");
        }
        if (orientation ==3){
            console.log (x,y,"S","LOST");
        }
        if (orientation ==4){
            console.log (x,y,"E","LOST");
        }
   lost=0;
  
  
  }
else{


  if (orientation ==1){
            console.log (x,y,"N");
        }
        if (orientation==2){
            console.log (x,y,"W");
        }
        if (orientation ==3){
            console.log (x,y,"S");
        }
        if (orientation ==4){
            console.log (x,y,"E");
}
	}
 } while (UserDirection!='Q');



