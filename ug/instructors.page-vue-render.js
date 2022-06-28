
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/CATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("USER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/ug/index.html"}},[_v("For students")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/ug/instructors.html"}},[_v("For instructors")])])])])],1)],1)])]),_v(" "),_m(0)],1),_v(" "),_m(1)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"catcher-user-guide-for-instructors"}},[_c('span',{staticClass:"anchor",attrs:{"id":"catcher-user-guide-for-instructors"}}),_v("CATcher User Guide (for instructors)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#catcher-user-guide-for-instructors","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This document is only relevant for instructors who has plays the admin role of a PE.")]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"configuring-the-organization"}},[_c('span',{staticClass:"anchor",attrs:{"id":"configuring-the-organization"}}),_v("Configuring the organization"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#configuring-the-organization","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The host Github organization must have the following settings:")]),_v(" "),_c('ol',[_c('li',[_v("Ensure "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Base Permissions")]),_v(" is set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("None")]),_v(".\n"),_c('ol',[_c('li',[_v("Under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Settings")]),_v(" page of your organization, click on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Member privileges")]),_v(" navigation tab.")]),_v(" "),_c('li',[_v("Under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Base permissions")]),_v(", select "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("None")]),_v(".")])])]),_v(" "),_c('li',[_v("Create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("students")]),_v(" team.")]),_v(" "),_c('li',[_v("Create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutors")]),_v(" team.")]),_v(" "),_c('li',[_v("Invite github users into their respective teams.")]),_v(" "),_c('li',[_v("Start CATcher app and log in by clicking on the OAuth button. Authorize OAuth app access to your account.")]),_v(" "),_c('li',[_c('strong',[_v("Request access")]),_v(" to your organization as shown in this "),_c('a',{attrs:{"href":"https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/requesting-organization-approval-for-oauth-apps"}},[_v("tutorial")]),_v(".")]),_v(" "),_c('li',[_c('strong',[_v("Grant")]),_v(" CATcher OAuth App access into the organization as shown in this "),_c('a',{attrs:{"href":"https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/approving-oauth-apps-for-your-organization"}},[_v("tutorial")]),_v(".")])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"setting-up-repositories"}},[_c('span',{staticClass:"anchor",attrs:{"id":"setting-up-repositories"}}),_v("Setting up repositories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-repositories","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("For each phase, users with write access will be able to upload files (e.g. screenshots, .txt files, etc...) onto the repository's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("/file")]),_v(" folder. These files are used in conjunction with issue description and comments in a form of a link. As for images, the actual image will be displayed.")]),_v(" "),_c('p',[_v("Instructors will have to create the following repositories:")]),_v(" "),_c('ul',[_c('li',[_v("Settings repository")]),_v(" "),_c('li',[_v("Profile repository")]),_v(" "),_c('li',[_v("Repositories for holding processed bug reports")])]),_v(" "),_c('p',[_v("The following repositories will be created automatically by CATcher:")]),_v(" "),_c('ul',[_c('li',[_v("Repositories for collecting initial bug reports")])]),_v(" "),_c('h4',{attrs:{"id":"settings-repository"}},[_c('span',{staticClass:"anchor",attrs:{"id":"settings-repository"}}),_v("Settings repository"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#settings-repository","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Suggested name: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("module-org/pe")])]),_v(" "),_c('li',[_v("The name of this repository must be stated in the application during login. This repository must contain a "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data.csv")])]),_v(" and a "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("settings.json")])]),_v(" file.")]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data.csv")])]),_v(" "),_c('ul',[_c('li',[_v("Must contain the following information:\n"),_c('ol',[_c('li',[_v("Roles of users. (Student, Tutor, Admin)")]),_v(" "),_c('li',[_v("Student's team allocation.")]),_v(" "),_c('li',[_v("Tutor's team allocation.")])])]),_v(" "),_c('li',[_v("Example "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/public_data/blob/master/data.csv"}},[_v("https://github.com/CATcher-org/public_data/blob/master/data.csv")])])])]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("settings.json")])]),_v(":\n"),_c('ul',[_c('li',[_v("Must contain the following information:\n"),_c('ol',[_c('li',[_v("The list of open phases represented by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"openPhases\": []")]),_v(".")]),_v(" "),_c('li',[_v("The name of the repository that each phase is to utilize.")])])]),_v(" "),_c('li',[_v("Example "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/public_data/blob/master/settings.json"}},[_v("https://github.com/CATcher-org/public_data/blob/master/settings.json")])])])])]),_v(" "),_c('h4',{attrs:{"id":"profile-repository"}},[_c('span',{staticClass:"anchor",attrs:{"id":"profile-repository"}}),_v("Profile repository"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#profile-repository","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Suggested name: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("client_data")])])]),_v(" "),_c('p',[_v("This repository must contain a "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("profiles.json")])]),_v(" file.")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("profiles.json")])]),_v(" "),_c('ul',[_c('li',[_v("Must contain the following information:\n"),_c('ol',[_c('li',[_v("Profile Name")]),_v(" "),_c('li',[_v("Name of Settings repository")])])]),_v(" "),_c('li',[_v("Example "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/client_data/blob/master/profiles.json"}},[_v("https://github.com/CATcher-org/client_data/blob/master/profiles.json")])])])])]),_v(" "),_c('h4',{attrs:{"id":"repositories-for-collecting-initial-bug-reports"}},[_c('span',{staticClass:"anchor",attrs:{"id":"repositories-for-collecting-initial-bug-reports"}}),_v("Repositories for collecting initial bug reports"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#repositories-for-collecting-initial-bug-reports","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The repositories used for initial bug reporting will be created automatically by CATcher, in the tester's own GitHub account e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("user/pe")]),_v(". The same repo will be used during the tester-response phase.")]),_v(" "),_c('h4',{attrs:{"id":"repositories-for-holding-processed-bug-reports"}},[_c('span',{staticClass:"anchor",attrs:{"id":"repositories-for-holding-processed-bug-reports"}}),_v("Repositories for holding processed bug reports"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#repositories-for-holding-processed-bug-reports","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("A private repo to host collected bug reports e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("module-org/pe-interim")]),_v(".")]),_v(" "),_c('li',[_v("A repo to host anonymized bug reports for dev teams to respond to e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("module-org/pe-dev-response")]),_c('br'),_v("\nThis must be a public repo with write access given to students.")]),_v(" "),_c('li',[_v("A repo to hold bugs for tutors to moderate e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("module-org/pe-moderation")]),_c('br'),_v("\nThis can be a private repo with write access given to tutors.")])]),_v(" "),_c('h2',{attrs:{"id":"creating-a-session-link-for-students"}},[_c('span',{staticClass:"anchor",attrs:{"id":"creating-a-session-link-for-students"}}),_v("Creating a session link for students"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#creating-a-session-link-for-students","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("A list of profiles can be modified in the Profile repository.")]),_v(" "),_c('p',[_v("To create a session link, instructors will need to encode this url "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("https://catcher-org.github.io/CATcher/?session=PROFILE_NAME")]),_v(" where "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PROFILE_NAME")]),_v(" is the profile name of the session. This profile name must correspond exactly to the profile name in the Profile repository.")]),_v(" "),_c('p',[_v("For example, for profile name "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\"CS2103/T Alpha Test\"")]),_v(", the url will be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("https://catcher-org.github.io/CATcher/?session=CS2103%2FT%20Alpha%20Test")]),_v(".")]),_v(" "),_c('p',[_v("If the profile name is valid, students can access the link to select the corresponding session automatically. Students can then click the "),_c('strong',[_v("Submit")]),_v(" button to enter the intended session without selecting from the dropdown.")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.1.1")]),_v(", generated on Tue, 28 Jun 2022, 14:35:14 UTC]")])])])}
}];
  