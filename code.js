const plusFreiend = document.querySelector('.plus_friend');
const recommend = document.querySelector('.recommend');
const blueBtn = document.querySelector('.blue_btn');
const followBtn = document.querySelector('.follow');
const plusTriangle = document.querySelector('.fas fa-caret-down');
const changeFollow = document.querySelector('.change_follow');
const followPopup = document.querySelector('.follow_popup');
const cancelBtn = document.querySelector('.cancel_btn');
const followCancelBtn = document.querySelector('.follow_cancel_btn');
const followCancel = document.querySelector('.follow_cancel');
const message = document.querySelector('.message');
const post = document.querySelectorAll('.post');
const searchBox = document.querySelector('.search_box');
const search = document.querySelector('.search');
const searchImg = document.querySelector('.search_img');
const searchWord = document.querySelector('.search_word');
const postNavBox1 = document.querySelector(".post_nav_box1");
const postNavBox2= document.querySelector(".post_nav_box2");
const searchBackground = document.querySelector(".search_background");

plusFreiend.addEventListener('click',()=>{
    
    recommend.classList.toggle('active');
})



followBtn.addEventListener('click',()=>{
  followBtn.classList.toggle('remove');
  message.classList.toggle('active');
  changeFollow.classList.toggle('active');
  plusFreiend.style.cssText=" border: solid 1px #dbdbdb; color: black; background-color: white;"; 
})

changeFollow.addEventListener('click', ()=>{
  followPopup.classList.toggle('active');
})

cancelBtn.addEventListener('click',()=>{
  followPopup.classList.remove('active');
})

followCancelBtn.addEventListener('click', ()=>{
  followPopup.classList.remove('active');
  message.classList.remove('active');
  followBtn.classList.remove('remove');
  changeFollow.classList.remove('active');
  plusFreiend.style.cssText=" border: none; color:white; background-color: #0095f6;"
})

followCancel.addEventListener('click',()=>{
  followPopup.classList.remove('active');
})

searchBox.addEventListener('click',()=>{
  if(search.value==""){
    searchWord.style.cssText = "right: 70px"
  } else{
    searchWord.style.color = "white";
  }
  search.style.cssText = "background-position: 6px 8px;  text-align: left;";
  searchImg.style.cssText = "left:0;";
  searchBox.style.cssText = "z-index: 4;";
  searchBackground.style.cssText = "display: block";
})

searchBackground.addEventListener('click',()=>{
  searchBackground.style.cssText = "display: none";
  searchImg.style.cssText = "left:70px;";
  searchWord.style.cssText = "right: 0";
  search.value ="";
})

search.addEventListener('keydown',()=>{
  searchWord.style.color = "white";
  
})

postNavBox1.addEventListener('click', ()=>{
  postNavBox2.classList.remove('highlight');
  postNavBox1.classList.remove('highlight');
  

})

postNavBox2.addEventListener('click', ()=>{
  
  postNavBox1.classList.add('highlight');
  postNavBox2.classList.add('highlight');

})


