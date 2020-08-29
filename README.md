# The-App

App created for the junior engineer interview at Asda.
This app was created using Expo, it can be ejected to be a regular react-native application.

## Running The Code

Install Expo-cli globally

```
npm install -g expo-cli
```

(https://docs.expo.io/get-started/installation/)

This app can be run on an emulator, or on your own device.
To run it on your own device, simply install the expo application from the Play/App store.

Install packages for the application

```
npm install
```

Running the application can be done via either of the following commands

```
npm run start
```

```
expo start
```

In the terminal, you can then type:

'a' to run on an android emulator

'd' to open the metro bundler in chrome, which allows for an easier view to scan the QR code in the Expo app.

## Unit Tests

Unit tests have been set up using Jest

to run to unit tests type:

```
npm run test
```

for coverage:

```
npm run testc
```

## CI/CD

This app has been set up to automatically build, run unit tests, and publish to expo on a commit, using Travis CI

## Linting

The project uses Prettier and ESlint to enforce a consistent code style.
this can be checked by running

```
npx eslint .
```

and

```
npx prettier --check .
```
