// SELECTORS ==============================
let previewImgs = document.querySelectorAll(".preview-img");
let imgCaptions = document.querySelectorAll(".img-caption");
let modalBtn = document.querySelector("#modal-btn");
let popImg = document.querySelector("#pop-img");
let popTitle = document.querySelector("#popModalTitle");


// ADD LISTENERS ==========================
previewImgs.forEach(function(img, i){
  img.addEventListener("click", function(event) {
    popImg.src = event.srcElement.src;
    popTitle.innerText = imgCaptions[i].innerText;
    modalBtn.click();
  });
});
