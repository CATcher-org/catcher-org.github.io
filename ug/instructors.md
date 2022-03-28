<frontmatter>
  header: header.md
  title: "UG: for instructors"
  pageNav: 2
  siteNav: ug-nav.md
  footer: footer.md
</frontmatter>

# CATcher User Guide (for instructors)

This document is only relevant for instructors who has plays the admin role of a PE.

--------------------------------------------------------------------------------------------

## Configuring the organization

The host Github organization must have the following settings:
1. Ensure `Base Permissions` is set to `None`.
    1. Under `Settings` page of your organization, click on `Member privileges` navigation tab.
    2. Under `Base permissions`, select `None`.
3. Create a `students` team.
4. Create a `tutors` team.
5. Invite github users into their respective teams.
6. Start CATcher app and log in by clicking on the OAuth button. Authorize OAuth app access to your account.
7. **Request access** to your organization as shown in this [tutorial](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps).
8. **Grant** CATcher OAuth App access into the organization as shown in this [tutorial](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization).

--------------------------------------------------------------------------------------------

## Setting up repositories

For each phase, users with write access will be able to upload files (e.g. screenshots, .txt files, etc...) onto the repository's `/file` folder. These files are used in conjunction with issue description and comments in a form of a link. As for images, the actual image will be displayed.

Instructors will have to create the following repositories:
* Settings repository
* Profile repository
* Repositories for holding processed bug reports

The following repositories will be created automatically by CATcher:
* Repositories for collecting initial bug reports


#### Settings repository
* Suggested name: `module-org/pe`
* The name of this repository must be stated in the application during login. This repository must contain a **`data.csv`** and a **`settings.json`** file.
* **`data.csv`**
  * Must contain the following information:
    1. Roles of users. (Student, Tutor, Admin)
    2. Student's team allocation.
    3. Tutor's team allocation.
  * Example https://github.com/CATcher-org/public_data/blob/master/data.csv
* **`settings.json`**:
  * Must contain the following information:
    1. The list of open phases represented by `"openPhases": []`.
    2. The name of the repository that each phase is to utilize.
  * Example https://github.com/CATcher-org/public_data/blob/master/settings.json

#### Profile repository
* Suggested name: `client_data`

This repository must contain a **`profiles.json`** file.

* **`profiles.json`**
  * Must contain the following information:
    1. Profile Name
    2. Name of Settings repository
  * Example https://github.com/CATcher-org/client_data/blob/master/profiles.json


#### Repositories for collecting initial bug reports

The repositories used for initial bug reporting will be created automatically by CATcher, in the tester's own GitHub account e.g., `user/pe`. The same repo will be used during the tester-response phase.

#### Repositories for holding processed bug reports
* A private repo to host collected bug reports e.g., `module-org/pe-interim`.
* A repo to host anonymized bug reports for dev teams to respond to e.g., `module-org/pe-dev-response`<br>
  This must be a public repo with write access given to students.
* A repo to hold bugs for tutors to moderate e.g., `module-org/pe-moderation`<br>
  This can be a private repo with write access given to tutors.
  

## Creating a session link for students

A list of profiles can be modified in the Profile repository. 

To create a session link, instructors will need to encode this url `https://catcher-org.github.io/CATcher/?session=PROFILE_NAME` where `PROFILE_NAME` is the profile name of the session. This profile name must correspond exactly to the profile name in the Profile repository. 

For example, for profile name `"CS2103/T Alpha Test"`, the url will be `https://catcher-org.github.io/CATcher/?session=CS2103%2FT%20Alpha%20Test`.

If the profile name is valid, students can access the link to select the corresponding session automatically. Students can then click the Submit button to enter the intended session without selecting from the dropdown.