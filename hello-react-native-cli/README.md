This is a simple React Native vanilla project.

[React Native Tutorial #3 (2021) - Creating Native App with React Native CLI & Ejecting Expo Project:](https://www.youtube.com/watch?v=LiHkAGyNSJU&list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ&index=3)
* [Source Code in Github:](https://github.com/mahdi-sharifimehr/RN-Tutorial-Main)

[Setting up the development environment](https://reactnative.dev/docs/environment-setup)

I created project with 
```
    npx react-native init hello-react-native-cli
```

To run:
```
    cd hello-react-native-cli
    yarn start 
```
And in new terminal (On windows or Linux, you'll need either an android connected in debug or an android simulator running. On Mac, you'll need an IOS simulator running.)
```
    yarn android
or
    yarn ios
```

For future reference if I screw up the application:
At one point I renamed this project folder and it broke the contents of the android and ios folders. In order to fix it:
* deleted android and ios folders
```
    yarn add react-native-eject
    npx react-native eject
```

# TODO
* using the state hook
* styles and style sheet
* responsive UI with Flexbox
* FlatList and SectionList
* Text Input & Keyboard
* Button, Touchables & Pressable
* Alert & Toast Message
* Modal and Custom Alert
* Image & Image Background
* Custom Components & Props
* React Navigation
    * Stack Navigator
    * Tab Navigator
    * Drawer Navigation
* Passing Data Between Screens
