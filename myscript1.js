
// Function to add a new row to the table
function addTableRow() {
    // Get a reference to the table body
    const tableBody = document.getElementById('table-body');

    // Create a new row
    const newRow = tableBody.insertRow();


    // Create cells for the new row
    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const checkboxCell = newRow.insertCell(2); // Add a cell for the checkbox

    // Create an editable text area
    const nameTextarea = document.createElement('textarea');
    nameTextarea.setAttribute('rows', '1'); // Set the number of rows
    nameTextarea.setAttribute('cols', '20'); // Set the number of columns
    nameCell.appendChild(nameTextarea);

    // Create an editable text area for age
    const ageTextarea = document.createElement('textarea');
    ageTextarea.setAttribute('rows', '1');
    ageTextarea.setAttribute('cols', '30');
    ageCell.appendChild(ageTextarea);

    // Create an editable checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkboxCell.appendChild(checkbox);

    const removeButton = document.getElementById('remove-button');
    removeButton.addEventListener('click', () => removeTableRow(newRow));
    actionCell.appendChild(removeButton);
}
function removeTableRow(row) {
    const tableBody = document.getElementById('table-body');
    tableBody.removeChild(row);

}

// Add a click event listener to the "Add" button
document.getElementById('add-button').addEventListener('click', addTableRow);

//time and date

// Function to update the paragraph with the current date and time
function updateRunningDateTime() {
    const currentDateTime = new Date();
    const dateTimeString = currentDateTime.toLocaleString();
    document.getElementById("para").textContent = "Current date and time: " + dateTimeString;
}

// Update the running date and time initially
updateRunningDateTime();

// Set an interval to update the running date and time every second (1000 milliseconds)
setInterval(updateRunningDateTime, 1000);

// save document via screenshot
const screenshotButton = document.getElementById('save-button');
const screenshotTarget = document.getElementById('screenshotTarget');

screenshotButton.addEventListener('click', () => {
    // Use html2canvas to capture the content of the specified element
    html2canvas(screenshotTarget).then(function (canvas) {
        // Convert the canvas to a data URL
        const screenshotDataUrl = canvas.toDataURL('image/png');

        // Create an anchor element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = screenshotDataUrl;
        downloadLink.download = 'screenshot.png';

        // Trigger the download
        downloadLink.click();
    });
});

  

