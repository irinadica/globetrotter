

$(document).ready(function()
{
    
    $(".rm1").hide();
    function mq(x){
        if(x.matches)
            {
                
                $(document).on('click','.btn1',function()
                {

                    var btnText = $(".btn1").text();
                    if (btnText === "Read More") 
                    {
                        $(".rm1").show();
                        $("#post1").css({"height": "auto"});
                        $("#p1").css({"flex-direction":"column"});
                        $(".btn1").text("Read less");
                    } 
                    else 
                    {
                        $(".rm1").hide();
                        $("#post1").css({"height": "auto"});
                        $("#p1").css({"flex-direction":"row"});
                        $(".btn1").text("Read More");
                    }
                    
                });
            }
        else
            {
                $(document).on('click','.btn1',function()
                {

                    var btnText = $(".btn1").text();
                    if (btnText === "Read More") 
                    {
                        $(".rm1").show();
                        $("#post1").css({"height": "auto"});
                        $(".btn1").text("Read less");
                    } 
                    else 
                    {
                        $(".rm1").hide();
                        $("#post1").css({"height": "auto"});
                        $(".btn1").text("Read More");
                    }
                    
                });
            }
    }

    var x=window.matchMedia("(max-width:700px)");
    
    mq(x);
    x.addListener(mq);

    $(".rm2").hide();
    function mq2(y)
    {
        if(x.matches)
            {
                
                
                $(document).on('click','.btn2',function()
                {
                    var btnText = $(".btn2").text();
                    if (btnText === "Read More") 
                    {
                        $(".rm2").show();
                        $("#post2").css({"height": "auto"});
                        $("#p2").css({"flex-direction":"column"});
                        $(".btn2").text("Read less");
                    } 
                    else 
                    {
                        $(".rm2").hide();
                        $("#post2").css({"height": "auto"});
                        $("#p2").css({"flex-direction":"row"});
                        $(".btn2").text("Read More");
                    }
                    
                });
            }
        else
            {
                
                $(document).on('click','.btn2',function()
                {
                    var btnText = $(".btn2").text();
                    if (btnText === "Read More") 
                    {
                        $(".rm2").show();
                        $("#post2").css({"height": "auto"});
                        $(".btn2").text("Read less");
                    } 
                    else 
                    {
                        $(".rm2").hide();
                        $("#post2").css({"height": "auto"});
                        $(".btn2").text("Read More");
                    }
                    
                });
            }
    }
    
    var y=window.matchMedia("(max-width:700px)");
    mq2(y);
    y.addListener(mq2);


    $(".rm3").hide();
    function mq3(b){
        if(b.matches)
            {
                
                $(document).on('click','.btn3',function()
                {

                    var btnText = $(".btn3").text();
                    if (btnText === "Read More") 
                    {
                        $(".rm3").show();
                        $("#post3").css({"height": "auto"});
                        $("#p3").css({"flex-direction":"column"});
                        $(".btn3").text("Read less");
                    } 
                    else 
                    {
                        $(".rm3").hide();
                        $("#post3").css({"height": "auto"});
                        $("#p3").css({"flex-direction":"row"});
                        $(".btn3").text("Read More");
                    }
                    
                });
            }
        else
            {
                $(document).on('click','.btn3',function()
                {

                    var btnText = $(".btn3").text();
                    if (btnText === "Read More") 
                    {
                        $(".rm3").show();
                        $("#post3").css({"height": "auto"});
                        $(".btn3").text("Read less");
                    } 
                    else 
                    {
                        $(".rm3").hide();
                        $("#post3").css({"height": "auto"});
                        $(".btn3").text("Read More");
                    }
                    
                });
            }
    }

    let b=window.matchMedia("(max-width:700px)");
    mq3(b);
    b.addListener(mq3);
    


    $(".rm4").hide();
    function mq4(a){
        if(a.matches)
            {
                
                $(document).on('click','.btn4',function()
                {

                    var btnText = $(".btn4").text();
                    if (btnText === "Read More") 
                    {
                        $(".rm4").show();
                        $("#post4").css({"height": "auto"});
                        $("#p4").css({"flex-direction":"column"});
                        $(".btn4").text("Read less");
                    } 
                    else 
                    {
                        $(".rm4").hide();
                        $("#post4").css({"height": "auto"});
                        $("#p4").css({"flex-direction":"row"});
                        $(".btn4").text("Read More");
                    }
                    
                });
            }
        else
            {
                $(document).on('click','.btn4',function()
                {

                    var btnText = $(".btn4").text();
                    if (btnText === "Read More") 
                    {
                        $(".rm4").show();
                        $("#post4").css({"height": "auto"});
                        $(".btn4").text("Read less");
                    } 
                    else 
                    {
                        $(".rm4").hide();
                        $("#post4").css({"height": "auto"});
                        $(".btn4").text("Read More");
                    }
                    
                });
            }
    }

    let a=window.matchMedia("(max-width:700px)");
    mq4(a);
    a.addListener(mq4);
    
    
});
