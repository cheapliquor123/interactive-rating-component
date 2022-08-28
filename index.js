const mainRating = document.querySelector(".main-rating")
const afterRating = document.querySelector(".after-rating")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rate = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    afterRating.classList.remove("hidden")
    mainRating.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    afterRating.classList.add("hidden")
    mainRating.style.display = "block"
})

rate.forEach((rates) => {
    rates.addEventListener("click", ()=> {
        rating.innerHTML = rates.innerHTML
    })
    
});

