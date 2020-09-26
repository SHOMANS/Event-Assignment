const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
let counter = 0;

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    tab.classList.remove("active");
    tab.classList.add("active");
    contents.forEach((cont) => {
      cont.classList.remove("active");
    });
    contents[index].classList.add("active");
  });
});

function tabing(index) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabs[index].classList.add("active");
  contents.forEach((cont) => {
    cont.classList.remove("active");
  });
  contents[index].classList.add("active");
}

window.addEventListener("keypress", function (key) {
  if (key.keyCode == "49") {
    tabing(0);
  }
  if (key.keyCode == "50") {
    tabing(1);
    counter += 1;
    console.log(counter);
  }
  if (key.keyCode == "51") {
    tabing(2);
  }
  if (key.keyCode == "52") {
    tabing(3);
  }
});

tabs[1].addEventListener("click", function () {
  counter += 1;
  console.log(counter);
});
