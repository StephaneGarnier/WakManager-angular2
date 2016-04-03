# Angular 2 and Ionic 2 Application example with Wakanda

This is a very simple Angular 2 and Ionic 2 application that uses Wakanda backend through
[Wakanda-Client](https://github.com/Wakanda/wakanda-javascript-client) and [Wakanda](https://wakanda.github.io).


## Angular 2

1. Open `WakandaManagerAngular2` Wakanda solution on Wakanda Studio and launch the Server.
You could use *Run Page* but it is not recommanded.

2. Go to the `web` folder inside the project folder `WakandaManagerAngular2`.

3. We first must install all the needed packages.

 ```bash
npm install
```

4. When the installation is finish you just have to run this following command. It runs the compiler and a server at the same time, both in "watch mode".

 ```bash
npm start
```

5. Now your Angular 2 application is running in your browser here: `http://127.0.0.1:3000`.

## Ionic 2
### Install
To work with Ionic 2, you’ll need to install the latest beta release.
```bash
npm install -g ionic@beta
```

### Launch
1. Open `WakandaManagerAngular2` Wakanda solution on Wakanda Studio and launch the Server.
You could use *Preview* but it is not recommanded.

2. Go to the `mobile` folder inside the project folder `WakandaManagerAngular2`.

3. We first must install all the needed packages.

 ```bash
npm install
```

4. When the installation is finish you just have to run this following command.

 ```bash
ionic serve --address 127.0.0.1 --lab
```

5. Now your Ionic 2 application is running in your browser here: `http://127.0.0.1:8100`. If you want to have Android and iPhone view go to this URL: `http://127.0.0.1:8100/ionic-lab`.

## Notes

Few things to note:

- `Wakanda-Client` is still on beta and might have some issues.
- `Wakanda-extension-language-tools 1.0.0` In `Wakanda studio` have a known bug with typescripts files so I recommand you to use `Visual Studio Code` or `Atom`. 
- It is my first Angular 2 and Ionic 2 application, some usage might be bad, feel free to tell me in such case :)
- These demo are in the very first stage of development.
- You can login with the following credentials:
    - login: `john.doe@wakanda.io`
    - password: `john`
