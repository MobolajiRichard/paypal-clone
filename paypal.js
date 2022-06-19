let btn = document.querySelector("#menu");
let sidebar = document.querySelector(".sidebar")
let icon = document.querySelector(".icon")
let icon1 = document.querySelector(".icon1")
let icon2 = document.querySelector(".icon2")
let icon3 = document.querySelector(".icon3")
let btn2 = document.querySelector("#personal");
let navtoggle = document.querySelector(".nav-toggle");


btn.onclick = function(){
    sidebar.classList.toggle("active");
    icon.classList.toggle("active")
    icon1.classList.toggle("active")
}


btn2.onmouseenter = function(){
    icon2.classList.toggle("active");
    icon3.classList.toggle("active")
}





    $("#personal").mouseenter(function(){
        $(".nav-toggle").slideToggle(350);
    })

$(".box-icon").click(function(){
        $(".nav-toggle").slideUp()
        icon2.classList.toggle("active");
        icon3.classList.toggle("active")
})
  

    