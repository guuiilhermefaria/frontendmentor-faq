// function toggleAnswer(imageElement) {
//     const answer = imageElement.closest('.question').nextElementSibling; // Get the answer div
//     if (answer.style.display === "none" || answer.style.display === "") {
//         answer.style.display = "block"; // Show the answer
//         imageElement.src = "assets/images/icon-minus.svg"; // Change icon to minus
//     } else {
//         answer.style.display = "none"; // Hide the answer
//         imageElement.src = "assets/images/icon-plus.svg"; // Change icon back to plus
//     }
// }

function toggleAnswer(imageElement) {
    const answer = imageElement.closest('.question').nextElementSibling; // Get the answer div

    // Toggle the 'visible' class to control the transition
    answer.classList.toggle('visible');

    // Change the icon based on visibility
    if (answer.classList.contains('visible')) {
        imageElement.src = "assets/images/icon-minus.svg"; // Change icon to minus
    } else {
        imageElement.src = "assets/images/icon-plus.svg"; // Change icon back to plus
    }
}