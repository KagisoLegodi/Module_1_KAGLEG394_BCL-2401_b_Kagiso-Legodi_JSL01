function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    // Regular expression pattern to match 'pet_' followed by alphanumeric characters
    let pattern = /^pet_[a-zA-Z0-9]+$/;

    // Test if the input matches the pattern
    if (pattern.test(input)) {
        result = 'Valid syntax  <span class="circle"></span>'; // Set result message for valid input
    } else {
        result = 'Invalid syntax  <span class="circle1"></span>'; // Set result message for invalid input
    }

    // Display the result
    document.getElementById('result').innerHTML = result;
}
