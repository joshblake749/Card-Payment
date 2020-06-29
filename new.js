
document.getElementById('expy').onkeyup = function(){
    document.getElementById('expire-year').innerHTML = '/'+ this.value;   
}
/*document.getElementById('cardnumber').onkeyup = function() {
 document.getElementById('crdnum').innerHTML = this.value;   
}*/
document.getElementById('inpName').onkeyup = function() {
 document.getElementById('name').innerHTML = this.value;   
}

   let one = document.getElementById('cardnumber1');
   let two = document.getElementById('cardnumber2');
   let three = document.getElementById('cardnumber3');
   let four = document.getElementById('cardnumber4');
   function cardnum(){
       document.getElementById('crdnum').innerHTML = one.value +' '+ two.value +
       ' '+ three.value +' '+ four.value;
   }
   function cardtype(){
       let cardchoice = document.getElementById('crdType');
       let choice = cardchoice.options[cardchoice.selectedIndex].value;
       let findit = document.getElementById('types')
       if(choice == 'Visa'){
        findit.innerHTML = '<img src = https://pngimg.com/uploads/visa/visa_PNG25.png style ="width:50px; bottom:5px; left:240px; position:absolute;" a>';
       }
       if(choice == 'Mastercard'){
        findit.innerHTML = '<img src = https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png style ="width:50px; bottom:5px; left:240px; position:absolute;" a>';
       }
   }
function month(){
    let chooser = document.getElementById('exp');
    let find = chooser.options[chooser.selectedIndex].value;
    if (find == '01'){
        document.getElementById('expire-month').innerHTML = '01';
    }
    if (find == '02'){
        document.getElementById('expire-month').innerHTML = '02';
    }
    if (find == '03'){
        document.getElementById('expire-month').innerHTML = '03';
    }
    if (find == '04'){
        document.getElementById('expire-month').innerHTML = '04';
    }
    if (find == '05'){
        document.getElementById('expire-month').innerHTML = '05';
    }
    if (find == '06'){
        document.getElementById('expire-month').innerHTML = '06';
    }
    if (find == '07'){
        document.getElementById('expire-month').innerHTML = '07';
    }
    if (find == '08'){
        document.getElementById('expire-month').innerHTML = '08';
    }
    if (find == '09'){
        document.getElementById('expire-month').innerHTML = '09';
    }
    if (find == '10'){
        document.getElementById('expire-month').innerHTML = '10';
    }
    if (find == '11'){
        document.getElementById('expire-month').innerHTML = '11';
    }
    if (find == '12'){
        document.getElementById('expire-month').innerHTML = '12';
    }

}
function credDeb(){
    let which = document.getElementById('deb');
    let choice = which.options[which.selectedIndex].value;
    if(choice == 'credit'){
        document.getElementById('debcred').innerHTML = 'Credit';
    }
    if(choice == 'debit'){
        document.getElementById('debcred').innerHTML = 'Debit';
    }
}