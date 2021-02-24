let moodElement = document.querySelector("#mood-icon");
const btnHappy = document.querySelector("#btn-happy");
const btnSad = document.querySelector("#btn-sad");
const btnAngry = document.querySelector("#btn-angry");
const btnConfused = document.querySelector("#btn-confused");
const btnRandom = document.querySelector("#btn-random");

const moods = ["HAPPY", "SAD", "ANGRY", "CONFUSED"];

btnHappy.addEventListener("click", function () {
    store.dispatch({type: "HAPPY"});
    moodElement.innerText = store.getState().mood;
});

btnSad.addEventListener("click", function () {
    store.dispatch({type: "SAD"});
    moodElement.innerText = store.getState().mood;
});

btnAngry.addEventListener("click", function () {
    store.dispatch({type: "ANGRY"});
    moodElement.innerText = store.getState().mood;
});

btnConfused.addEventListener("click", function () {
    store.dispatch({type: "CONFUSED"});
    moodElement.innerText = store.getState().mood;
});

btnRandom.addEventListener("click", function () {
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    store.dispatch({type: randomMood});
    moodElement.innerText = store.getState().mood;
});