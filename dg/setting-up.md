<frontmatter>
  header: header.md
  title: "DG: Setting up"
  pageNav: 2
  siteNav: dg-nav.md
  footer: footer.md
</frontmatter>

# Setting up

This section guides you through the steps required to set up your computer for developing CATcher.

## Getting started

**Prerequisites:**
* [Node.js 12](https://nodejs.org/en/blog/release/v12.20.0/) -- (run `node -v` in your OS terminal to check the version of Node on your computer)

**Recommended:**
* IDE: Visual Studio Code

**Steps:**
1. Fork this repository into your Github account.
1. Clone the forked repository into your computer.
1. Install dependencies with npm: Run `npm install`.
1. Compile and start the application: Run `npm start`.

-----------------------------------------------------------------------------------

## Dev commands

Given below are different commands you can run to build the application in different operating systems.

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

We have a GitHub Actions' workflow that can perform some of the tasks above with a single-click.

-----------------------------------------------------------------------------------

## Debugging

If you are using Visual Studio Code to debug CATcher with Chrome, Firefox or Edge.
Refer to the `Debugging Angular` section of [this guide](https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular) for a step-by-step walkthrough of the debugger setup.

In summary, the following steps are needed:

1. Install the `Debugger for Chrome` extension for VS Code. You can also install debugger extensions for Firefox and Edge.
1. Create VS Code's debugger config file (`launch.json` ) as shown in [the guide](https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular). Particularly, set the `url` attribute to `http://localhost:4200` (reason: CATcher app is served locally on port 4200, by default.)
1. In the root project folder, run `npm run ng:serve:web`.
1. In VS Code's Debug View, launch the debugger by clicking the green arrow (or F5). You should see the CATcher app loading within a new browser window.

-----------------------------------------------------------------------------------

## Writing Documentation

**CATcher documentation is hosted in a separate repo** [CATcher-org/catcher-org.github.io](https://github.com/CATcher-org/catcher-org.github.io).
When you need to update documentation, you'll need to fork and clone that repo to your computer as well.

**We use [MarkBind](https://markbind.org/) for documentation**. Follow [this tutorial](https://se-education.org/guides/tutorials/markbind.html) to learn how to use MarkBind for updating project documentation.

-----------------------------------------------------------------------------------

## Tasks To Self-Test Knowledge

These tasks assume basic understanding of `Angular` and `TypeScript`.
If you wish to know more about them, you can visit our [tools page](tools.html).

### Backend

### Frontend

<panel header="**Task 1: Make error snack bars automatically close**" type="primary">

  **Task 1: Make error snack bars automatically close**

  ![](../images/error-snackbar.png)

  1. To help you see the error snack bar, first launch your `CATcher` locally.
  2. Enter `null` inside Settings Location input and click submit.
  3. On the bottom of your browser, a pop-up "Failed to fetch settings file." should appear.
  4. If you wait long enough, you will see that it doesn't close by itself, you have to manually click the close button.

  **Your Task**

  Make the error snack bar shown above dissapear automatically after 3 seconds of showing up.

  <panel header="Hint 1" type="info">

  First, you need to be able to locate which are the files responsible for error handling.
  When searching for related files, knowing the name of the frontend component you are working with is often useful.
  In this task, the name of the frontend component is `MatSnackBar`. Try to search where it's being used.
  For more information on `MatSnackBar` itself, you can read the documentation [here](https://material.angular.io/components/snack-bar/overview).

  </panel>

  <panel header="Hint 2" type="info">

  You should find that our related file is `error-handling.service.ts`.
  All that's left is just to figure out how to tell `snackBar` to close after a certain amount of time has passed.
  There are multiple ways to do this. One way is to use `setTimeout` function on the `snackBarRef.dismiss()` like this:
  ```typescript
  const snackBarRef = this.snackBar.openFromComponent(GeneralMessageErrorComponent, {data: error});
  setTimeout(() => {
    snackBarRef.dismiss();
  }, this.snackBarAutoCloseTime);
  ```

  </panel>

  <panel header="Suggested solution" type="info">

  There is more than 1 way to achieve this. By combining the changes in hint 1 and hint 2, you should be able to get a possible solution.
  <panel header="error-handling.service.ts" type="success">

  ```typescript
  import { ErrorHandler, Injectable } from '@angular/core';
  import { MatSnackBar, MatSnackBarRef } from '@angular/material';
  import { GeneralMessageErrorComponent } from '../../shared/error-toasters/general-message-error/general-message-error.component';
  import { FormErrorComponent } from '../../shared/error-toasters/form-error/form-error.component';
  import { HttpErrorResponse } from '@angular/common/http';
  import { RequestError } from '@octokit/request-error';
  import { LoggingService } from './logging.service';

  export const ERRORCODE_NOT_FOUND = 404;

  const FILTERABLE = ['node_modules'];

  @Injectable({
    providedIn: 'root',
  })
  export class ErrorHandlingService implements ErrorHandler {
    snackBarAutoCloseTime = 3000;

    constructor(private snackBar: MatSnackBar, private logger: LoggingService) {}

    handleError(error: HttpErrorResponse | Error | RequestError, actionCallback?: () => void) {
      this.logger.error(error);
      if (error instanceof Error) {
        this.logger.error(this.cleanStack(error.stack));
      }
      if (error instanceof HttpErrorResponse || error instanceof RequestError) {
        this.handleHttpError(error, actionCallback);
      } else {
        this.handleGeneralError(error.message || JSON.stringify(error));
      }
    }

    private addAutoClose<T>(snackBarRef: MatSnackBarRef<T>) {
      setTimeout(() => {
        snackBarRef.dismiss();
      }, this.snackBarAutoCloseTime);
    }

    private cleanStack(stacktrace: string): string {
      return stacktrace
              .split('\n')
              .filter(line => !FILTERABLE.some(word => line.includes(word))) // exclude lines that contain words in FILTERABLE
              .join('\n');
    }

    // Ref: https://developer.github.com/v3/#client-errors
    private handleHttpError(error: HttpErrorResponse | RequestError, actionCallback?: () => void): void {
      let snackBarRef = null;
      // Angular treats 304 Not Modified as an error, we will ignore it.
      if (error.status === 304) {
        return;
      }

      if (!navigator.onLine) {
        snackBarRef = this.handleGeneralError('No Internet Connection');
        this.addAutoClose(snackBarRef);
        return;
      }

      switch (error.status) {
        case 500: // Internal Server Error.
          snackBarRef = this.snackBar.openFromComponent(GeneralMessageErrorComponent, {data: error});
          break;
        case 422: // Form errors
          snackBarRef = this.snackBar.openFromComponent(FormErrorComponent, {data: error});
          break;
        case 400: // Bad request
        case 401: // Unauthorized
        case 404: // Not found
          snackBarRef = this.snackBar.openFromComponent(GeneralMessageErrorComponent, {data: error});
          break;
        default:
          snackBarRef = this.snackBar.openFromComponent(GeneralMessageErrorComponent, {data: error});
      }

      if (snackBarRef) {
        this.addAutoClose(snackBarRef);
      }
    }

    private handleGeneralError(error: string): void {
      const snackBarRef = this.snackBar.openFromComponent(GeneralMessageErrorComponent, {data: {message: error}});
      this.addAutoClose(snackBarRef);
    }
  }
  ```

  </panel>

  </panel>

</panel>
