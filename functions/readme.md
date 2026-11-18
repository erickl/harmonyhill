# Testing
Run from root
```firebase emulators:start --only functions,pubsub --inspect-functions```
See function logs in http://localhost:4000/.
From root, run 
```firebase functions:shell```
Then run any exported function/trigger/job from functions/index.js, e.g. 
```dailyMaintenanceCheck()```

For now, the functions source code in the harmonyhill project only contains the Firebase functions.
To get the database online, start the firebase emulator in the harmonyhill-app project as well

## Debugging
Check that .vscode/launch.json contains the "Debug Event Based Firebase Functions" config
Start step debug: run 
```firebase emulators:start --inspect-functions```
And turn on the step debugger (e.g. from the VS Code side panel interface)
Then open a browser and run test API from functions/api/debug.js (e.g. http://localhost:5001/harmonyhill-1/us-central1/debug-dailyActivitiesJob)


# Deployment
From root
- npm run build:packages
- npm run pack:web
- npm run normalize:web
- Move tgz files from apps/web to function

Run from functions folder:
- If any unexpected trouble, remove function/*.tgz, node_modules, and package-lock.json
- If we only change the dependecy packages, and the trigger refuses to update because it doesn't recognize any changes, you can also edit something in the e.g. functions/triggers/createActivitiesJobs.js:
```console.log("dailyMaintenanceCheck started, database pkg rebuilt 2026-11-06");```
- run from functions folder: npm install

Run from root:
- firebase deploy --only functions
or to only deploy one function
- firebase deploy --only functions:dailyMaintenanceCheck

Check result
https://console.firebase.google.com/project/harmonyhill-1/functions

You can force the trigger earlier here. Use the Action menu and "Force Run".
```console.cloud.google.com/cloudscheduler```  

You can get the logs from the trigger like this
```firebase functions:log --only dailyMaintenanceCheck```