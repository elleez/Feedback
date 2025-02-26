const scriptURL = 'https://script.google.com/macros/s/AKfycbzQz5qbWR4tMO8U2eQxhc1I6J0suHs8QBDxtefo4gJXhOf1ajwv248U__EiEpmeHo7K/exec';
const form = document.getElementById("feedbackForm");
const responseMessage = document.getElementById("responseMessage");
let currentRating = 0;

// Listen for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Add the selected rating to the form data
    const formData = new FormData(form);
    formData.append("StarRating", currentRating); // Append star rating

    fetch(scriptURL, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        responseMessage.textContent = "Feedback submitted successfully!";
        form.reset(); // Clear form after submission
        resetStars(); // Reset star rating UI
    })
    .catch(error => {
        responseMessage.textContent = "Error submitting feedback.";
        console.error("Error:", error);
    });
});

// Function to handle star rating selection
function toggleStar(starNumber) {
    currentRating = starNumber; // Store the selected rating

    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star${i}`);
        if (i <= starNumber) {
            star.classList.remove("far");
            star.classList.add("fas");
        } else {
            star.classList.remove("fas");
            star.classList.add("far");
        }
    }
}

// Function to reset star rating UI after submission
function resetStars() {
    currentRating = 0;
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star${i}`);
        star.classList.remove("fas");
        star.classList.add("far");
    }
}
