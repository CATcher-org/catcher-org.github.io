<frontmatter>
  header: header.md
  pageNav: 2
  pageNavTitle: "Chapters of This Page"
  siteNav: dg-nav.md
  footer: footer.md
</frontmatter>

# Getting Started

1. [Setting Up](#setting-up)
    1. [Prerequisites](#prerequisites)
    2. [Steps for Setting Up](#steps-for-setting-up)
    3. [Debugging with Visual Studio Code](#debugging-with-visual-studio-code)
2. [Commands](#commands)
3. [Good First Issues](#good-first-issues)
4. [Releasing a New Version of CATcher](#releasing-a-new-version-of-catcher)

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

<div class="clearfix">
  <p>
    <span class="float-left">
      <a class="btn btn-light" href="{{ baseUrl }}/dg/workflow.html">
        <span aria-hidden="true" class="far fa-arrow-alt-circle-left"></span>
        <span> Workflow of CATcher</span>
      </a>
    </span>
    <span class="float-right">
      <a class="btn btn-light" href="{{ baseUrl }}/dg/future-developments.html">
        <span>Future Developments </span>
        <span aria-hidden="true" class="far fa-arrow-alt-circle-right"></span>
      </a>
    </span>
  </p>
</div>
<br/>