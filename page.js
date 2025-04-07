<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Webpage</title>
  <style>
    /* CSS Styles */
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
    }

    #dynamicText {
      color: black;
      font-size: 20px;
      margin: 20px;
    }

    .highlight {
      color: red;
      font-weight: bold;
    }

    .container {
      margin-top: 20px;
      padding: 10px;
      border: 1px solid #ddd;
    }

    .new-element {
      color: blue;
      font-size: 18px;
      margin-top: 10px;
    }

    button {
      margin: 10px;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Welcome to the Interactive Webpage</h1>

  <!-- Section for Dynamic Content -->
  <p id="dynamicText">This is the default text.</p>
  <button onclick="changeText()">Change Text</button>
  <button onclick="modifyStyle()">Modify Style</button>

  <!-- Section for Adding/Removing Elements -->
  <div class="container" id="elementContainer">
    <button onclick="addElement()">Add Element</button>
    <button onclick="removeElement()">Remove Element</button>
  </div>

  <script>
    // Change Text Content Dynamically
    function changeText() {
      const textElement = document.getElementById('dynamicText');
      textElement.textContent = 'The text has been updated dynamically!';
    }

    // Modify CSS Styles via JavaScript
    function modifyStyle() {
      const textElement = document.getElementById('dynamicText');
      textElement.classList.add('highlight'); // Adds the "highlight" class
    }

    // Add a New Element
    function addElement() {
      const container = document.getElementById('elementContainer');
      const newElement = document.createElement('p');
      newElement.className = 'new-element';
      newElement.textContent = 'A new element has been added!';
      container.appendChild(newElement);
    }

    // Remove the Last Added Element
    function removeElement() {
      const container = document.getElementById('elementContainer');
      const lastElement = container.querySelector('.new-element:last-child');
      if (lastElement) {
        container.removeChild(lastElement);
      } else {
        alert('No element to remove!');
      }
    }
  </script>
</body>
</html>
