
// document.write("Hello Manish");

// js console api
// console.log("Log me hai hum");
// console.warn("first warning");
// console.error("first error");


var num1 = 22;
var num2 = 33;

var sum = num1 + num2;

// document.write(sum);

// objects
var marks = {
    manish : 99,
    mukul : 97,
    deepak : 98
}

console.log(marks)

// array
var arr = [1,2,3,"Mani",4];
console.log(arr);

// function

function avg(a, b)
{
    return (a+b)/2;
}

var c1 = avg(4, 6);
var c2 = avg(14, 16);

// document.write(c1, c2);
console.log(c1, c2);

var arr = [1,2,3,4,5,6,7,8,9];
// for(var i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
//     // console.log(arr.length);
// }

// for each loop

// arr.forEach(function(element)
// {
//     console.log(element);
// })

// while loop

// let j = 0;
// while(j < arr.length)
// {
//     console.log(arr[j]);
//     j++;
// }

// do while loop

// let j = 0;
// do{
//     console.log(arr[j]);
//     j++;
// }while(j < arr.length);

// var a = document.getElementById('mani').innerHTML = "Hello";
// document.write(a);

// var b = document.getElementById('mani').innerHTML;
// console.log(b);

// var b = document.getElementById('mani').innerText;
// console.log(b);

// function clicked()
// {
//     // alert("Button clicked");
//     // document.write("Button clicked");
//     document.getElementById("mani").style.background = "red";
//     console.log("Button clicked");
// }

// window.onload = function()
// {
//     document.getElementById("mani").style.background = "red";
// }

btn.addEventListener("click", function() {
    this.style.backgroundColor = "red";
    console.log("ckick hua");
  });

// Arrow function
// summ = (a,b)=>{
//     return a+b;
// }

// SetTimeout and setintervals

fun = ()=>
{
    console.log("Time pura hua");
    document.getElementById("btn").innerText = "Click ho gaya";
    document.getElementById("mani").style.background = "red";
    document.getElementById("para").innerText = "Kaam pura hua";
}

// setTimeout(fun, 2000);/
setInterval(fun, 2000);