## Create a great event
Create an Event through your account to connect to your audience and empower them to spend time together in the real world.

## Make it easy for people to discover your event
#### Choose an event photo
Your photo appears differently across desktop and mobile so it should be 1920 x 1080 pixels (16:9 ratio) or larger with little or no text.

#### Use a clear and short event name
Long names can get cut off, so avoid duplicating location information in the name and don’t use capital letters or symbols that can be hard to read.

#### Add a location
Use a location of your event so people nearby can discover and learn about your event. Otherwise, use the full address including the city.

#### Set a specific date & time
Your event should be tied to a specific date and time so people can discover it. For events longer than two weeks, create separate events with their own time and location.

#### Add tags
Input keywords to make it easier for people to find your event.

#### Edit event details
You can make edits leading up to the event. However, once you reach a large number of responses, you can only change the time or location of the event three times. Once the event begins, you will not be able to edit the event details.

#### Add Limit
You can set a max number of participants in your event.

## Used Framework
#### Back-End
- Spring Boot
- Spring JPA
- Spring MVC
- Spring Session
- Junit

#### Front-End
- React
- Bootstrap, react-bootstrap
- react-router-bootstrap
- JSLint
- axios
- react-router
- react-autosuggest, This is for auto complete the search form
- react-dom, Help to get the Dom data
- react-datetime, Help choose time

## How to deploy this server
#### Set Java Environment
This project is running based on `java version:1.8.0_111` and use `Maven` a software project management and comprehension tool to manage the project's build. The dependencies should be installed in the server first. The default port for the server is `localhost:8080`.

- Tomcat v8.5
- Mysql v5.7.16
- java v1.8.0_111

The configuration file for the mysql should be in `resources` folder.

You can run the server by `Spring Boot`, because an embedded tomcat is in the `Spring Boot`. Also you can use `maven` to deploy in your Tomcat web folder.

#### Set Node Environment
You should have node.js dependency. type `node --version` to see your node situation. cd the `my-app` folder. And use the following commands to install the js dependencies and start the server.

- `react-scripts` is the only one development dependency in the generated projects. You should install it first: `npm install -g react-scripts`.
- `create-react-app` is the tool to generate this app. You do not need it now.

Use the following to deploy the node server.
```
npm install
npm start
```

In the project directory, you can run:
```
npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
```
npm test
```
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
```
npm run build
```
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
```
npm run eject
```
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Development
### Installing a Dependency
Just in `my-app` folder run:
```
npm install --save <library-name>
```


## Contributors
* Shen Huang ([LichAmnesia](https://github.com/LichAmnesia))
* Yan Li ([YanLi26](https://github.com/YanLi26))
* Amir Kashipazha ([amirkashi](https://github.com/amirkashi))
