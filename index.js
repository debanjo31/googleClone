$(document).ready(function(){

     
   
    $(".out").click(function () {
        $("#hidden").fadeOut("100");
        $(".fade").css("opacity", "1");
        $("body").css("overflow-y", "visible");
    });
    
    $(".nav-icon").click(function () {
        $("#hidden").fadeIn("1500");
        $(".fade").css("opacity", "0.3");
        $("body").css("overflow-y", "hidden");
        $("body").css("z-index", "1000");
    });
    
    window.onload(alert("This is just a clone of google homePage."));
    
  
    });
  
     
    
//    //need to create a function that toogle as the input is been clicked between white and black
      
//         $("input[type='checkbox']").click(function(e){
        
//           if($(this).is(":checked")){  
//             $("body").get(0).style.setProperty("--white","rgb(255, 255, 255)")
//             $("body").get(0).style.setProperty("--black","rgb(0, 0, 36)")
//           }
//           else if($(this).is(":not(:checked)")){
//             $("body").get(0).style.setProperty("--white","rgb(255, 255, 255)")
//             $("body").get(0).style.setProperty("--black","rgb(0, 0, 0)")
//           }
          
//         }
//         );  
