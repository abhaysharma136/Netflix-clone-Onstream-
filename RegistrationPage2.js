var Subscriber_Details={
    id:1,
    name:'Abhay Sharma',
    Email_Address:'abhaysharmajr@gmail.com',
    Password:"12345678as",
    };

//Registration Page3
var Registration2_Next_button=document.getElementById('Next-button');
Registration2_Next_button.addEventListener('click',function(){
    Validate();
})

function Validate(){
    var Entered_Email=document.getElementById('email-id').value;
    var Entered_Password=document.getElementById('user-password').value;
    var Password_required=document.getElementById('password-alert');
    if(Subscriber_Details.Email_Address!==Entered_Email&&Entered_Password!==""){
        var myForm=document.getElementById('myForm');
        myForm.setAttribute('action','registrationPage3.html');
    }
    else if(Subscriber_Details.Email_Address!==Entered_Email&&Entered_Password==""){
        
Password_required.innerText='Password is required';
        
    }
    else{
        alert('Please Enter another Email id');
    }
}

