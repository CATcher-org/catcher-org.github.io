<frontmatter>
  header: header.md
  pageNav: 2
  pageNavTitle: "Chapters of This Page"
  siteNav: dg-nav.md
  footer: footer.md
</frontmatter>

# Introduction to Tools and Frameworks used in CATcher

CATcher is a cross-platform application that utilises several tools. It is recommended that you understand how each tool comes into play before you start working on CATcher.

Under each section we have included the section `Resources Used` which lists official guides and relevant resources used for this documentation. You should refer to these resources to gain a deeper understanding of each tool / framework.

1. [Introduction to Angular](#introduction-to-angular)
    1. [Angular Structure](#angular-structure)
    2. [RxJS Library](#rxjs-library)
    3. [Resources for Angular](#resources-for-angular)
2. [Introduction to Electron](#introduction-to-electron)
    1. [How Electron Works](#how-electron-works)
    2. [Resources for Electron](#resources-for-electron)
3. [Introduction to GraphQL](#introduction-to-graphql)
4. [Authentication in CATcher](#authentication-in-catcher)


## Introduction to Angular

Angular is a TypeScript-based web application framework. CATcher is built using Angular and hence our codebase is in Typescript. It is recommended that you familiarise yourself with Typescript as well as Angular before you attempt to work on CATcher.

### Angular Structure

An Angular application is largely made up of Components, Services, and the corresponding HTML and CSS files for each Component. A Component is a direct representation of visible aspects of an application, while a Service provides useful functionalities to Components where needed. The separation of components and services increases modularity and reusability, as through dependency injection (DI), the service class can provide services to different parts of the application.

For more details on the structure of Angular, visit the Angular Guide via the links below. It is also recommended for new developers to do a brief walkthrough of the Angular tutorial (link below) before attempting any fixes on CATcher.

### RxJS Library

RxJS stands for Reactive Extensions for Javascript. As the name suggests, it supports reactive programming for Javascript. This means that it enables the application to respond to changes in data readily, by allowing instant propagation of changes throughout the application.

RxJS library provides support for asynchronous programming through `Observables`, `Observers` as well as `Promises`. `Observers` are able to receive updates on changes to the `Observables` they are observing, which allows instant updates throughout the application through the use of these objects.

`Pipes` are also frequently used in CATcher to reduce clutter and improve readability of our codebase. It strings together operators in a sequence such that the operators can be applied to the given value in order.

Example of custom operators using pipes in CATcher:
```
export function assertSessionDataIntegrity() {
   return pipe(
     throwIfFalse(sessionData => sessionData !== undefined,
       () => new Error('Session Data Unavailable')),
     throwIfFalse(isSessionDataCorrectlyDefined,
       () => new Error('Session Data is Incorrectly Defined')),
     throwIfFalse(hasOpenPhases,
       () => new Error('There are no accessible phases.')));
 }
```

For more information on the RxJS library, visit the links below.

### Resources for Angular

1. [Angular Guide](https://angular.io/guide/architecture) : Official Angular developer guide and introduction to basic Angular topics
2. [RxJS Guide](https://rxjs-dev.firebaseapp.com/guide/observable) : Official RxJS guide on Observables, Observers, Operators, Subscription, etc.
3. [Angular Guide on Navigation of Component Tree](https://angular.io/guide/dependency-injection-navtree) : Guide on how to navigate the component tree with Dependency Injection
4. [Angular Tutorial](https://angular.io/tutorial) : Official Angular tutorials

## Introduction to Electron

Electron is a tool that allows developers to build cross-platform desktop applications with Javascript, HTML, and CSS. It basically allows us to "convert" the web version of CATcher into a desktop application through the APIs provided by Electron.

### How Electron Works
Electron uses the module `ipcMain` to communicate to renderer processes from the main process. It sends out and listen for events, enabling inter-process communication within the CATcher.

Code snippet of `ipcMain` in CATcher
```
ipcMain.on('github-oauth', (event, repoPermissionLevel) => {
  Logger.info('Starting authentication');
  getAccessToken(win, repoPermissionLevel).then((data) => {
    Logger.info('Obtained access token from Github');
    event.sender.send('github-oauth-reply', {token: data.token});
  }).catch(error => {
    event.sender.send('github-oauth-reply', {
      error: error.message,
      isWindowClosed: error.message === 'WINDOW_CLOSED'});
  });
});
```
This starts the authentication flow in the CATcher desktop version. `ipcMain` communicates with the renderer processes by waiting for events from them, as well as emitting events to them.

Because it is a desktop application, it is important that we account for different operating systems in our code, since different operating systems would behave differently to changes in our application.

Example of adapting application logic to Linux O.S.
```
  if (isLinuxOs()) {
    // app icon needs to be set manually on Linux platforms
    windowOptions['icon'] = ICON_PATH;
  }
```

### Resources for Electron

1. [Official Electron Guide](https://www.electronjs.org/docs/tutorial) : This is the official Electron documentation]


## Introduction to GraphQL

GraphQL is a query language for APIs.

In CATcher, it is to communicate with the Github backend. It allows us to define a schema for the data that we receive from github, and also performs validation for the data we reqeust for, such that the data we receive from Github is exactly what we need, nothing more, nothing less. The extra layer of GraphQL is one that makes the process of data retrieval in CATcher more streamlined.

The GraphQL queries used by CATcher are defined under the `graphql` folder in the codebase.

## Authentication in CATcher

CATcher uses the OAuth 2.0 protocol to authenticate users. Below is a summary of the authentication process:

1. A user launches CATcher, and is prompted to log into GitHub. This is a direct interaction between the user and GitHub. Once the user has logged in, GitHub provides CATcher with an authorization code meant for this user.

2. CATcher sends this authorization code and its own client secret to GitHub's authorization server - in exchange for an access token.

3. Authentication is complete, and CATcher can now use the access token when it uses the GitHub API for its logic (e.g. submitting new issues, editing existing issues)

The authentication process is kicked off in the `AuthComponent`, but the code that co-ordinates steps 1 and 2 can be found in [`oauth.ts`](../oauth.ts)(For Electron) or `AuthService`(For Web). Step 2 requires a client secret granted to CATcher. To protect this, we run a web service, [gatekeeper](https://github.com/CATcher-org/gatekeeper) that executes step 2 on behalf of the client CATcher app.


<div class="clearfix">
  <p>
    <span class="float-left">
      <a class="btn btn-light" href="{{ baseUrl }}/dg/index.html">
        <span aria-hidden="true" class="far fa-arrow-alt-circle-left"></span>
        <span> Introduction </span>
      </a>
    </span>
    <span class="float-right">
      <a class="btn btn-light" href="{{ baseUrl }}/dg/tests.html">
        <span>Tests in CATcher</span>
        <span aria-hidden="true" class="far fa-arrow-alt-circle-right"></span>
      </a>
    </span>
  </p>
</div>
<br/>
