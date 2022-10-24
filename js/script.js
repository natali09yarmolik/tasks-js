/*for(let i=1; i<6; i++)
{
    console.log(i);
}*/
//let num=1
/*while(num<6)
{
    console.log(num);
    num++;
}*/
 /*do {
     console.log(num);
     num++;
 }
 while(num<6)*/
 /*let num = 8;
 while(num){
     console.log(num);
     num--;
 }*/

 /*let num = 0;
 while(num<3)
 {
     console.log(`Число: ${num}`);
     num++;
 }*/
/*firstFor: for( let num=0; num<2; num++ ){
 for(let size=0; size<3;size++){
     console.log(size);
     if(size==1) break firstFor;
 }
}*/

// ФУНКЦИИ
 /*function showName(){
     console.log('Вася!');
 }
setTimeout(showName,0);
console.log('Коля!');*/

/*'use strict'
let showMessage;
if(2>1)
{
    showMessage =()=>console.log('Сообщение');
}
showMessage();*/

/*'use strict'
let showMessage;
if(2>1)
{
    showMessage =function ()
    {console.log('Сообщение');}
}
showMessage();*/

/*function hello(name){
    console.log(name);
    
    console.log(`Привет, ${name}`);
}
let a = prompt('Введите имя');
hello(a);*/

/*function chackAge(age){
    (age>18)? true: confirm('Родители разрешили?');
}

function chackAge(age){
    return (age>18) || confirm('Родители разрешили?');
}
*/

/*function min(a,b){
    (a<b) ? a :  b;
}*/
/*let a, b;
function min(a, b){
    if(a<b){return a;}
    return b;
} 
console.log(min(1, 1));*/

/*let x = prompt('Введите число ');
let n = prompt('Введите степень больше 1');

function pow(x , n){
    if(n<=0)
    {return console.log('Введено не верная степень');}
    
        return Math.pow(x,n);
  }
  console.log(pow(x, n));*/

  //перевернуть число задом на перед
   //let new =""; 
  /* let num = prompt('Введите число');
    let num_new="";
  
  function reverse_a_number(n){
     
      let x = num.length;
      
      for(let i=x-1; i>=0; i--){
          
          num_new+=num[i];
         

      }
     
      return num_new;

  }
  
  console.log(`Обратное число, ${reverse_a_number(num)}`);*/
  /*
  function checkCashRegister(price, cash, cid) {
    let change1;
   let obj={status:null, change:[]};
    let arrNew=[];


    var register = cid.reduce(
        function(acc, curr) {
         acc.total += curr[1];
         acc[curr[0]] = curr[1];
         return acc;
       },
       { total: 0 }
       );
   
    change1=cash-price;
   
    if(sum.total>change1)
    {let n=0;
    let mas=[];
    let a = cid.reduceRight(function(obj, item){
     
     if(item[1]>=0 && change1>=count(item[0]))
        {let num=0;
        
          do{
            
            change1=change1-count(item[0]);
            
            change1=+change1.toFixed(2);
            num+=count(item[0]);
            
            if(item[1]<=num)
            {break;}
          }
          while(change1>=count(item[0]));
          
          mas[n]=[item[0],num];
          
          n++; 
        }
        
        obj.change=mas;
        return obj;
    },{status: "OPEN"});
    
    return a;
    }
  else if (sum.total<change1)
    {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    else if(sum.total===change1)
    {
       return {status: "CLOSED", change: cid};
    }
    
 
  }
  
  function count(x)
  {let y;
    switch(x){
      case 'PENNY': y=0.01;break;
      case "NICKEL": y=0.05;break;
      case "DIME": y=0.1;break;
      case "QUARTER": y=0.25;break;
      case "ONE": y=1;break;
      case "FIVE": y=5;break;
      case "TEN": y=10;break;
      case "TWENTY": y=20;break;
      case "ONE HUNDRED": y=100;break;
    }
    return y;
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  checkCashRegister(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  */
  /*function mergeArrays(arr1, arr2) {
    let arr3=[];
    arr3=arr1.concat(arr2);
    console.log(arr3);
    console.log(arr3.sort((a,b)=> a>b ? 1 : a<b ? -1: 0));
    return arr3.sort((a,b)=> (a>b) ? 1 : (a<b) ? -1: 0);
    
  }
  mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]);*/
  
  /*function toCamelCase(str){
    let str2=[];
   let str1= str.replace(/[^a-zA-Z]+/gi, " ")
    .split(" ");
     console.log(str1[0][0]);
     str2[0]=str1[0];
for(let i=1; i< str1.length; i++)
{
    if(str1[i][0]!==str1[i][0].toUpperCase())
    {
      str2[i]=str1[i][0].toUpperCase()+str1[i].substr(1);
    }
    else{
      str2[i]=str1[i];
    }
    
}
console.log(str2.join(""));
     return str2.join(); 
    }
    toCamelCase("The_Stealth_Warrior");*/
//максимальная сумма элементов
    /*var maxSequence = function(arr){
      let summa=0;
      let summa2=0;
      let summaMax=arr[0];
      for(var i=1; i<arr.length; i++){
        if(summaMax<arr[i])summaMax=arr[i];
      }
      console.log(summaMax);
      for(let i=0; i<arr.length; i++)
      {summa=arr[i]+arr[i+1];
        let n=2;
        while(summa>0)
        {if(summa>summaMax)
          {summaMax=summa;}
             summa2=summa+arr[i+n];
             console.log(summa2, summa,arr[i+n]);
             if(summa2>summaMax)
             {summaMax=summa2;}
              console.log(summaMax);
            summa=summa2;
          n++;
         
        }
      }
      if(summaMax>0)return summaMax;
      else{return 0;}
    }
    maxSequence([-47,36,6,-4,-24,-25,-27,2,-19,-16,16,35,-47,31,-24,-30,49,37,-38,-35,18,-38,26,-25,18,-28,9,-37,-4,-43]);*/

   /* function findNb(m) {
     let n=1;
     while(m>0)
     {
      m-=Math.pow(n,3);
      n++;

     }
     if(m===0)return n-1;
     else return (-1);
  }
  console.log(findNb(91716553919377));
  findNb(91716553919377);*/

  /*function towerBuilder(nFloors) {
    let num=nFloors*2-1;
    let str="*";
    let str1=" ";
    let arr=[];
    let j=nFloors-1;
    for(let i=0; i<nFloors; i++)
    {
      
        arr[i]=str1.repeat(j)+str.repeat(num-j*2)+str1.repeat(j);
        j--;
        console.log(arr[i]);
      }
      
      return arr;
    }
    
    towerBuilder(3);
  */
 //получаем число возвращаем строку
 function expandedForm(num) {
  let str=String(num);
  let n=str.length;
  let str1=[];
  let j=0;
  for(let i=0; i<n; i++)
  {
    if(str[i]!=="0")
    {
      str1[j]=str[i] + "0".repeat(n-i-1);
      
    j++;
    }
    console.log(str1);

  }
return str1.join(" + ");
}
console.log(expandedForm(70304));
expandedForm(70304);