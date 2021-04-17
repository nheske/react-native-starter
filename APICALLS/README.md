Based on [How to make API calls in react native apps](https://medium.com/enappd/how-to-make-api-calls-in-react-native-apps-eab083186611)



Make the basic React Native CLI app
```
react-native init APICALLS
yarn android
```

Add the Axios library for improved fetching
```
yarn add axios
```


The project is based on the older component model. I wanted to have an updated React Hook example too so I added ReactHookFetch.js (copied from his App.js and added his App.css) based on Jarrett Retz' [How to Fetch Data from an API with React Hooks](https://rapidapi.com/blog/react-hooks-fetch-data-api/). As Jarrett says in his article, " all changed with React version 16.8."
