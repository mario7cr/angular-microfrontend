# AngularMicrofrontends

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

In this workspace you will find two applications and one library.

## MDMF-Shell

The host/ shell application. Contains the logic to handle the remote imports.

## MDMF-Profile

The remote application. Contains the profile module that is shared with the host application.

## MDMF-Shared

The library. The most important think inside this library is the configuration for the Ngxs/store.


# Executing the Application

First of all, you need to be sure that you have installed NodeJs 14.19.2 or higher.

1.  Go to the workspace folder and install the dependencies: <code>npm install</code>;
2.  Now, you have to build the library, for that you can run: <code>npm run build:shared</code>;
3.  Once the library is buit, you can start to serve the application, you have to follow the following sequence for that:
  * Remotes first: <code>npm run start:profile</code>;
  * Host in the end: <code>npm run start:shell</code>;
  
For this project there are some scripts pre-configured, in order to see them you can take a look at the package.json file.

