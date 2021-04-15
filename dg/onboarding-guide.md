# Table of Contents

1. [Introduction to Tools and Frameworks used in CATcher](#introduction-to-tools-and-frameworks-used-in-catcher)
    1. [Introduction to Angular](#introduction-to-angular)
    2. [Introduction to Electron](#introduction-to-electron)
        1. [How Electron Works](#how-electron-works)
    3. [Introduction to GraphQL](#introduction-to-graphql)
    4. [Authentication in CATcher](#authentication-in-catcher)
2. [Introduction to Tests in CATcher](#introduction-to-tests-in-catcher)
    1. [Jasmine Style Guide](#jasmine-style-guide)
    2. [Angular TestBed Utility](#angular-testbed-utility)
    3. [E2E Testing](#e2e-testing)
3. [Workflow of CATcher](#workflow-of-catcher)
4. [Getting Started](#getting-started)
    1. [Setting Up](#setting-up)
    2. [Commands](#commands)
    3. [Good First Issues](#good-first-issues)
    4. [Releasing a New Version of CATcher](#releasing-a-new-version-of-catcher)
5. [Future Developments](#future-developments)

# Introduction to Tools and Frameworks used in CATcher

CATcher is a cross-platform application that utilises several tools. It is recommended that you understand how each tool comes into play before you start working on CATcher.

## Introduction to Angular

Angular is a TypeScript-based web application framework. CATcher is built using Angular and hence our codebase is in Typescript. It is recommended that you familiarise yourself with Typescript as well as Angular before you attempt to work on CATcher.

### Angular Structure

An Angular application is largely made up of Components, Services, and the corresponding HTML and CSS files for each Component. A Component is a direct representation of visible aspects of an application, while a Service provides useful functionalities to Components where needed. The separation of components and services increases modularity and reusability, as through dependency injection (DI), the service class can provide services to different parts of the application.

For more details on the structure of Angular, visit the Angular Guide via the links below.

<question type="text" header="What is the decorator used to define a service class?"
          keywords="injectable" threshold="0.5" answer="@Injectable()">
  <div slot="hint">

  Read up on the [Angular Guide - Services and Dependency Injection](https://angular.io/guide/architecture#services-and-dependency-injection) for more details on services and dependency injection.

  </div>
</question>

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

<question type="mcq" header="What is the order in which the messages are printed?">

  ```
  import { Observable } from 'rxjs';

  const foo = new Observable(subscriber => {
    console.log("Observable printing 1");
    subscriber.next(1);
    console.log("Observable printing 2");
    subscriber.next(2);
    console.log("Observable done printing");
  });

  foo.subscribe(x => {
    console.log(x);
  });
  ```
  <q-option>
    Observable printing 1
    <br>Observable printing 2
    <br>Observable done printing
    <br>1
    <br>2
  </q-option>
  <q-option correct reason= "Observables behave like functions; the body of an Observable is only executed when it is subscribed to.">
    Observable printing 1
    <br>1
    <br>Observable printing 2
    <br>2
    <br>Observable done printing
  </q-option>
  <div slot="hint">

  Read up on the [Angular Guide - Services and Dependency Injection](https://angular.io/guide/architecture#services-and-dependency-injection) for more details on services and dependency injection.

  </div>
</question>

### Resources Used

1. [Angular Guide](https://angular.io/guide/architecture) : Official Angular developer guide and introduction to basic Angular topics
2. [RxJS Guide](https://rxjs-dev.firebaseapp.com/guide/observable) : Official RxJS guide on Observables, Observers, Operators, Subscription, etc.
3. [Angular Guide on Navigation of Component Tree](https://angular.io/guide/dependency-injection-navtree) : Guide on how to navigate the component tree with Dependency Injection

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

## Introduction to GraphQL

GraphQL is a query language for APIs.

In CATcher, it is to communicate with the Github backend. It allows us to define a schema for the data that we receive from github, and also performs validation for the data we reqeust for, such that the data we receive from Github is exactly what we need, nothing more, nothing less. The extra layer of GraphQL is one that makes the process of data retrieval in CATcher more streamlined.

## Authentication in CATcher

(content in Developer Notes)

# Introduction to Tests in CATcher

## Jasmine Style Guide

Jasmine is a behavior-driven development framework specific for testing JavaScript code. We follow the Jasmine Style Guide loosely for our tests.

### Test Suite

Jasmine testing involves the test suite, which is started by calling the global Jasmine function `describe`. The test suite may consist of several tests (specs) within itself, which is done by calling `it`. Every test is supposed to test for a particular property of the function you are testing.

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

<question type="text" header="Which function do you use when you want to delegate the spy to the actual implementation?"
          keywords="callthrough" threshold="0.5" answer="Chain the spy with `and.callThrough`">
  <div slot="hint">

  Read up on [Introduction to Jasmine 2.0](https://jasmine.github.io/2.0/introduction.html) for Spies and its functionalities.

  </div>
</question>

<question type="mcq" header="Which of function do you use to create a mock with multiple spies?">
<div slot="hint">

  Read up on [Introduction to Jasmine 2.0](https://jasmine.github.io/2.0/introduction.html) for Spies and its functionalities.

  </div>
    <q-option reason="This creates a 'bare' spy">
        jasmine.createSpy(...)
    </q-option>
    <q-option correct>
        jasmine.createSpyObj(...)
    </q-option>
    <q-option reason="This creates a single spy of a single function">
        spyOn(...)
    </q-option>
</question>

### Resources Used

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

### Resources Used
1. [Angular Guide - Basics of testing components](https://angular.io/guide/testing-components-basics) : Official Angular developer guide for the basics of component tests
2. [Angular Guide - Component Fixture](https://angular.io/api/core/testing/ComponentFixture) : Official Angular developer guide on `ComponentFixture`
3. [Introduction to Unit Testing in Angular](https://www.digitalocean.com/community/tutorials/angular-introduction-unit-testing#:~:text=Fixtures%20have%20access%20to%20a,Angular%20to%20run%20change%20detection.) : Useful article on how to test component fixtures

## E2E Testing

(content in Developer Notes)

# Workflow of CATcher

(content in Developer Notes)

# Getting Started

## Setting Up

(content in Developer Notes)

## Commands

(content in Developer Notes)

## Good First Issues

Issues in CATcher that are marked as `good first issue` can serve as good starting ground for new developers. They can be found [here](https://github.com/CATcher-org/CATcher/labels/good%20first%20issue).

Before starting on the issues, please let the developers know by leaving a comment on the issue.

## Releasing a New Version of CATcher

(content in Developer Notes)

# Future Developments

(content in Developer Notes)
