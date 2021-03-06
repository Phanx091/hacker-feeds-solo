# Hacker_feeds

- [Hacker_feeds](https://hacker-feeds.herokuapp.com/)

# Express/Passport with React
This version uses React to control the login requests and redirection in coordination with client-side routing.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostgresSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`


## Login

First time users will need to click register and create a username and password. Otherwise, here is where you'll login. The application cannot be used unless someone is logged in.

![Login](documentation/images/LOGIN.png)


## Add RSS

To add your first RSS Feed, navigate to the left and click on the menu. A drop down list should appear and navigate to the "add" tab. Here are some recommend RSS you can add by click on the RSS Icon. 

![Login](documentation/images/ADD_RSS.png)

## Home Screen

Once an RSS has been added, navigate back to home screen where you'll be able to see the the top 10 latest articles. 

![Login](documentation/images/RSS_FEED.png)








