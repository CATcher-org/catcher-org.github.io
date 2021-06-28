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

## Creating a release

Follow these steps to create a release using this workflow:
- Create and Merge a Pull Request that updates the version of the application in the `package.json` file.
- Navigate to the 'Actions' Tab of the `CATcher` repository and start the `Draft Deployment` Workflow. This workflow deploys the web app and creates a Draft Release containing the desktop app's executables
- Edit the Draft Release and update the description with a changelog of recently merged Pull Requests.
- Publish the release.

-------------------------------------------------------------------------------------

## Releasing a new version

Releasing a new version of CATcher involves the following steps:
- Update CATcher's version number in `package.json`
- Build the CATcher desktop application's executables for Linux, MacOS and Windows
- Build the CATcher web app, and then deploy it onto our GitHub Pages site (https://catcher-org.github.io/CATcher/)
- Create a release on GitHub, upload the desktop app's executables and write a changelog that describes any new features or bug fixes.
