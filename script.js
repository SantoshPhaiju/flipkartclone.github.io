let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}




let searchTxt = document.getElementById('search');

searchTxt.addEventListener("input", function(e){
  // console.log(searchTxt.value);
  let inputval = searchTxt.value;
  let cardContainer = document.getElementsByClassName('cardContainer');
  Array.from(cardContainer).forEach(function(element, index){
    let heading = document.getElementsByTagName("h2")[index].innerText;
    console.log(element);
  console.log(heading);
  if(heading.includes(inputval)){
    element.style.display = 'block';
  }else{
    element.style.display = 'none';
  }
  
  
    // console.log(element, index);
  });
});


// Login and singup modal
let loginbtn = document.getElementById('loginbtn');
let signupbtn = document.getElementById('signupbtn');
let modal = document.querySelector('.modal');

loginbtn.addEventListener('click', function(e){
    // console.log("Button is clicked.", e.target);
    modal.classList.add("show");
    modal.classList.remove("hide");

    // console.log(modal);
    e.preventDefault();
});


let closebtn = document.getElementById('closemodal');

closebtn.addEventListener("click", function(e){
  modal.classList.remove("show");
  modal.classList.add("hide");

  e.preventDefault();
})


