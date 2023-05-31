import scan from "readline-sync";
import color from "cli-color";

const gray=color.xterm(8)
const red=color.xterm(9)
const bluegreen=color.xterm(29)
const purple=color.xterm(91)

function main(){
console.clear()
input()
}
function input2(){
  
    let sec
    sec=scan.question(gray("Enter the second no:"))
    if (Number(sec)){
        return sec
    }
    else{
        console.log("Not a Number")
         return input2()
    }
    
}

function input(){
    let y;
    let x=(scan.question(gray("Enter the first no:")))
    if(Number(x)){
            y=(scan.question(gray("Enter the second no:")))
       
        
        if (Number(y)){
            option(x,y)
        }
        else{
        console.log("Not a Number")
        y=input2()
        option(x,y)
      
        }
    }
    else{
        console.log("Not a Number")
        input()
    }
    
    
}
function option(a,b){
let z=Number(scan.questionInt(bluegreen("Enter the option no:\n1.ADD\n2.Sub\n3.Multiply\n4.Divide\n5.Modulus")))
switch(z){
   case 1:
    console.log(purple(Number(a)+Number(b)));
    break;

   case 2:
    console.log(purple(Number(a)-Number(b)));
    break;
   
   case 3:
    console.log(purple(Number(a)*Number(b)));
    break;

   case 4:
    console.log(purple(Number(a)/Number(b)));
    break;

   
   case 5:
    console.log(purple(Number(a)%Number(b)));
    break;

    default:
    console.log(red("Error:Enter option again"));
    option(a,b);
    break;

}
}

main();