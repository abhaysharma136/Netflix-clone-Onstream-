var selected_option1=document.getElementById('email');
var selected_option2=document.getElementById('Text');
var button=document.getElementById('Send-button');
var form=document.getElementById('form');
console.log(selected_option1);

selected_option1.addEventListener('click',function(){
    if(selected_option1.checked===true){
        var otp_number= document.getElementById('number_otp_div');
        otp_number.style.display='none';
        var otp_email=document.getElementById('email_otp_div');
        otp_email.style.display='block';
        button.setAttribute('value','Email Me');
        form.setAttribute('action','Email-Sent.html');
    }
})

selected_option2.addEventListener('click',function(){
    if(selected_option2.checked===true){
        var otp_number= document.getElementById('number_otp_div');
        otp_number.style.display='block';
        var otp_email=document.getElementById('email_otp_div');
        otp_email.style.display='none';
        button.setAttribute('value','Text Me');
        form.setAttribute('action','Number-Sent.html');
    }
})