# travelway

One part of a prototype, developed during an exercise in rapid prototyping and iteration. 

## Commands

### Recommended

```
npm install         Install needed dependencies.

npm start           Build and run the built app.

npm run dist        Build the app into the dist/ directory.

npm run clean-all   Clean out downloaded dependencies and build files.
                    Get a fresh start.
```

### More / Internal

```
npm run deps        Download dependencies. This is run automatically by all build commands.

npm run clean-deps  Clean out downloaded dependencies.
npm run clean-build Clean out built files.
```

## Directory structure

### Source code and configuration

```
/                               Project root. Global settings and dependency declarations.
/server/                        Server source code.
/gulp/                          Gulp build for this project.

/client/                             Client source code.
/client/index.html                   Where the client starts.
/client/modules/                     One directory under here for each AngularJS module.
/client/modules/demo-app/            The main app module.
/client/modules/demo-app/routes      Routes for the main app module.
                                     Directory structure here maps directly to the URL structure.
/client/modules/demo-app/components  Any other code in the main app module, not part of a specific route.
                                     One directory per component. No nesting directories.
```

### Build artifacts and other .gitignore'd stuff

```
/dist/                      Build artifact. This can be deployed on a server.
/dist/server.js             Server.
/dist/package.json          Dependency declaration for the server.
/dist/client/               Client webapp.

/node_modules/              npm packages for the gulp build.
/client/bower-components/   Libraries downloaded by Bower.
```
