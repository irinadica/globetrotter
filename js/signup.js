
var btn=document.querySelector("#submit");
var form=document.querySelector("#form");
form.addEventListener('submit', (e)=>
    {
        e.preventDefault(); 
        var username=document.getElementById('username');
        var password=document.getElementById('pass');
        var email=document.getElementById('email');
        var fullname=document.getElementById('fullname');
        var phone=document.getElementById('phone');
        var emailregex=/^\w+([._-]?\w)*@\w+([._-]?\w+)*(\.\w{2,3})$/;
        var errors=document.getElementsByClassName("errors");

        //username validation EMPTY, LENGTH, ISNAN
        for(let i=0;i<errors.length;i++)
        {  
            if((username.value===null) || (username.value==="")) //EMPTY
                {
                    errors[i].innerHTML="Please enter values in the field";
                    username.style.border="2px solid #FF0000";
                    i++;
                }
            else
                if(username.value.length<8) //LENGTH
                    {
                    
                        errors[i].innerHTML="Not enough characters. Please try again!";
                        username.style.border="2px solid #FF0000";
                        i++;
                    }
                else
                        if(!isNaN(username.value)) //ISNAN
                        {
                            
                            errors[i].innerHTML="Not allowed to be only numbers. Please try again!";
                            username.style.border="2px solid #FF0000";
                            i++;
                        }
                        else
                            var result1=true;

                if((password.value===null) || (password.value===""))
                {
                    
                    errors[i].innerHTML="Please enter values in the field";
                    password.style.border="2px solid #FF0000";
                    i++;
                }
                else
                    if((password.value.length<8) || (password.value.length>16) )
                        {
                            
                            errors[i].innerHTML="Not enough characters. Please try again!";
                            password.style.border="2px solid #FF0000";
                            i++;
                        }
                    else
                        var result2=true;
                        
                if((email.value===null) || (email.value==="")) //EMPTY
                    {
                            
                            errors[i].innerHTML="Please enter values in the field";
                            email.style.border="2px solid #FF0000";
                            i++;
                    }
                else
                    if(!(emailregex.test(email.value)))
                        {
                            
                            errors[i].innerHTML="Email invalid. Please try again!";
                            email.style.border="2px solid #FF0000";
                            i++;
                        }
                    else
                        var result3=true;
                    
                if((fullname.value===null) || (fullname.value===""))
                {
                    
                    errors[i].innerHTML="Please enter values in the field!";
                    fullname.style.border="2px solid #FF0000";
                    i++;
                }
                else
                    var result4=true;
                
                if((phone.value===null) ||(phone.value===""))
                    {
                        
                        errors[i].innerHTML="Field empty. Try again!";
                        phone.style.border="2px solid #FF0000";
                        i++;
                    }
                else
                    {
                        var regex=/^0\d/;
                        var option=regex.test(phone.value);
                        if(option && (phone.value.length==11))
                            var result5=true;
                        else
                            {
                                
                                errors[i].innerHTML="Not enough numbers. Try again!";
                                phone.style.border="2px solid #FF0000";
                                i++;
                            }
                    }
           
         }
            if((result1===true)&&(result2===true)&&(result3===true)&&(result4===true)&&(result5===true))
                   {
                        sessionStorage.setItem("cname",fullname.value);
                        window.location.href='afterhome.html';
                   } 
            

        }
            
);

