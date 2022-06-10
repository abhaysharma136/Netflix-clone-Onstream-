var Subscriber_Details={
    id:1,
    name:'Abhay Sharma',
    Email_Address:'abhaysharmajr@gmail.com',
    Password:"12345678as",
    };

    var click_button=document.getElementsByClassName('SignIn_Button')[0];
    
    click_button.addEventListener('click',function(){
        Validate();
    })





    
    function Validate(){
        
        var Input_Email=document.getElementById('email_address').value;
        var Input_Password=document.getElementById('Account-password').value;
        console.log(Input_Email);
        if(Subscriber_Details.Email_Address==Input_Email&&Subscriber_Details.Password==Input_Password){
            var myForm=document.getElementById('myForm');
            myForm.setAttribute('action','HomePage.html');
        }else if(Subscriber_Details.Email_Address==Input_Email&&Subscriber_Details.Password!==Input_Password){
            alert('Wrong Password');
        }else if(Subscriber_Details.Password==Input_Password&&Subscriber_Details.Email_Address!==Input_Email){
            alert('This Email Address is not Registered with us');
        }
        else{
            alert('Email and Password do not match');
        }
    }