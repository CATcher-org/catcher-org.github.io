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

## Automated release

Follow these steps to create an automated release using this workflow:
1. Create and merge a Pull Request that updates CATcher's version number in the `package.json` file.
2. Navigate to the `Actions` Tab of the `CATcher` repository and start the `Draft Deployment` Workflow.
    - This workflow deploys the web app and creates a Draft Release containing the desktop app's executables
3. Edit the Draft Release:
    - Update the description with a changelog that describes any new features or bug fixes
4. Publish the release.

-------------------------------------------------------------------------------------

## Manual release

Follow these steps to create a manual release:
1. Create and merge a Pull Request that updates CATcher's version number in the `package.json` file.
2. Build the CATcher desktop application's executables for Linux, MacOS and Windows
3. Build the CATcher web application, and then deploy it onto CATcher's [GitHub Pages site](https://catcher-org.github.io/CATcher/)
4. Create a release on GitHub:
    - Upload the desktop app's executables
    - Under the description, include a changelog that describes any new features or bug fixes
5. Publish the release.
