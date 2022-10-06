# SVT Robotics - Take Home Recruiting Assessment

The assessment was to use the provided API to display all of the robots in a webpage in a tabular format. 

Required functionality:
*Filterable by robotId
*Sortable by all attributes: robotId, batteryLevel, y, x

## Description

Data is fetched from the API and stored in state until the webpage is refreshed. After the data is retrieved, a boolean property called "isDisplayed" is added to each robot object in the array and set to true.

The top section of the webpage is a filter section that takes robotIds in the format of "3-7, 10, 14-21". When the "Display" button is clicked, only those robots with the ids entered will be displayed, if they exist. At the beginning of each row of data, there is a switch button that toggles whether the row should be displayed or hidden. The row won't be hidden until the user presses the "Update Selected" button. The user can click on the "Display All" button to display all robots, including hidden ones. At that point the switches can be individually toggled and then updated again with the "Update Selected" button.

There are three different sections of data in the table: Robot Id, Battery % and Coordinates. The coordinates are further split into both "X" and "Y" columns. There are up and down arrows to the right of each column header. When an arrow is clicked, the arrow becomes highlighted and all of the data is sorted by that column, depending on the direction of the arrow. Currently, the data can only be sorted by one attribute at a time.

## Suggested Features to Add

* Allow sorting by more than one column/attribute
* Make filterable by each of the individual attributes
* Make filterable by multiple attributes
* Add individual robots to different groups/tags/categories
* Allow sorting by groups/tags/categories
* Make filterable by groups/tags/categories
* Add description labels and other details that can be viewed by clicking on a robot row
* Add pagination with a dropdown selection of the number to be displayed per page

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
