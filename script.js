const adviceID = document.querySelector("section span");
const advice = document.querySelector("section p");
const button = document.querySelector("button");

function handleClick(e) {
  e.preventDefault();
  fetchAdvice();
}

async function fetchAdvice() {
  try {
    const data = await fetch("https://api.adviceslip.com/advice");
    const dataJson = await data.json();

    advice.innerText = dataJson["slip"].advice;
    adviceID.innerText = "Advice #" + dataJson["slip"].id;
  } catch (error) {
    console.log(error);
  }
}

fetchAdvice();
button.addEventListener("click", handleClick);
