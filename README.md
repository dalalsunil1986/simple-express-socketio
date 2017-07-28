# Express+Babel+socketio Server

## Clone the Repo

### BackEnd
* cd into backend
* npm instsll
* Make sure to edit the package.json if there is a particular library or version you want to work with
* run `npm start` to start the server with nodemon
* if you are ready for production just: `npm run build` and `npm run serve`


### FrontEnd
* cd into frontend
* npm instsll
* Make sure to edit the package.json if there is a particular library or version you want to work with
* you can launch index.html and start clicking on the buttons

### The app
* The backend app runs on `http://localhost:3000` 
* Make sure if you change the server port or address to point the frontend socket to the right spot
* Once you click the start button on the frontend the backend will continuously send a new date that will show on the page
* The stop button tells the server to stop emitting a new date.

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.

## App Structure
The Server:
- Express+Babel+socketIO

The Client:
- index.html
- index.js

## Contact

Hit me up here on github

## License
MIT
