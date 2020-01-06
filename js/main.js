// Реализация раскрывающегося меню
let navBtn = document.getElementById("logo");
let boxMenu = document.querySelector(".b-toggle");

navBtn.addEventListener("click", function() {
  this.classList.toggle("nav-button_active");
  boxMenu.classList.toggle("expanded");
});

// Реализация смены фона кнопок блока gallery
let btn = document.getElementById("btn-project");
btn.addEventListener("mouseover", function(event) {
  let target = event.target;
  if (target.tagName != "BUTTON") {
    return;
  } else target.classList.add("btn-active");
});
btn.addEventListener("mouseout", function(event) {
  let target = event.target;
  target.classList.remove("btn-active");
});
var sum = function(a, b) {
  return function() {
    console.log(a + b);
  };
};
// Реализация наведения курсора на блоки gallery и news
let activeBox = function(img, dounBlock, dounBlockTitle, dounBlockSubTitle) {
  return function() {
    this.querySelector(img).style.opacity = ".2";
    this.querySelector(dounBlock).style.backgroundColor = "#352f2d";
    this.querySelector(dounBlockTitle).style.color = "#ffffff";
    this.querySelector(dounBlockSubTitle).style.color = "#c7b299";
  };
};
let inactiveBox = function(img, dounBlock, dounBlockTitle, dounBlockSubTitle) {
  return function() {
    this.querySelector(img).style.opacity = "";
    this.querySelector(dounBlock).style.backgroundColor = "";
    this.querySelector(dounBlockTitle).style.color = "";
    this.querySelector(dounBlockSubTitle).style.color = "";
  };
};
function galleryElemActive() {
  this.querySelector(".link").style.display = "inline-block";
  this.querySelector(".lupa").style.display = "inline-block";
}
function galleryElemInactive() {
  this.querySelector(".link").style.display = "";
  this.querySelector(".lupa").style.display = "";
}
function newsElemActive() {
  this.querySelector(".number").style.backgroundColor = "#c7b199";
  this.querySelector(".day").style.backgroundColor = "#a48d71";
  this.querySelector(".news-block ").style.border = "1px solid #352f2d";
}
function newsElemInactive() {
  this.querySelector(".number").style.backgroundColor = "";
  this.querySelector(".day").style.backgroundColor = "";
  this.querySelector(".news-block ").style.border = "";
}
let boxfoto = document.querySelectorAll(".box_foto");
for (let i = 0; i < boxfoto.length; i++) {
  boxfoto[i].addEventListener(
    "mouseover",
    activeBox(
      ".box_foto-img",
      ".description",
      ".description_titile",
      ".description_subtitile"
    )
  );
  boxfoto[i].addEventListener(
    "mouseout",
    inactiveBox(
      ".box_foto-img",
      ".description",
      ".description_titile",
      ".description_subtitile"
    )
  );
  boxfoto[i].addEventListener("mouseover", galleryElemActive);
  boxfoto[i].addEventListener("mouseout", galleryElemInactive);
}
let newsFoto = document.querySelectorAll(".news-foto");
for (let i = 0; i < newsFoto.length; i++) {
  newsFoto[i].addEventListener(
    "mouseover",
    activeBox(
      ".news_foto-img",
      ".news-block",
      ".news-block_title",
      ".news-block_subtitle"
    )
  );
  newsFoto[i].addEventListener(
    "mouseout",
    inactiveBox(
      ".news_foto-img",
      ".news-block",
      ".news-block_title",
      ".news-block_subtitle"
    )
  );
  newsFoto[i].addEventListener("mouseover", newsElemActive);
  newsFoto[i].addEventListener("mouseout", newsElemInactive);
}
// Запуск видео по нажатию на кнопку
let video = document.getElementById("video");
let btnPlay = document.getElementById("icon-play");
btnPlay.addEventListener("click", function() {
  video.play();
  video.setAttribute("controls", "");
  let videoBox = document.querySelector(".video_box");
  videoBox.style.backgroundColor = "transparent";
  let videoWraper = document.querySelector(".video_wraper");
  videoWraper.style.display = "none";
});
