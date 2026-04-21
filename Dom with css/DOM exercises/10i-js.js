 let calculation = localStorage.getItem('calculation') || '';
 updateCalcValue();

    function updatecalculation(value)
    {
calculation += value;

 localStorage.setItem('calculation',calculation); 

updateCalcValue();}


 
 function updateCalcValue(){
    document.querySelector('.js-calculate').innerHTML=`      ${calculation}`;
 }
