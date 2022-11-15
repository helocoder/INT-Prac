
const form = document.getElementById('form');
var username=  document.getElementById('name');
var phone=  document.getElementById('phone');
var email=  document.getElementById('email');
var pass=  document.getElementById('pass');
var cpass= document.getElementById('cpass')

form.addEventListener('submit',e=>{
    e.preventDefault();
    var vali = validate();
    if(vali)
    {
        var sucess = document.getElementById('sucess').innerHTML = "sucess";
    }

})


const validate_email = (email)=>{
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
function validate()
{
    //removing blank spaces//
  const nam = username.value.trim();
  const phon = phone.value.trim();
  const mail  = email.value.trim();
  const pas = pass.value.trim();
  const cpas = cpass.value.trim();

  if(nam ==='')
  {
    alert("name cant be blank");
    return false;
  }
  else if(phon.length != 10)
  {
    alert("phone number should have 10 digit");
    return false;
  }
  else if(pas != cpas)
  {
     alert("password didnt match");
     return false;
  }
  else{
    return validate_email(mail);
  }
  
}