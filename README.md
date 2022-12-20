# A booking.com partial clone
It is made with ReactJS, HTML and plain CSS. Database-specific resources are hardcoded.
# Installation
Use "npm install" to provide the necessary dependencies.
# Running
Use "npm start" (the development environment was created with the "create-react-app" tool).
# Usage
- In the homepage's search bar section, the date of the booking and the number of people can be selected. Clicking on the "Search" button navigates to the "/hotels" page, with the appearence of the previously inputted information on the left side, under the "Check-in Date" and "Options" sections.
- Clicking on the "See availability" button navigates to the selected apartment's own webpage for more information and pictures about it. Clicking on one of the pictures results in the appearence of a navigable slider, which can be interacted by using the arrows on the left and right side, and can be closed by the "x" sign in the upper-right corner.
- Clicking on "Booking App" in the upper-left corner of the navigation bar navigates back to the homepage.
# In progress
 - Remaking the styling with mobile-first design.
 - Adding a server and a database in order to fetch the images directly from an own server using Express.js and PostgreSQL.
