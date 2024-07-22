// Function to handle "Yes" button click
function handleYes() {
    // Change the message
    document.querySelector('h1').textContent = "Yayyyyyy! You are the best";

    // Hide the original GIF
    document.getElementById('originalGif').style.display = 'none';

    // Show the happy GIF
    document.getElementById('happyGif').style.display = 'inline';

    // Show the additional GIF container
    document.getElementById('additionalGifContainer').style.display = 'block';

    // Hide the buttons
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';

    // Show the "Let's fix a date" button
    document.getElementById('dateBtn').style.display = 'block';
}

// Function to show the date picker
function showDatePicker() {
    // Show the date picker container
    document.getElementById('datePickerContainer').style.display = 'block';

    // Hide the "Let's fix a date" button
    document.getElementById('dateBtn').style.display = 'none';
}

// Function to choose the date

function chooseDate() {
    const selectedDate = new Date(document.getElementById('datePicker').value);
    const chosenDateContainer = document.getElementById('chosenDateContainer');

    if (selectedDate) {
        // Format the selected date
        const day = selectedDate.getDate();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthIndex = selectedDate.getMonth();
        const formattedDate = day + getOrdinalSuffix(day) + " " + monthNames[monthIndex];
        
        // Display the chosen date with a cute message
        document.getElementById('chosenDate').textContent = "Yay! We're going on a date on " + formattedDate + "!";
        
        // Show the chosen date container
        chosenDateContainer.style.display = 'block';
        
        // Hide the date picker container
        document.getElementById('datePickerContainer').style.display = 'none';
    } else {
        alert("Please select a date!");
    }
}


function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
        return "th";
    }
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
}


// Function to make the "No" button move on hover
const noButton = document.getElementById('noBtn');
noButton.addEventListener('mouseover', () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    noButton.style.position = 'absolute';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});
