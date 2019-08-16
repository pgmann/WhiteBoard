# WhiteBoard

## Purpose
Most VLEs have a huge feature list with features hidden in obscure locations deep within submenus and no clear overview of content at either institution or class/module level.
This web app is designed to show how much simpler the Virtual Learning Environment (VLE) can be for a student.

## Try it!
Browse [the demo](https://pgmann.github.io/WhiteBoard/), hosted using GitHub Pages.

## Tech Stack
This project is written purely in JS, CSS and HTML. No server side processing is applied to the output.

The following external libraries are also used:
* Bootstrap - provides standard CSS styling for components
* Font Awesome 5 - provides a standard icon set
* jQuery - useful utility functions

## Current State
This web app is a prototype - there is no implemented server backend at the current time. However, the `whiteboard-data.js` file contains realistic data and is intended to imitate a typical server response for the average student.

## Further Development
Before moving from the prototype to final product, the following functionality would need to be implemented:
* Implement a backend server
* Require user authentication
* Implement submission of assignments
* Implement posting of threads and replies
* Add class management area
    * Edit class homepage
    * Add/remove students/staff
    * Add content
* Add institution management area
    * Add/remove students/staff
    * Add/remove classes
    * User authentication management (password reset, etc.)