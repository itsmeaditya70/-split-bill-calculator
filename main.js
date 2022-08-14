

function result(){

    let amount = document.getElementById('amount').value;

    let person = document.getElementById('person').value;

    if(amount=='' & person == ''){
        document.getElementById("resultArea").innerHTML= "<h5>Please fill all the fields</h5>";
        return false;
    }else{

    let amountToPay = amount/person;
    let res = amountToPay.toFixed(2) + " &#8377";
    document.getElementById("resultArea").innerHTML= "<h4>Each person has to pay :</h4> "+ res;
    return false;
    }


        
    // showResult.innerHTML = res;

//    document.write(res);

};


