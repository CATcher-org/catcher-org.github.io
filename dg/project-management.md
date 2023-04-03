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
|`npm run deploy:web`| Will deploy the app onto the Github's `gh-pages` branch. <br/> Prerequisites:<br/> 1. Add Environment variable of `GH_TOKEN=<Github Personal Access Token>` with the permission of `repo`. <br/>2. `build:prod:web` command's `--base-href` argument in `package.json` must have the following format `https://<OrgName or Username>.github.io/CATcher/`. <br/> 3. If you are deploying outside of CATcher-org then it would be necessary to create a new OAuth application and change the `clientId` in `environment.prod.ts` <br/> 4. If you are deploying outside of CATcher-org, you would also need to deploy your own instance of proxy server using [gatekeeper](https://github.com/CATcher-org/gatekeeper) and change the appropriate variables in `environment.prod.ts`. |

-------------------------------------------------------------------------------------

## Automated release

Follow these steps to release a new version of CATcher using a GitHub Actions' workflow.
1. Create and merge a Pull Request that updates CATcher's version number in the `package.json` file.
2. Navigate to the `Actions` Tab of the `CATcher` repository and start the `Version Deployment` Workflow.
    - This workflow deploys the web app
3. Edit the Draft Release:
    - Update the description with a changelog that describes any new features or bug fixes
4. Publish the release.

-------------------------------------------------------------------------------------

## Manual release

Follow these steps to manually release a new version of CATcher:
1. Create and merge a Pull Request that updates CATcher's version number in the `package.json` file.
2. Build the CATcher web application, and then deploy it onto CATcher's [GitHub Pages site](https://catcher-org.github.io/CATcher/)
3. Create a release on GitHub:
    - Under the description, include a changelog that describes any new features or bug fixes
4. Publish the release.
