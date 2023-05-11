$(document).ready(function(){
$(window).scroll(function(){
if(this.scrollY>20){
$('.navbar').addClass("sticky");
}else{
    $('.navbar').removeClass("sticky");
}
if(this.scrollY>50){
    $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
    
})

});
$('.scroll-up-btn').click(function(){
$('html').animate({scrollTop:0});

});

var typed=new Typed(".work",{
    strings:["Developer","Freelancer","Story-Writer"],
    typeSpeed:100,
    backSpeed:80,
    loop:true
});

// This is for tail cursor
// var body = document.querySelector(".home");

//       document.addEventListener("mousemove", (e) => {
//         var elem = document.createElement("div");
//         elem.setAttribute("class", "trail");
//         elem.setAttribute(
//           "style",
//           `left: ${e.clientX - 10}px; top: ${e.clientY - 10}px`
//         );
//         elem.onanimationend = () => {
//           elem.remove();
//         };
//         body.insertAdjacentElement("beforeend", elem);
//       });