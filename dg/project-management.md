<frontmatter>
  header: header.md
  title: "DG: Project management"
  pageNav: 2
  siteNav: dg-nav.md
  footer: footer.md
</frontmatter>

# Project management

This page contains info relevant to project management activities, typically done by senior dev team members.

-------------------------------------------------------------------------------------

## Dev commands

Given below are different commands you can run to build the application in different operating systems.

|Command|Description|
|--|--|
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| ~~Builds your application and start electron~~ |
|`npm run electron:linux`| ~~Builds your application and creates an app consumable on linux system~~ |
|`npm run electron:windows`| ~~On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems~~ |
|`npm run electron:mac`|  ~~On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac~~ |
|`npm run deploy:web`| Will deploy the app onto the Github's `gh-pages` branch. <br/> Prerequisites:<br/> 1. Add Environment variable of `GH_TOKEN=<Github Personal Access Token>` with the permission of `repo`. <br/>2. `build:prod:web` command's `--base-href` argument in `package.json` must have the following format `https://<OrgName or Username>.github.io/CATcher/`. <br/> 3. If you are deploying outside of CATcher-org then it would be necessary to create a new OAuth application and change the `clientId` in `environment.prod.ts` <br/> 4. If you are deploying outside of CATcher-org, you would also need to deploy your own instance of proxy server using [gatekeeper](https://github.com/CATcher-org/gatekeeper) and change the appropriate variables in `environment.prod.ts`. |

*Note that we are moving towards web-only applications and therefore Electron is currently not supported.*

-------------------------------------------------------------------------------------

## Automated release

Follow these steps to release a new version of CATcher using a GitHub Actions' workflow.
1. Create and merge a Pull Request that updates CATcher's version number in the `package.json` file.
2. Navigate to the `Actions` Tab of the `CATcher` repository and start the `Draft Deployment` Workflow.
    - This workflow deploys the web app and creates a Draft Release containing the desktop app's executables
3. Edit the Draft Release:
    - Update the description with a changelog that describes any new features or bug fixes
4. Publish the release.

-------------------------------------------------------------------------------------

## Manual release

Follow these steps to manually release a new version of CATcher:
1. Create and merge a Pull Request that updates CATcher's version number in the `package.json` file.
2. Build the CATcher desktop application's executables for Linux, MacOS and Windows
3. Build the CATcher web application, and then deploy it onto CATcher's [GitHub Pages site](https://catcher-org.github.io/CATcher/)
4. Create a release on GitHub:
    - Upload the desktop app's executables
    - Under the description, include a changelog that describes any new features or bug fixes
5. Publish the release.
