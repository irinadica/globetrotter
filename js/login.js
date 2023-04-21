
var btn=document.querySelector("#submit");
var form=document.querySelector(".login");
form.addEventListener('submit', (e)=>
    {
        e.preventDefault(); //doesn't let the form to resubmit
        var username=document.getElementById('username');
        var password=document.getElementById('pass');
        var email=document.getElementById('email');
        //username validation EMPTY, LENGTH, ISNAN
        if((username.value===null) || (username.value==="")) //EMPTY
            {
                var error=document.querySelector('#errun');
                error.innerHTML="Please enter values in the field";
                username.style.border="2px #FF0000";
            }
        else
            if(username.value.length<8) //LENGTH
                {
                    var error=document.querySelector('#errun');
                    error.innerHTML="Not enough characters. Please try again!";
                }
            else
                    if(!isNaN(username.value)) //ISNAN
                    {
                        var error=document.querySelector('#errun');
                        error.innerHTML="Not allowed to be only numbers. Please try again!";
                        username.style.border="2px solid #FF0000";
                    }
                    else
                        var result1=true;

            if((password.value===null) || (password.value===""))
            {
                var error=document.querySelector('#errpass');
                error.innerHTML="Please enter values in the field";
                password.style.border="2px solid #FF0000";
            }
            else
                if((password.value.length<8) || (password.value.length>16) )
                    {
                        var error=document.querySelector('#errpass');
                        error.innerHTML="Not enough characters. Please try again!";
                        password.style.border="2px solid #FF0000";
                    }
                else
                    var result2=true;
                    
            if((result1===true)&&(result2===true))
                    {   
                        
                        sessionStorage.setItem("cname",username.value);
                        window.location.href='afterhome.html';
                    } 

        }
            
);

