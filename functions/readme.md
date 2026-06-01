# Testing
Run from root
```firebase emulators:start --only functions,pubsub```
See function logs in http://localhost:4000/.
From root, run 
```firebase functions:shell```
Then run any exported function/trigger/job from functions/index.js, e.g. 
```dailyMaintenanceCheck()```

## Debugging
Check that .vscode/launch.json contains the "Debug Event Based Firebase Functions" config
Start step debug: run 
```firebase emulators:start --inspect-functions```
And turn on the step debugger (e.g. from the VS Code side panel interface)
Then open a browser and run test API from functions/api/debug.js (e.g. http://localhost:5001/harmonyhill-1/us-central1/debug-dailyActivitiesJob)


# Deployment
Run from functions folder:
- npm install
Run from root:
firebase deploy --only functions

Check result
https://console.firebase.google.com/project/harmonyhill-1/functions