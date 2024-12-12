# Display All Cats
=====================

## API Documentation
-------------------

This is a simple web application that fetches cat data from the Cataas API and displays it on the page.


## Overview
-------------------

The application consists of two main files: index.html and script.js. The index.html file sets up the basic page structure, while the script.js file contains the JavaScript code that fetches the cat data and displays it on the page.

### API Endppoint
-------------------

The application uses the Cataas API to fetch cat data. The API endpoint is https://cataas.com/api/cats.

### API Parameters

* None

### API Response

The API returns a JSON object containing an array of cat objects. Each cat object has the following properties:

* `_id`: The ID of the cat.
* `tags`: An array of tags associated with the cat.
 
## Code Structure
-----------------

The application consists of the following files:

* `index.html`: The main HTML file that contains the application's layout and structure.
* `style.css`: The CSS file that styles the application's layout and design.
* `script.js`: The JavaScript file that contains the application's logic and functionality.

## Features
------------

The application has the following features:

* Fetches cat data from the Cataas API.
* Displays cat data in a grid layout.
* Each cat card displays the cat's ID, name, and image.

## Usage
-----

To use the application, follow these steps:

1. Open the `index.html` file in a web browser.
2. The application will fetch cat data from the Cataas API and display it in a grid layout. 
3. Click on a cat card to view more information about the cat.