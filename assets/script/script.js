
let icon = document.querySelectorAll("i");


$(document).ready(function(){

    $(".title").on("click", function(){

        if($(".text").slideToggle()){

            $(".text").removeClass("d-none");

           icon.forEach(elem=>{
            elem.classList.toggle("rotate");
           })
        }
    
    });

});


