const adviceNum = document.querySelector("#advice-num");
const adviceText = document.querySelector("#advice");
const button = document.querySelector("#button");

const fetchData = () => {
    fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            adviceNum.textContent = "ADVICE #" + data.slip.id;
            adviceText.textContent = '"' + data.slip.advice + '"';
        });
}

window.addEventListener("load", fetchData);
button.addEventListener("click", fetchData);
