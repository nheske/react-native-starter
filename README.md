This is a repo for my simple [React Native](https://reactnative.dev/) projects while I was learning. You can start a React Native project with either Expo CLI or React Native CLI. 

Expo CLI might be easier for beginners as it manages much more of the process of getting your app to run on Android and IPhone devices but also deployed to the respective stores. Expo does have some limitations for advanced applications but beginners with simple apps should probably try Expo first. You can try out an example Expo app in minutes by installing the (Expo Go app)[https://expo.io/client] on your phone. Then load and run a sample app from [snack.expo.io](https://snack.expo.io/). They can be loaded by scanning a QR code.  


Projects that don't use Expo are sometimes called vanilla projects as they lack the extra sauce of Expo. 
If you download my repo and want to enable, cd to the project folder, for example
```
cd hello-react-expo
npm install
```

I have both Expo CLI and React Native CLI projects here. 

Prerequisites:
* [Node.js](https://nodejs.org/en/download/) is installed
* Yarn is installed
```
   npm install --global yarn
```

You only have to install expo-cli once on your machine if you do it globally:
```
   npm install --global expo-cli
```
Create and run a template Expo project
```
expo init my-expo-project-name
cd my-expo-project-name
yarn start 
```

React Native CLI Quickstart requires more steps found in [Environment Setup](https://reactnative.dev/docs/environment-setup)

React Native CLI Quickstart:
* Install Android Studio
* Install the Android SDK
* Configure the ANDROID_HOME environment variable
* Add platform-tools to Path

Create and run a template vanilla project
```
   npx react-native init my-vanilla-project-name
   cd my-vanilla-project-name 
   yarn start 
```
and in new terminal (On windows or Linux, you'll need either an android connected in debug or an android simulator running. On Mac, you'll need an IOS simulator running.)
```
   yarn android   
or
   yarn ios
```


For Android simulations, you can view console.log:
```
   adb logcat *:S ReactNative:V ReactNativeJS:V
```

Miscellaneous things I've run into:
* If files in a subfolder are not getting pushed to the repo [Fixing GIT submodule](https://gist.github.com/claraj/e5563befe6c2fb108ad0efb6de47f265#file-git_submodule_fix-md)
* At one point I renamed a project folder and broke the contents of the android and ios folders. In order to fix it:


delete android and ios folders, then:

```
    yarn add react-native-eject
    npx react-native eject
```
