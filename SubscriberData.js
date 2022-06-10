var Subscriber_Details={
id:1,
name:'Abhay Sharma',
Email_Address:'abhaysharmajr@gmail.com',
Password:"12345678as",
};
 

function CheckData(){
    var email_check=document.getElementById('email').value;
    if(email_check!==Subscriber_Details.Email_Address){
        alert('This Email is allredy registered with us. Please Login!');
    }else{

    }
}