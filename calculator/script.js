getvalues = function(){
        number1 = document.getElementById("input1").value;
        number2 = document.getElementById("input2").value;

        resultobject = {
            "number1": number1,
            "number2": number2        
        }
        return resultobject;
}
    

    showresult = function(result){

        resultElement = document.getElementById("result");

        resultElement.innerText = result;
        
    }




plusbutton = document.getElementById("plusbutton");

 plusoperation = function(){
       numbervalues = getvalues();
        sum = parseInt(numbervalues.number1) + parseInt(numbervalues.number2);
        showresult(sum);
        

        
};

plusbutton.addEventListener("click", plusoperation);

minusbutton = document.getElementById("minusbutton");
 minusoperation = function(){

        numbervalues = getvalues();
        difference = parseInt(numbervalues.number1) - parseInt(numbervalues.number2);

        showresult(difference);

};
minusbutton.addEventListener("click", minusoperation);


mulbutton = document.getElementById("mulbutton");
muloperation = function(){
     numbervalues = getvalues();
     multiplication = parseInt(numbervalues.number1) * parseInt(numbervalues.number2);

     showresult(multiplication);
}
mulbutton.addEventListener("click", muloperation);

divbutton = document.getElementById("divbutton");
divoperation = function(){
    numbervalues = getvalues();
    division = parseInt(munbervalues.number1)/parseInt(numbervalues.number2);
    showresult(division);
}
divbutton.addEventListener("click", divoperation);