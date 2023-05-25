function convert(id){
    const income=document.getElementById(id);
  
    const incomeString=income.value;
    const value=parseFloat(incomeString);
    income.value='';
    return value;
}


document.getElementById('btn').addEventListener('click',function(){

 
    const totalIncome=convert('income');
    console.log(totalIncome);
    console.log(typeof totalIncome);


    const food=convert('food');
    const rent=convert('rent');
    const cloth=convert('cloth');

    console.log(food);
    console.log(rent);
    console.log(cloth);

    const totalExpense=food+rent+cloth;

    const expense=document.getElementById('expense');
    expense.innerText=totalExpense;

    const balValue=totalIncome-totalExpense;

    console.log(balValue);

    const balance=document.getElementById('balance');
    balance.innerText=balValue;


 

})

document.getElementById('save-btn').addEventListener('click',function(){


    const save=convert('save');
    const savePercentage=save/100;
    console.log(savePercentage);

    const balance=document.getElementById('balance');
    const balanceString= balance.innerText;
    const balanceTotal=parseFloat(balanceString);

    console.log("total ",balanceTotal);

     
    const saveAmount=balanceTotal*savePercentage;
    console.log(saveAmount);

 


   const remBalance=balanceTotal-saveAmount;
   console.log(remBalance);
    const rem=document.getElementById('remaining-balance');
    rem.innerText=remBalance;

    const savingAmount=document.getElementById('saving-amount');
    savingAmount.innerText=saveAmount;



})