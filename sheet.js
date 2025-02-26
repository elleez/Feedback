const scriptURL = 'https://script.google.com/macros/s/AKfycbxyM19hkL_uiVrDTsyUCUpkaKxyu-9IJ2Uyak5O4WWw5kqN1KT3FD1UssAKPGn21NA/exec';

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission

    let formData = new FormData(this);
    
    fetch("https://script.google.com/macros/s/AKfycbzQz5qbWR4tMO8U2eQxhc1I6J0suHs8QBDxtefo4gJXhOf1ajwv248U__EiEpmeHo7K/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("responseMessage").textContent = "Feedback submitted successfully!";
        document.getElementById("feedbackForm").reset();
    })
    .catch(error => {
        document.getElementById("responseMessage").textContent = "Error submitting feedback.";
        console.error("Error:", error);
    });
});

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
