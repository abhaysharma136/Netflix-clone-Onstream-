//diplay hidden Question1
var para1=document.getElementById('Answer1');
    var para2=document.getElementById('Answer2');
    var para3=document.getElementById('Answer3');
    var para4=document.getElementById('Answer4');
function Display1(){
    if(para1.style.display!="none"){
        para1.style.display="none";
    }
    else{
        para1.style.display="block";
        para2.style.display="none";
        para3.style.display="none";
        para4.style.display="none";
    }
  }
  function Display2(){
    
    if(para2.style.display!="none"){
        para2.style.display="none";
    }
    else{
        para2.style.display="block";
        para1.style.display="none";
        para3.style.display="none";
        para4.style.display="none";
    }
  }
  function Display3(){
    
    if(para3.style.display!="none"){
        para3.style.display="none";
    }
    else{
        para3.style.display="block";
        para1.style.display="none";
        para2.style.display="none";
        para4.style.display="none";
    }
  }
  function Display4(){
    
    if(para4.style.display!="none"){
        para4.style.display="none";
    }
    else{
        para4.style.display="block"
        para1.style.display="none";
        para3.style.display="none";
        para2.style.display="none";
    }
  }



  var Subscriber_Details={
    id:1,
    name:'Abhay Sharma',
    Email_Address:'abhaysharmajr@gmail.com',
    Password:"12345678as",
    };

    var SignUp_button=document.getElementsByClassName('btn-signIn-btn')[0];
 
    SignUp_button.addEventListener('click',function(){
        NewAccount();
    })
    function NewAccount(){
        var Entered_Email=document.getElementById('email').value;
        console.log(Entered_Email);
        if(Entered_Email!==Subscriber_Details.Email_Address&&Entered_Email!==""){
            var myForm=document.getElementById('myForm');
            myForm.setAttribute('action','registrationPage1.html');
        }
        else if(Entered_Email==""){
            alert('Email is required');
        }
        else{
            alert('Entered email is allready registered with us.Please Enter another email.');
        } 
    }



