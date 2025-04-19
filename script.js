let wrapper = document.querySelector(".wrapper");
let imgWrapper = document.querySelector(".imgWrapper");
let secondImg = document.querySelector(".imgWrapper img");
let rangeBtn = document.querySelector("#rangeBtn");

let wrapperWidth = wrapper.clientWidth;
secondImg.style.width = wrapperWidth + "px";
console.log(wrapperWidth);

let imgChange = () => {
  let rangeValue = rangeBtn.value;
  imgWrapper.style.width = `${rangeValue}%`;
};
rangeBtn.addEventListener("input", imgChange);
imgChange();

let wrapper2 = document.querySelector(".wrapper2");
let imgWrapper2 = document.querySelector(".imgWrapper2");
let secondImg2 = document.querySelector(".imgWrapper2 img");
let rangeBtn2 = document.querySelector("#rangeBtn2");

let wrapperWidth2 = wrapper2.clientWidth;
secondImg2.style.width = wrapperWidth2 + "px";

let imgChange2 = () => {
  let rangeValue2 = rangeBtn2.value;
  imgWrapper2.style.width = `${rangeValue2}%`;
};
rangeBtn2.addEventListener("input", imgChange2);
imgChange2();

// Certificate 3
let wrapper3 = document.querySelector(".wrapper3");
let imgWrapper3 = document.querySelector(".imgWrapper3");
let secondImg3 = document.querySelector(".imgWrapper3 img");
let rangeBtn3 = document.querySelector("#rangeBtn3");

let wrapperWidth3 = wrapper3.clientWidth;
secondImg3.style.width = wrapperWidth3 + "px";

let imgChange3 = () => {
  let rangeValue3 = rangeBtn3.value;
  imgWrapper3.style.width = `${rangeValue3}%`;
};
rangeBtn3.addEventListener("input", imgChange3);
imgChange3();

// Certificate 4
let wrapper4 = document.querySelector(".wrapper4");
let imgWrapper4 = document.querySelector(".imgWrapper4");
let secondImg4 = document.querySelector(".imgWrapper4 img");
let rangeBtn4 = document.querySelector("#rangeBtn4");

let wrapperWidth4 = wrapper4.clientWidth;
secondImg4.style.width = wrapperWidth4 + "px";

let imgChange4 = () => {
  let rangeValue4 = rangeBtn4.value;
  imgWrapper4.style.width = `${rangeValue4}%`;
};
rangeBtn4.addEventListener("input", imgChange4);
imgChange4();




$(".nft-left-overlay").hover(function () {
  $(this).parents(".nft-cube").toggleClass("left");
});
$(".nft-right-overlay").hover(function () {
  $(this).parents(".nft-cube").toggleClass("right");
});


  document.querySelector(".home").addEventListener("click", () => {
    document.getElementById("home").scrollIntoView();
  });

  document.querySelector(".about").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView();
  });

  document.querySelector(".certificates").addEventListener("click", () => {
    document.getElementById("certificates").scrollIntoView();
  });

  document.querySelector(".projects").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView();
  });

  document.querySelector(".contact").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView();
  });

