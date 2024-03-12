# Pet Input Validation

## Description
This JavaScript code provides a function to validate input entered in a form field. It checks if the input starts with 'pet_' followed by alphanumeric characters. The validation result is displayed with a green circle for valid input and a red circle for invalid input.

## Usage
1. Include the JavaScript code in your project.
2. Add an input field in your HTML with the id 'petInput'.
3. Add a container element with the id 'result' where the validation result will be displayed.
4. Call the `validateSyntax()` function when needed, typically triggered by a form submission or input change event.

## Functionality
The `validateSyntax()` function performs the following steps:
- Retrieves the value of the input field with the id 'petInput'.
- Validates the input against the regular expression `/^pet_[a-zA-Z0-9]+$/`.
- Displays the validation result with a green circle for 'Valid syntax' and a red circle for 'Invalid syntax' in the element with the id 'result'.

## Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
    <script src="validation.js"></script>
    <style>
        .circle {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .valid {
            background-color: #00ff00; /* Green */
        }
        .invalid {
            background-color: #ff0000; /* Red */
        }
    </style>
</head>
<body>
    <input type="text" id="petInput">
    <div id="result"></div>

    <script>
        // Call the validateSyntax() function on form submission or input change event
        // For example:
        document.getElementById('petInput').addEventListener('input', validateSyntax);
    </script>
</body>
</html>