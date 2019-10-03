# Firend-Finder

## A pretend dating app to match with pretend people

## Instructions

- Fill out the survey to find a match.
- click API friends data to view JSON data of stored users

## code overview

#### Backend

The server is created with `express`. Routes are set up for various endpoints: `/`, `api/friends`, `/survey` , and a 404 page is displayed for any invalid routes.
Routes are handled with Express Router and imported to the `server.js` file.
`api routes` handles users comparison with a `compareUsers()` function. It loops through each user and determines the best match by identifying the least amount of difference between survey choices. The new user is pushed to the User's object array and the JSON data can be viewed at `ap/friends`

#### Front-end

a constructor is used create an object of user data as follows;

```
{
  name: "string",
  image: "string with image URL",
  scores: [array, with, all, scores]
}
```

If the form is not filled out an error modal will be displayed to the user briefly using `setTimeout()`
values from inputs are constructed into a new object and posted to `api/friends`using AJAX. When the server receives the post request, it will compare it with existing users with the `comapreUsers()` function. The AJAX request will receive the best match from that function and receive it through the API as returned data and display a modal to the user.

## Built With:

### Languages

HTML, CSS, jQuery, AJAX, JavaScript, Node.js, express,

### Packages/APIs

- [Express](https://www.npmjs.com/package/express) -Fast, unopinionated, minimalist web framework for [node](http://nodejs.org/) -
- [Path](<[https://nodejs.org/docs/latest/api/path.html](https://nodejs.org/docs/latest/api/path.html)>) - The `path` module provides utilities for working with file and directory paths

## Authors

- **Gerritt Black** - _Backend/Front-end/Scripting/Styling/Design/Logic_ - [gmocore](https://github.com/gmocore)

# Deployed App

https://secret-ravine-34348.herokuapp.com/
