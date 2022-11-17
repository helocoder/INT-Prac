form1.addEventListener('submit',e=>{
    e.preventDefault();
     var centi = Number(document.getElementById('cm').value);
     alert(centi*100 + "cm") ;
})

form2.addEventListener('submit',e=>{
    e.preventDefault();
     var cel = Number(document.getElementById('cel').value);
     alert((cel*(9/5))+32 +" F");
})

