1. start by 'npm init'
2. first install all the dependencies like express, mongodb, mongoose.
3. install dev dependencies as 'npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0'
4. to parse json http request install body-parser
5. to start the app we need script, goto package.json to add the following script
   "script" :{
   "start" : "nodemon ./index.js --exec babel-node -e js"
   }
6. now create index.js file and initialize the server
7. create an .babelrc file in the root folder which will set the presets, stage-0 is nothing but all the ecmascript versions.
   {
   "presets":[
   "env,
   "stage-0"
   ]
   }
8. now the app can checked by going localhost:8000/
9. now create a folder named src and in that three folders as controllers, models, routes and their js files
10. a middleware is an function that allows us to run other fucntions before the response, using next we can add middleware in node.
11. start mongodb by mongo --port 27017 -u "devil" -p "123456" --authenticationDatabase "admin"
12. download robo 3t only software to have gui of mongodb
