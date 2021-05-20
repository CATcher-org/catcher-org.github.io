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

---

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

---

## Debugging

If you are using Visual Studio Code to debug CATcher with Chrome, Firefox or Edge.
Refer to the `Debugging Angular` section of [this guide](https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular) for a step-by-step walkthrough of the debugger setup.

In summary, the following steps are needed:

1. Install the `Debugger for Chrome` extension for VS Code. You can also install debugger extensions for Firefox and Edge.
1. Create VS Code's debugger config file (`launch.json` ) as shown in [the guide](https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular). Particularly, set the `url` attribute to `http://localhost:4200` (reason: CATcher app is served locally on port 4200, by default.)
1. In the root project folder, run `npm run ng:serve:web`.
1. In VS Code's Debug View, launch the debugger by clicking the green arrow (or F5). You should see the CATcher app loading within a new browser window.

