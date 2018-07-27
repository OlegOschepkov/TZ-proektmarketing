'use strict';

(function(){
  var titleBlock = document.querySelector(".with-script");
  console.log(titleBlock);
  titleBlock.addEventListener('click', function () {
    var hobby = document.querySelector(".container__aboutyou--hobby");
    console.log(hobby);
    hobby.classList.remove("visually-hidden");
  })
  titleBlock.addEventListener('dblclick', function () {
    var photo = document.querySelector(".container__aboutyou--photo");
    console.log(photo);
    photo.classList.remove("visually-hidden");
  })

  var textArea = document.querySelector("#textarea");
  textArea.addEventListener('keydown', function () {
    if (textArea.scrollTop > 0) {
      textArea.style.height = textArea.scrollHeight + 'px';
    }
  })
})();
