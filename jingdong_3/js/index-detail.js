window.addEventListener("load", function () {
  //选
  var choose1 = document.querySelector(".choose1");
  var choose2 = document.querySelector(".choose2");
  var pics1 = document.querySelector(".pic-r1");
  var pics2 = document.querySelector(".pic-r2");
  choose1.addEventListener("click", () => {
    pics1.style.display = "block";
    pics2.style.display = "none";
    choose1.className = "choose1 active2";
    choose2.className = "choose2";
  });
  choose2.addEventListener("click", () => {
    pics2.style.display = "block";
    pics1.style.display = "none";
    choose2.className = "choose2 active2";
    choose1.className = "choose1";
  });
});
