
let images = document.querySelectorAll('.slid')


function toggleClass(even){

    let target= even.currentTarget
    target.classList.toggle("active")
}


images.forEach(img=> img.addEventListener(("click"),toggleClass))


$(document).ready( function(){
    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-times");
        $('nav').toggleClass('nav-toggle')
    })
})