const btn = document.querySelector('.btn1');

btn.addEventListener('click', presentation)
// titre.addEventListener('mouseenter' , presentation)
// document.addEventListener('keydown' , presentation)

function presentation(){
 
    // titre.classList.add('taille-txt')
    btn.classList.toggle('active')
}