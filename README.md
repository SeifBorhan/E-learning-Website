### NACLfree is an E-learning platform , online-storage compatible, built with the MERN(Mongo, Express, React and Node) Stack, with the purpose of providing courses to students all over the world.

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/Advanced-Computer-Lab-2022/NACLfree)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)[![Figma](https://img.shields.io/badge/--F24E1E?logo=figma&logoColor=ffffff)](https://www.figma.com/)


# Motivation

- To master the use of the MERN stack and 
- Learn how to work and collaborate within a team on GitHub
- To learn how to develop a software by following a specified set of requirments
- To develope a full website.
## Code Style
No particular coding style was used however the code is neatly indented uniformly thanks to visual studio code's auto-indent/auto-format setting

## ScreenShots

| Page Name |Screenshot |
| --- | --- | 
| SignUp Page | https://www.dropbox.com/s/nko83wyca8fe1ml/Screen%20Shot%202023-01-02%20at%203.08.38%20AM.png?dl=0&raw=1|
| Login| https://www.dropbox.com/s/v1tbqvzbunjwyel/Screen%20Shot%202023-01-02%20at%203.08.58%20AM.png?dl=0&raw=1|
| Subtitle Page | https://www.dropbox.com/s/6quo0h05cickm7h/Screenshot%202023-01-02%20at%204.44.26%20AM.png?dl=0&raw=1| 
| Welcome Page | https://www.dropbox.com/s/i0wc615b4v69091/Screenshot%202023-01-02%20at%204.46.04%20AM.png?dl=0&raw=1| 
| Admin set discount Page | https://www.dropbox.com/s/5bon54mgpg7y71h/Screenshot%202023-01-02%20at%204.48.08%20AM.png?dl=0&raw=1|




# Tech/Framework

NACLfree uses a number of open source techs/frameworks to work properly:

- [ReactJS](https://reactjs.org) - HTML enhanced for web apps!
- [MUI](https://mui.com) - great UI boilerplate for modern web apps
- [NodeJS](https://nodejs.org/en/) - evented I/O for the backend
- [Express] - fast node.js network app framework
- [MongoDB](https://www.mongodb.com/home) - database
- [Bootstrap](https://breakdance.github.io/breakdance/) - open source front-end development framework for modern web apps
- [SASS](https://sass-lang.com) - a more advanced and evolved variant of the CSS language
- [Axios](https://axios-http.com) - Promise based HTTP client for the browser and node.js
- [Figma](https://www.figma.com/) - Great for seeing ready made templates and getting ideas   


# Features

- Passwords get encrypted when a new account is created and therefore are never known to anyone except the user himself










# Code Examples
#### Frontend
consists of many pages with different paths, and components are rendered inside pages
##### To create a new page, add a new route inside the routes with a specific path and the page that will be rendered. 
```javascript
import Page from './pages/Page';
function App(){
 return(
     <BrowserRouter>
        <Routes>
        <Route>
            path="/"
            element={<Page/>}
            />
            </Routes>
        </BrowserRouter>
)}
```
##### Create Component
``` javascript
function Component(){
    return(
            <div>
            </div>
    )
}
export default component
```
##### Create a page and render component inside it
``` javascript
import Component from './Components/Component'
function Page(){
    reuturn(
        <div>
            <Component/>
        </div>
    )
}
export default Page
```
##### Backend Calls are made in Frontend pages to retrieve data and placed in useEffects in every page load
.

``` javascript
useEffect(() => {
    const fetchCourses = async () => {
        const response = await axios.get('/courses');
    })
    fetchCourses();
}
``` 
to get all courses, use response.data in this case
### For sending data to the backend:
``` javascript
 await axios
      .post("http://localhost:8000/adminstrator/", {
        email,
        password,
      })
``` 
- ##### This code takes the problemID and the comment to be written from the body of the POST request and creates a comment for the problem and sends the problem back to the client.



``` javascript
      app.post("/setCurrency", async (req, res) => {
         const c = await cc.findOne({ countryCode: req.body.country });
         var code;
        const response = await axios
        .get(
        `https://v6.exchangerate-api.com/v6/43b6a15bca2f1a3c5e37e43d/pair/USD/` +
         c.currencyCode
        ).then((res) => {
      code = res.data.conversion_rate;
    });
        res.cookie("conversion", code)
        res.cookie("code", c.currencyCode)
        console.log(req.cookies, code)
         res.send(code + "");
    });
   ``` 
#### Backend
controller contains all the backend methods
``` javascript
const method = async (req,res) => {}
module.exports = {method}
``` 
server.js file contains all API requests and call the corresponding method
``` javascript
app.get("/",controller.method)
app.post = {"/instructorEditProfile",instructorController.editProfile}
``` 
#### creating database models
``` javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    required: false,
    unique: true,
  },

  password: {
    type: String,
    required: false,
  },
});
const admin = mongoose.model("Admin", adminSchema);
module.exports = admin;

``` 


    
# Installation
- Install Visual Studio Code (or any other code source)
- Install Postman for API testing (optional)

NACLFree requires [Node.js](https://nodejs.org/) v10+ to run.

After cloning the repository you need to install the dependencies and start the server.

-Start backend
```sh
cd backend
npm i
node app or nodemon app
```
-Start frontend
```sh
cd frontend
npm i
npm start
```

# API Reference
#### API Requests
These are the API requests that can be sent back to the backend in order to access pages or retreive data.

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /courses | To retrieve all courses on the platform |
| GET | /course?courseId | To retrieve all causes on the platform |
| GET | /instructorViewCourses?id | To retrieve a specific instructor's course on the patform|
| GET | /trainees | To retrieve all trainees on the platform |
| POST | /createCourse | To create a new course |
| POST | /login | To login an existing user account |
| POST | /signup | To create a new user account |
| POST | /createSubtitle?id | To create a new subtitle |


Some API requests require the use of a id. These id are id/courseId/userId/subtitleId/videoId/examId, which you can get by navigating through the pages or autonomous after singing in/singing up. You can identify these requests in the above table, if the enpoint has "?" then it requires some id.


You may append the `id=[courseId/userId/SubtitleId/videoId/examId]` as a GET/POST parameter to authorize yourself to the API. But note that this is likely to leave traces in things like your history, if accessing the API through a browser.



```http
GET /course/?courseId=63851c4552d5434018c94b9c
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `courseId` | `string` | **Required**.|

#### Responses

All API endpoints return the JSON representation of the resources created or edited, and the platform returns a JSON response in the following format:

```javascript
{
  "message" : String,
  "status" : Number,
  "statusText": String,
  "data": String
}
```

The `message` attribute contains a message commonly used to indicate errors or, in the case of deleting a resource, success that the resource was properly deleted.

The `status` attribute describes if the transaction was successful or not.

The `data` attribute contains any other metadata associated with the response. This will be an escaped string containing JSON data.

#### Status Codes

The platform returns the following status codes in its API:

| Status | StatusText |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |

#### APIs Used
- ExchangeRate API : https://v6.exchangerate-api.com
- Youtube API : https://www.googleapis.com/youtube/v3

# Tests
###### For the backend methods can be tested using supertest ~ https://www.npmjs.com/package/supertest

   All the routes have been thoroughly tested manually with different inputs to ensure that they and their given controller methods are functioning as they should. Be sure to email us if you find any bugs/errors!

# Contribute 
#### There are a variety of ways that you can contribute to open source projects.

- ###### Reproducing a reported bug
-- You can contribute to an open source project by validating an issue or adding additional context to an existing issue.
- ###### Testing a pull request
-- You can contribute to an open source project by merging a pull request into your local copy of the project and testing the changes. Add the outcome of your testing in a comment on the pull request.
- ###### Updating issues
-- You can contribute to an open source project by adding additional information to existing issues.


# How to use
##### Guest
- View all courses on the platform
- View all courses' outlines
- Cannot buy a course unless signed up
- Cannot view videos/exercises unless signed up

##### Individual Trainee
- Sign up using (firstname,lastname,username,email,password,gender) by opening page [signUp]
- Login using email and password by opening page [login]
- Read the terms and conditions including refund/payment policies
- View all courses on the platform by opening page [welcome]
- View all courses' outlines by opening page[outline]
- Buy a course using credit card by opening page [outline]

##### Admin
- Can add another admin/instructor/corporatetrainee by opening page [adminView]
- Can view problems facing users by opening page [adminView]






# Credits

#### Great websites that help with debugging and finding solutions to the obstacles we faced during the development process :
 - ##### [Youtube](https://www.youtube.com)
 - ##### [Stack Overflow](https://stackoverflow.com)
 - ##### [Geeks for Geeks](geeksforgeeks.org)


### Huge thanks to the NACLfree team members!
- Nada Abdelfattah (Product/Project Manager)
- Seif Borhan (Scrum Master)
- Hussein Hassan
- Mina Khaled
- Karim Swailum
- Ahmed Karara

## License

#### GNU GENERAL PUBLIC LICENSE
##### Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

