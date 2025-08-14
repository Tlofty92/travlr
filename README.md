# CS-465
# README for Travlr Full Stack Project

## Architecture

For this project, I worked with different types of frontend development. At first, I used Express to serve static HTML pages, which gave me a simple but solid base to build the site. Then, I added JavaScript to make the pages interactive. Later, I moved to creating a Single Page Application (SPA) that made the site feel smoother by fetching data in the background and updating the page without reloading everything.

On the backend, I chose to use a NoSQL MongoDB database. This was because MongoDB stores data as JSON like documents, which fits perfectly with the JavaScript I was using on both frontend and backend. Plus, MongoDB’s flexible structure made it easier to adjust the data model as the project evolved.

## Functionality

I learned that JSON is a way to format data as text, while JavaScript is the language that manipulates that data. JSON is the key to connecting the frontend and backend (the backend sends JSON data, like trip details), and the frontend uses JavaScript to display it dynamically.

During the project, I improved my code by replacing hardcoded trip HTML with Handlebars templates that loop through JSON data. This made the code shorter and easier to manage. I also created reusable parts like header and footer components so I didn’t have to copy and paste the same code across different pages. This helped keep the site consistent, saved me time, and made future updates simpler.

## Testing

Testing was an important part of making sure everything worked right. I tested the API endpoints to make sure they gave back the right data and accepted the right requests (like GET and POST). I also learned about how security adds extra steps to testing, like making sure only authorized users can access certain data. Understanding how requests, endpoints, and security work together really helped me see the bigger picture of how a full stack application functions safely and correctly.

## Reflection

This course really helped me grow as a full stack developer. I got hands on experience with building a real web app using MVC architecture, Express, Handlebars, and MongoDB. I now feel more confident designing APIs, working with NoSQL databases, and making my frontend smarter with reusable components and SPA techniques. Plus, practicing Git workflows taught me how to manage and share code professionally.

All these skills will make me a stronger candidate for jobs, showing that I can handle both frontend and backend development and work with modern web technologies from start to finish.

