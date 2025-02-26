const scriptURL = 'https://script.google.com/macros/s/AKfycbxyM19hkL_uiVrDTsyUCUpkaKxyu-9IJ2Uyak5O4WWw5kqN1KT3FD1UssAKPGn21NA/exec';


const form = document.forms['contact-form'];
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Thank you! Your Feedback is submitted successfully");
            window.location.reload();
        })
        .catch(error => console.error('Error!', error.message));
});
let currentRating = 0;

function toggleStar(starNumber) {
    // Loop through all the stars
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star${i}`);
        // If the star is before or equal to the clicked star, make it solid
        if (i <= starNumber) {
            star.classList.remove("far");
            star.classList.add("fas");
        } else { // Otherwise, make it regular
            star.classList.remove("fas");
            star.classList.add("far");
        }
    }
}