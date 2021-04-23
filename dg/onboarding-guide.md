# Table of Contents

1. [Overview of CATcher](#overview-of-catcher)
2. [Introduction to Tools and Frameworks used in CATcher](#introduction-to-tools-and-frameworks-used-in-catcher)
    1. [Introduction to Angular](#introduction-to-angular)
      1. [Angular Structure](#angular-structure)
      2. [RxJS Library](#rxjs-library)
      3. [Resources for Angular](#resources-for-angular)
    2. [Introduction to Electron](#introduction-to-electron)
        1. [How Electron Works](#how-electron-works)
        2. [Resources for Electron](#resources-for-electron)
    3. [Introduction to GraphQL](#introduction-to-graphql)
    4. [Authentication in CATcher](#authentication-in-catcher)
3. [Introduction to Tests in CATcher](#introduction-to-tests-in-catcher)
    1. [Jasmine Style Guide](#jasmine-style-guide)
        1. [Test Suite](#test-suite)
        2. [Spy](#spy)
        3. [Resources for Jasmine](#resources-for-jasmine)
    2. [Angular TestBed Utility](#angular-testbed-utility)
        1. [Resources for Angular TestBed](#resources-for-angular-testbed)
    3. [E2E Testing](#e2e-testing)
        1. [Running E2E Tests](#running-e2e-tests)
        2. [Troubleshooting conflicts between the versions of the browser and browser driver](#troubleshooting-conflicts-between-the-versions-of-the-browser-and-browser-driver)
        3. [Protractor Configuration](#protractor-configuration)
        4. [How the E2E tests work](#how-the-e2e-tests-work)
4. [Workflow of CATcher](#workflow-of-catcher)
    1. [Submitting PRs](#submitting-prs)
    2. [Testing](#testing)
        1. [Generating Spec Files](#generating-spec-files)
5. [Getting Started](#getting-started)
    1. [Setting Up](#setting-up)
        1. [Prerequisites](#prerequisites)
        2. [Steps for Setting Up](#steps-for-setting-up)
        3. [Debugging with Visual Studio Code](#debugging-with-visual-studio-code)
    2. [Commands](#commands)
    3. [Good First Issues](#good-first-issues)
    4. [Releasing a New Version of CATcher](#releasing-a-new-version-of-catcher)
6. [Future Developments](#future-developments)
    1. [Support Commenting](#support-commenting)


# Overview of CATcher

To understand how the various types of users (software testers, developers, tutors) interact with CATcher, refer to the README at the [templates](https://github.com/CATcher-org/templates) repository. This document also provides the formats that must be followed in order for GitHub comments to be successfully parsed by CATcher.

# Introduction to Tools and Frameworks used in CATcher

CATcher is a cross-platform application that utilises several tools. It is recommended that you understand how each tool comes into play before you start working on CATcher.

Under each section we have included the section `Resources Used` which lists official guides and relevant resources used for this documentation. You should refer to these resources to gain a deeper understanding of each tool / framework.

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

## Authentication in CATcher

CATcher uses the OAuth 2.0 protocol to authenticate users. Below is a summary of the authentication process:

1. A user launches CATcher, and is prompted to log into GitHub. This is a direct interaction between the user and GitHub. Once the user has logged in, GitHub provides CATcher with an authorization code meant for this user.

2. CATcher sends this authorization code and its own client secret to GitHub's authorization server - in exchange for an access token.

3. Authentication is complete, and CATcher can now use the access token when it uses the GitHub API for its logic (e.g. submitting new issues, editing existing issues)

The authentication process is kicked off in the `AuthComponent`, but the code that co-ordinates steps 1 and 2 can be found in [`oauth.ts`](../oauth.ts)(For Electron) or `AuthService`(For Web). Step 2 requires a client secret granted to CATcher. To protect this, we run a web service, [gatekeeper](https://github.com/CATcher-org/gatekeeper) that executes step 2 on behalf of the client CATcher app.


# Introduction to Tests in CATcher

## Jasmine Style Guide

Jasmine is a behavior-driven development framework specific for testing JavaScript code. We follow the Jasmine Style Guide loosely for our tests.

### Test Suite

Jasmine testing involves the test suite, which is started by calling the global Jasmine function `describe`. The test suite may consist of several tests (specs) within itself, which is done by calling `it`. One main guideline is that a `describe` block should be created for each method / scenario under test, and an `it` block should be created for each property being verified.

### Spy

`Spy` objects are a very important aspect of Javascript tests. They enable users to stub functions and keep track of useful information such as the number of calls to the function, parameters it has been called with, etc.

For example, if function B is called within function A which is under test, the user is able to find out detailed information regarding how function B is called within A by creating a spy object of B. This allows testers to verify that B has indeed been called with the correct arguments correct number of times.

Example of a `Spy` object in CATcher
```
describe('DescriptionComponent', () => {
    beforeEach(() => {
        ...
    dialog = jasmine.createSpyObj('MatDialog', ['open']);
    errorHandlingService = jasmine.createSpyObj('ErrorHandlingService', ['handleError']);
    issueService = jasmine.createSpyObj('IssueService', ['getLatestIssue', 'updateIssue']);
        ...
    });

    it('should update the form value correctly and emit an event when entering edit mode', () => {
    const descriptionComponentEditState = spyOn(descriptionComponent.changeEditState, 'emit');

    descriptionComponent.ngOnInit();
    descriptionComponent.changeToEditMode();
    expect(descriptionComponentEditState).toHaveBeenCalledTimes(1);
    expect(descriptionComponent.issueDescriptionForm.value).toEqual({ description: thisIssue.description });
    });
    ...
}

```
The test checks that the method `descriptionComponentEditState` has indeed been called once, and that the value of `issueDescriptionForm` within the `descriptionComponent` is the expected value after update.

You are recommended to read the official Jasmine documentation (Links below) for more details and examples on spies and their functionalities.

### Resources for Jasmine

1. [Official Jasmine documentation](https://jasmine.github.io/api/3.6/global) : This is the official Jasmine documentation for Jasmine 3.6
2. [Introduction to Jasmine 2.0](https://jasmine.github.io/2.0/introduction.html) : This is a good summary / introduction of Jasmine test features

## Angular TestBed Utility

Because the above Jasmine framework does not test the DOM, we require the Angular TestBed Utility functions to set up component tests for testing HTML / view changes of components in CATcher.

Steps to set up component tests:
1. Configure the testing module through `TestBed` function `configureTestingModule` with the corresponding component's settings
2. Use `TestBed` function to create the component (fixture) to be tested
3. Observe HTML changes in the fixture during testing of functions by querying HTML elements of the fixture

Code snippet of a component test in CATcher
```
describe('AssigneeComponent', () => {
    ...
  // The providers and imports should be based on the component you are testing
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AssigneeComponent],
      providers: [IssueService, ErrorHandlingService, PhaseService, PermissionService],
      imports: [FormsModule, MaterialModule, BrowserAnimationsModule]
    })
      .overrideProvider(IssueService, { useValue: issueService })
      .overrideProvider(PhaseService, { useValue: phaseService })
      .overrideProvider(PermissionService, { useValue: permissionsService })
      .compileComponents();
  }));
  ...
}
```

### Resources for Angular TestBed
1. [Angular Guide - Basics of testing components](https://angular.io/guide/testing-components-basics) : Official Angular developer guide for the basics of component tests
2. [Angular Guide - Component Fixture](https://angular.io/api/core/testing/ComponentFixture) : Official Angular developer guide on `ComponentFixture`
3. [Introduction to Unit Testing in Angular](https://www.digitalocean.com/community/tutorials/angular-introduction-unit-testing#:~:text=Fixtures%20have%20access%20to%20a,Angular%20to%20run%20change%20detection.) : Useful article on how to test component fixtures

## E2E Testing

### Running E2E Tests

E2E Tests can be executed using `npm run e2e`. You should see CATcher launch in an instance of Google Chrome, with some automated actions occurring on it. Note: Google Chrome needs to be installed on the machine.

Unlike the production version of CATcher, we do not use the actual GitHub API in the E2E tests. Mock data is used to simulate the GitHub API. You can run `npm run ng:serve:test` to run CATcher in this "offline" mode (to further develop or debug the E2E tests).
The following additional parameters would allow for further customisation,

| Additional Parameter | Default | Description | Full Command Example | Command Explanation
| :---: | :---: | :-----: | :-------: | :------: |
| `--protractor-config=e2e/protractor.*.conf.js` | `protractor.conf.js` | Allows selection of the Protractor configuration file | `npm run e2e -- --protractor-config=e2e/protractor.firefox.conf.js` | Runs E2E Tests on the Firefox Browser |
| `--suite=*` | All Suites | Runs E2E Tests for specific suites | `npm run e2e -- --suite=login,bugReporting` | Run E2E Tests from Login and BugReporting Suites only |

**TO NOTE:**
- Relevant Browsers must be installed prior to running tests (i.e. Chrome, Firefox).

### Troubleshooting conflicts between the versions of the browser and browser driver

If tests fail on your machine due to mismatches between the versions of the browser and the browser driver, you can use the [`webdriver-manager`](https://github.com/angular/webdriver-manager#readme) tool to install the right version of the driver.  By default, running `webdriver-manager update` updates all drivers to the latest version, but particular versions can be specified as options.

### Protractor Configuration

E2E Tests are run using [Protractor](http://www.protractortest.org/#/) testing framework.

- Protractor primarily requires the `*.conf.js` files to define E2E Testing Environments (this includes Browser Details, Base URL, etc...)
- The base configuration data is stored in `protractor.base.conf.js` which is then extended by separate configuration files for individual browsers as well as the CI/CD pipeline.
- E2E Tests are typically split into `Page-Objects Files` and `Test Files` in accordance with the [Protractor Style Guide](http://www.protractortest.org/#/style-guide) (more information regarding the interaction between the aforementioned filetypes can be found there).
- E2E Tests are also grouped into suites based on the Application's Phase (i.e. Login, Bug-Reporting). Currently defined suite information is located in the `protractor.base.conf.js` file as well.

### How the E2E tests work

E2E Tests are run with the following stages:
1. Build CATcher using `test` architecture
   - Using `test` build configuration located in `angular.json` under `projects.catcher.architect.configurations` we build a version of CATcher within a test environment that replaces `src/environments/environment.ts` with `src/environments/environment.test.ts` on runtime. This file provides data that allows CATcher to switch into "E2E test" mode.
2. Provide Test Environment Information
   - The Test Environment (in `src/environments/environment.test.ts`) provides information such as,
     - Login Credentials (Username).
     - User Role and Team Information.
     - A `test` flag that is set to `true`, so that CATcher switches into "E2E test mode"
3. Mock Service Injections
   - Once CATcher switches to E2E test mode, it creates mocks of some services, in order to simulate behaviour that is outside the scope of E2E Testing. This includes authentication, and communication with GitHub (via its APIs).
   - These Service Injections are carried out in the respective `*-module.ts` files with the help of Factories (located in `/src/app/core/services/factories`) that check the current build environment and make the Service Replacements accordingly.
4. Browser Action Automation using Protractor
   - With the application ready for testing, we then utilize `Protractor` to run test cases that are located in the `/e2e` directory.


# Workflow of CATcher

The following is the workflow that contributors need to follow when proposing changes to CATcher.

## Submitting PRs

When a pull request is merged, it should be accompanied by a helpful commit message. Hence, contributors are recommended to propose a commit message for their pull requests.
[Here](https://oss-generic.github.io/process/docs/FormatsAndConventions.html#commit-message) are
some good guidelines for crafting the commit message.

## Testing

We use [Scuri](https://github.com/gparlakov/scuri) to generate spec files for unit tests.
Scuri uses [Jasmine's spy feature](https://jasmine.github.io/2.0/introduction.html#section-Spies) to stub dependencies.

### Generating Spec Files

- To generate spec files for files that have none:
    Run `npm run ng g scuri:spec --name src/app/app.component.ts`

- To generate spec files for files that have existing spec files:
    Run `npm run ng g scuri:spec --name src/app/app.component.ts --force`

# Getting Started

## Setting Up

This section guides you through the steps required to set up your computer for developing CATcher.

### Prerequisites
You need Node 12 to develop this project.
Run `node -v` in your OS terminal to check the version of Node on your computer.

If you do not have Node 12 installed in your computer, click on [this link](https://nodejs.org/en/blog/release/v12.20.0/) to download Node 12.

### Steps for Setting Up
1. Fork this repository into your Github account.

2. Clone the forked repository into your computer.

3. Install dependencies with npm: Run `npm install`.

4. Compile and start the application: Run `npm start`.

### Debugging with Visual Studio Code
You can use Visual Studio Code to debug CATcher with Chrome, Firefox or Edge.
Refer to the `Debugging Angular` section of [this guide](https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular) for a step-by-step walkthrough of the debugger setup.

In summary, the following steps are needed:

1. Install the `Debugger for Chrome` extension for VS Code. You can also install debugger extensions for Firefox and Edge.

2. Create VS Code's debugger config file (`launch.json` ) as shown in [the guide](https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular). Particularly, set the `url` attribute to `http://localhost:4200` (reason: CATcher app is served locally on port 4200, by default.)

3. In the root project folder, run `npm run ng:serve:web`.

4. In VS Code's Debug View, launch the debugger by clicking the green arrow (or F5). You should see the CATcher app loading within a new browser window.

## Commands

This section shows you different commands you can run to build the application in different operating systems.

|Command|Description|
|--|--|
|`npm start`| Start the app from Electron in development mode. |
|`npm run ng:serve:web`| Start the app from the browser in development mode. |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |
|`npm run deploy:web`| Will deploy the app onto the Github's `gh-pages` branch. <br/> Prerequisites:<br/> 1. Add Environment variable of `GH_TOKEN=<Github Personal Access Token>` with the permission of `repo`. <br/>2. `build:prod:web` command's `--base-href` argument in `package.json` must have the following format `https://<OrgName or Username>.github.io/CATcher/`. <br/> 3. If you are deploying outside of CATcher-org then it would be necessary to create a new OAuth application and change the `clientId` in `environment.prod.ts` <br/> 4. If you are deploying outside of CATcher-org, you would also need to deploy your own instance of proxy server using [gatekeeper](https://github.com/CATcher-org/gatekeeper) and change the appropriate variables in `environment.prod.ts`. |
| `npm run lint` | Runs the linter (TSLint) |
| `npm run test` | Runs the tests           |
| `npm run test -- "--code-coverage"` | Runs the tests and generates code coverage report under `tests/coverage` folder |

## Good First Issues

Issues in CATcher that are marked as `good first issue` can serve as good starting ground for new developers. They can be found [here](https://github.com/CATcher-org/CATcher/labels/good%20first%20issue).

Before starting on the issues, please let the developers know by leaving a comment on the issue.

## Releasing a New Version of CATcher

Releasing a new version of CATcher involves the following steps:
  - Update CATcher's version number in `package.json`
  - Build the CATcher desktop application's executables for Linux, MacOS and Windows
  - Build the CATcher web app, and then deploy it onto our GitHub Pages site (https://catcher-org.github.io/CATcher/)
  - Create a release on GitHub, upload the desktop app's executables and write a changelog that describes any new features or bug fixes.

We have a GitHub Actions' workflow that can perform many of the tasks above in a single-click.

Follow these steps to create a release using this workflow:
  - Create and Merge a Pull Request that updates the version of the application in the `package.json` file.
  - Navigate to the 'Actions' Tab of the `CATcher` repository and start the `Draft Deployment` Workflow. This workflow deploys the web app and creates a Draft Release containing the desktop app's executables
  - Edit the Draft Release and update the description with a changelog of recently merged Pull Requests.
  - Publish the release.

# Future Developments
Here are a few suggestions that future developers can work on to improve this application!

## Support Commenting
Currently, the application only support 1 response for each phase. So a commenting section would be good to allow discussions between team members as well as between tutors and admins.
