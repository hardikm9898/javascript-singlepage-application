const svgBtn = document.querySelector(".svgicon");
const closeBtn = document.querySelector(".closeButton");
const hideElement = document.querySelector(".navcontant");
const allContent = document.querySelector(".allContent");
const card = document.querySelectorAll(".card");
const allCard = document.querySelector(".allcard");
const greterIcon = document.querySelector(".graterslider");
const lessIcon = document.querySelector(".lessslider");
const maincard = document.querySelectorAll(".maincard");
const closea = document.querySelector(".navbarul");
const body = document.querySelector("body");
const home = document.querySelector(".home");
const scroll = document.querySelector(".scroll");
// function

// relevan scroll

let prevValue = 0;

const nextBUtton = function () {
  maincard.forEach((element) => {
    const changeCardPlace = element;

    changeCardPlace.style.transform = `translateX(${prevValue - 268}px)`;
  });

  prevValue -= 268;

  lessIcon.style.visibility =prevValue < 0?  "visible":"hidden";
  

  greterIcon.style.visibility =
    prevValue < (card.length - 6) * -268 ? "hidden" : "visible";
};

const previous = function () {
  maincard.forEach((element) => {
    const changeCardPlaceRight = element;

    changeCardPlaceRight.style.transform = `translateX(${prevValue + 268}px)`;
  });

  prevValue += 268;

  lessIcon.style.visibility = prevValue < 0 ? "visible":"hidden"

  greterIcon.style.visibility=prevValue < (card.length - 6) * -268? "hidden":"visible"
  
};
let flag = false;
let time;

const startScroll = function () {
  time = setInterval(() => {
    if (prevValue && flag) {
      previous();
    } else {
      flag = false;
      if (prevValue < (card.length - 6) * -268) {
        flag = true;
      } else {
        nextBUtton();
      }
    }
  }, 1500);
};
startScroll();

const stopScroll = function () {
  clearInterval(time);
};

allCard.addEventListener("mouseover", stopScroll);
allCard.addEventListener("mouseout", startScroll);

if (prevValue === 0){ 
  lessIcon.style.visibility = "hidden";
}
greterIcon.addEventListener("click", nextBUtton);

lessIcon.addEventListener("click", previous);

svgBtn.addEventListener("click", () => {
  allContent.style = "filter: blur(8px);";
  hideElement.classList.remove("hidden");
  body.style.overflow = "hidden";
});
allContent.addEventListener("click", () => {
  body.style.overflow = "visible";
  allContent.style = "filter: blur(0px);";
  hideElement.classList.add("hidden");
});
closea.addEventListener("click", () => {
  body.style.overflow = "visible";
  allContent.style = "filter: blur(0px);";
  hideElement.classList.add("hidden");
});
closeBtn.addEventListener("click", () => {
  body.style.overflow = "visible";
  allContent.style = "filter: blur(0px);";
  hideElement.classList.add("hidden");
});
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth
  );
}

document.addEventListener(
  "scroll",
  () => {
    scroll.style.visibility = isInViewport(home)?"hidden":"visible";
    
  },
  {
    passive: true,
  }
);
