
# How to Guide

1.Condidering Node is installed on your machine
2.Please run npm install express body-parser request cheerio nodemon if these npm packages are not installed.
3.Once all these are installed you can run the index.js file using node index.js or nodemon index.js to start the server.
4.Once server is running you hit below curl request.

# curl --location --request GET 'http://localhost:4000/crowl?url=https://www.flipkart.com/search?q=mobiles'

# Imp : It will not work for Tigerdirect sites as it was not returning HTML of the website where we can traverse the DOM tree.
