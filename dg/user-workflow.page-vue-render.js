
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/CATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_c('p',[_v("The diagram below shows what happens in various phases of a CATcher-assisted "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("i.e., Practical Exam")]},proxy:true}])},[_v("PE")]),_v(".")],1),_v(" "),_m(2),_v(" "),_c('p',[_v("Here is a brief explanation of each phase:")]),_v(" "),_m(3),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("During the PE dry run (which has only one phase and the anonymity is not required), the script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S1c")]),_v(" transfers bugs directly to the receiving team's issue tracker.")])]),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('p',[_v("More detail of the things mentioned above are given in the sections below.")]),_v(" "),_c('hr'),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_c('hr'),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_v("Issue title remains the same as the original issue, throughout the workflow")])]),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Formats used")])]},proxy:true}])},[_v(" "),_c('p',[_v("Issue body:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("{original issue description}\n")]),_c('span',[_v("\n")]),_c('span',[_v("<hr>\n")]),_c('span',[_v("<sub>[original: username/interim-repo-name#issue-number]</sub>\n")])])]),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("The app doesn't work\n")]),_c('span',[_v("\n")]),_c('span',[_v("<hr>\n")]),_c('span',[_v("<sub>[original: johnDoe/pe#1234]</sub>\n")])])])]),_v(" "),_c('p',[_v("Notes:")]),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Formats used")])]},proxy:true}])},[_v(" "),_c('p',[_v("Body:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("{issue description: same as interim}\n")]),_c('span',[_v("\n")]),_c('span',[_v("<hr>\n")]),_c('span',[_v("<sub>[original: module-org/interim-repo-name#issue-number]</sub>\n")])])])]),_v(" "),_c('p',[_v("Notes:")]),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('hr'),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Formats used")])]},proxy:true}])},[_v(" "),_c('p',[_v("Body:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("{same as interim repo}\n")])])]),_c('p',[_v("Add a comment:")]),_v(" "),_c('div',{attrs:{"id":"team-response-format"}},[_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Team's Response\n")]),_c('span',[_v("\n")]),_c('span',[_v("{team's response}\n")]),_c('span',[_v("\n")]),_c('span',[_v("## Duplicate status (if any):\n")]),_c('span',[_v("Duplicate of #{issue-number}\n")])])]),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Team's Response\n")]),_c('span',[_v("Yes, we missed this.\n")]),_c('span',[_v("But it's a minor bug.\n")]),_c('span',[_v("\n")]),_c('span',[_v("## Duplicate status (if any):\n")]),_c('span',[_v("Duplicate of #1234\n")])])])])]),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_c('panel',{attrs:{"type":"seamless","id":"tester-response-format"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Formats used")])]},proxy:true}])},[_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Team's Response\n")]),_c('span',[_v("\n")]),_c('span',[_v("{team's response}\n")]),_c('span',[_v("\n")]),_c('span',[_v("# Items for the Tester to Verify\n")]),_c('span',[_v("## :question: {type of verification}\n")]),_c('span',[_v("\n")]),_c('span',[_v("{description}\n")]),_c('span',[_v("\n")]),_c('span',[_v("- [ ] I disagree\n")]),_c('span',[_v("\n")]),_c('span',[_v("**Reason for disagreement:**\n")]),_c('span',[_v("[replace this with your reason]\n")]),_c('span',[_v("\n")]),_c('span',[_v("<catcher-end-of-segment>\n")])])]),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Team's Response\n")]),_c('span',[_v("\n")]),_c('span',[_v("Description of team's response\n")]),_c('span',[_v("# Items for the Tester to Verify\n")]),_c('span',[_v("## :question: Issue response\n")]),_c('span',[_v("\n")]),_c('span',[_v("Team chose `Rejected`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("- [ ] I disagree\n")]),_c('span',[_v("\n")]),_c('span',[_v("**Reason for disagreement:**\n")]),_c('span',[_v("[replace this with your reason]\n")]),_c('span',[_v("\n")]),_c('span',[_v("<catcher-end-of-segment>\n")]),_c('span',[_v("## :question: Issue severity\n")]),_c('span',[_v("\n")]),_c('span',[_v("Team chose `Low`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Originally `High`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("- [ ] I disagree\n")]),_c('span',[_v("\n")]),_c('span',[_v("**Reason for disagreement:**\n")]),_c('span',[_v("[replace this with your reason]\n")]),_c('span',[_v("\n")]),_c('span',[_v("<catcher-end-of-segment>\n")]),_c('span',[_v("## :question: Issue type\n")]),_c('span',[_v("\n")]),_c('span',[_v("Team chose `DocumentationBug`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Originally `FunctionalityBug`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("- [ ] I disagree\n")]),_c('span',[_v("\n")]),_c('span',[_v("**Reason for disagreement:**\n")]),_c('span',[_v("[replace this with your reason]\n")]),_c('span',[_v("\n")]),_c('span',[_v("<catcher-end-of-segment>\n")])])])]),_v(" "),_c('p',[_v("Notes:")]),_v(" "),_m(22),_v(" "),_c('hr'),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_c('p',[_v("Update the comment.")]),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Formats used")])]},proxy:true}])},[_v(" "),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("## :question: Issue type\n")]),_c('span',[_v("\n")]),_c('span',[_v("Team chose `DocumentationBug`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Originally `FunctionalityBug`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("- [x] I disagree\n")]),_c('span',[_v("\n")]),_c('span',[_v("**Reason for disagreement:**\n")]),_c('span',[_v("It's a bug, not a typo.\n")]),_c('span',[_v("\n")]),_c('span',[_v("<catcher-end-of-segment>\n")])])])]),_v(" "),_m(25),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Formats used")])]},proxy:true}])},[_v(" "),_c('p',[_v("Body:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Issue Description\n")]),_c('span',[_v("{original issue description}\n")]),_c('span',[_v("\n")]),_c('span',[_v("# Team's Response\n")]),_c('span',[_v("{team's response}\n")]),_c('span',[_v("\n")]),_c('span',[_v("# Disputes\n")]),_c('span',[_v("\n")]),_c('span',[_v("## :question: {type of verification}\n")]),_c('span',[_v("\n")]),_c('span',[_v("### Team says:\n")]),_c('span',[_v("{the team's action that is being disputed}\n")]),_c('span',[_v("\n")]),_c('span',[_v("### Tester says:\n")]),_c('span',[_v("{tester's objection}\n")]),_c('span',[_v("\n")])])]),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("...\n")]),_c('span',[_v("# Disputes\n")]),_c('span',[_v("## :question: Issue type\n")]),_c('span',[_v("### Team says:\n")]),_c('span',[_v("\n")]),_c('span',[_v("Team chose `DocumentationBug`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("Originally `FunctionalityBug`.\n")]),_c('span',[_v("\n")]),_c('span',[_v("### Tester says:\n")]),_c('span',[_v("I think it a functionality bug.\n")]),_c('span',[_v("The feature doesn't work. It's nothing to do with docs.\n")])])])]),_v(" "),_m(26),_v(" "),_c('hr'),_v(" "),_m(27),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_v("This phase is not currently handled by CATcher. Instead, tutors do this phase by editing issues through the GitHub Web interface directly.")])]),_v(" "),_m(28),_v(" "),_m(29),_v(" "),_c('panel',{attrs:{"type":"seamless"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Formats used")])]},proxy:true}])},[_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Tutor Moderation\n")]),_c('span',[_v("\n")]),_c('span',[_v("## {type of verification}\n")]),_c('span',[_v("\n")]),_c('span',[_v("{tutor explanation}\n")])])]),_c('p',[_v("Example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("# Tutor moderation\n")]),_c('span',[_v("## :question: Issue severity\n")]),_c('span',[_v("- [x] Done\n")]),_c('span',[_v("\n")]),_c('span',[_v("I think it is justified.\n")]),_c('span',[_v("## :question: Issue type\n")]),_c('span',[_v("- [x] Done\n")]),_c('span',[_v("\n")]),_c('span',[_v("Not justified. I've changed it back.\n")])])])]),_v(" "),_m(30),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1)],1),_v(" "),_m(31)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"user-workflow"}},[_c('span',{staticClass:"anchor",attrs:{"id":"user-workflow"}}),_v("User workflow"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-workflow","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"overview"}},[_c('span',{staticClass:"anchor",attrs:{"id":"overview"}}),_v("Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#overview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/images/user-workflow.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/images/user-workflow.png","alt":""}})])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("Bug reporting phase")]),_v(" "),_c('ol',[_c('li',[_v("Student testers test the software they have been assigned and report bugs through CATcher.\nThese bugs are stored in a repo in the tester's GitHub account. e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tester/pe")]),_v(".")]),_v(" "),_c('li',[_v("After the testing session is over, a script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S1a")]),_v(" transfers the bugs to an interim private repository (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("module-org/pe-interim")]),_v("), and another script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S1b")]),_v(" transfers the bugs from the interim repo to a central repo e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("module-org/pe-dev-response")]),_v("."),_c('br'),_v("\nBugs are channelled through an interim repo to hide the identity of the tester."),_c('br'),_v("\nScripts used to transfer/process bugs between phases are not part of CATcher codebase at the moment. They are managed separately by teaching staff members.")])])])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"2"}},[_c('li',[_c('strong',[_v("Dev response phase")]),_v(" "),_c('ol',[_c('li',[_v("Dev teams (i.e., teams that developed the target products) use CATcher to respond to bugs they received.")]),_v(" "),_c('li',[_v("At the end, a script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S2")]),_v(" transfers dev team's response back to the original bug reports in the tester's GitHub account e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tester/pe")]),_v(".")])])]),_v(" "),_c('li',[_c('strong',[_v("Tester response phase")]),_v(" "),_c('ol',[_c('li',[_v("Testers use CATcher to provide their own response to the dev team's response.")]),_v(" "),_c('li',[_v("At the end, a script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S3")]),_v(" transfers the tester's response to another private repository e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("module-org/pe-moderation")]),_v(" that tutors can access.")])])]),_v(" "),_c('li',[_c('strong',[_v("Moderation phase")]),_v(" "),_c('ol',[_c('li',[_v("Tutors give their own inputs on bugs that caused disputes between the tester and the dev team.")]),_v(" "),_c('li',[_v("At the end, a script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S4")]),_v(" generates a final report and marks.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("The "),_c('em',[_v("settings")]),_v(" repo")]),_v(": CATcher behavior for the above phases are dictated by config data stored in a public repository we call the "),_c('em',[_v("settings")]),_v(" repo e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("module-org/pe")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"the-settings-repo"}},[_c('span',{staticClass:"anchor",attrs:{"id":"the-settings-repo"}}),_v("The "),_c('em',[_v("settings")]),_v(" repo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#the-settings-repo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Each PE must have its own settings repo, which is a public repository containing config data that govern the behavior of CATcher e.g., which phase is open, which students are taking part, names used for various repos etc."),_c('br'),_v("\nFor example, the module instructor can "),_c('em',[_v("open")]),_v(" a phase (i.e., allow students to do that phase through CATcher) by modifying the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("settings.json")]),_v(" file in the settings repo.")]),_v(" "),_c('li',[_v("An example "),_c('a',{attrs:{"href":"https://github.com/nus-cs2103-AY2021S2/pe"}},[_v("https://github.com/nus-cs2103-AY2021S2/pe")])]),_v(" "),_c('li',[_v("The settings repo is also used to hold files uploaded by students (e.g., screenshots). CATcher initially uploads those files to the same repo that holds the bug. But our scripts copy those files to the settings repo so that the identity of the uploader cannot be discovered using the file URL.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"bug-reporting-phase"}},[_c('span',{staticClass:"anchor",attrs:{"id":"bug-reporting-phase"}}),_v("Bug Reporting Phase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bug-reporting-phase","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"catcher-collect-bug-reports"}},[_c('span',{staticClass:"anchor",attrs:{"id":"catcher-collect-bug-reports"}}),_v("[CATcher] Collect Bug Reports"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#catcher-collect-bug-reports","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Title and body as the tester entered.")]),_v(" "),_c('li',[_v("Labels: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("severity.*")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.*")]),_v(" (both compulsory)")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"script-s1a-tester-repo-interim-repo"}},[_c('span',{staticClass:"anchor",attrs:{"id":"script-s1a-tester-repo-interim-repo"}}),_v("[Script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S1a")]),_v("] Tester-Repo → Interim-Repo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#script-s1a-tester-repo-interim-repo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Only open issues are to be transferred.")]),_v(" "),_c('li',[_v("Copy the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("severity.*")]),_v(" label. If no severity label, apply "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("severity.Low")])]),_v(" "),_c('li',[_v("Copy the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.*")]),_v(" label.")]),_v(" "),_c('li',[_v("Transfer image files to the settings repo (public) and update the link in the issue body.")]),_v(" "),_c('li',[_v("Check the timestamp. Only bugs reported within the PE period should be transferred. Add a comment to issues falling outside the accepted time window.\n"),_c('blockquote',[_c('p',[_v("Bug report not accepted as it was modified outside the time window "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{start time}-{end time}")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"script-s1b-interim-repo-dev-repo"}},[_c('span',{staticClass:"anchor",attrs:{"id":"script-s1b-interim-repo-dev-repo"}}),_v("[Script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S1b")]),_v("] Interim-Repo → Dev-Repo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#script-s1b-interim-repo-dev-repo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Copy all labels")]),_v(" "),_c('li',[_v("Apply the correct "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutorial.*")]),_v(" label and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team.*")]),_v(" label to indicate the receiving team")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"script-s1c-in-the-dry-run-tester-repo-team-repo"}},[_c('span',{staticClass:"anchor",attrs:{"id":"script-s1c-in-the-dry-run-tester-repo-team-repo"}}),_v("[Script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S1c")]),_v("] In the dry run: Tester-Repo → Team-Repo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#script-s1c-in-the-dry-run-tester-repo-team-repo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Transfer the bug report to the respective team repo.")]),_v(" "),_c('li',[_v("Labels are to be omitted (as the script doesn't have permission to add labels in team's repo) but mentioned in the body of the issue (for reference).")]),_v(" "),_c('li',[_v("Image links can be kept as they are, as tester anonymity is not required.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"dev-response-phase"}},[_c('span',{staticClass:"anchor",attrs:{"id":"dev-response-phase"}}),_v("Dev Response Phase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#dev-response-phase","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"catcher-collect-dev-response"}},[_c('span',{staticClass:"anchor",attrs:{"id":"catcher-collect-dev-response"}}),_v("[CATcher] Collect Dev Response"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#catcher-collect-dev-response","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Labels: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("severity.*")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.*")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("response.*")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("duplicate")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"script-s2-dev-repo-tester-repo"}},[_c('span',{staticClass:"anchor",attrs:{"id":"script-s2-dev-repo-tester-repo"}}),_v("[Script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S2")]),_v("] Dev-Repo → Tester-Repo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#script-s2-dev-repo-tester-repo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Add a comment to the original issue in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tester/repo-name")]),_v(", in the following format:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If the issue is a duplicate, it should be considered as using severity, type, and response from the \"original\" issue.")]),_v(" "),_c('li',[_v("If the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("response.*")]),_v(" is missing, add "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("response.Accepted")]),_v(" to the destination issue (not the source issue).")]),_v(" "),_c('li',[_v("If the dev response contains images, they need to be transferred to the settings repo as well")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"tester-response-phase"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tester-response-phase"}}),_v("Tester Response Phase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tester-response-phase","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"catcher-collect-tester-response"}},[_c('span',{staticClass:"anchor",attrs:{"id":"catcher-collect-tester-response"}}),_v("[CATcher] Collect Tester Response"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#catcher-collect-tester-response","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"script-s3-tester-repo-tutor-repo"}},[_c('span',{staticClass:"anchor",attrs:{"id":"script-s3-tester-repo-tutor-repo"}}),_v("[Script "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("S3")]),_v("] Tester-Repo → Tutor-Repo"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#script-s3-tester-repo-tutor-repo","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Labels to be copied from the dev-response repo: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("severity")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("response")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutorial")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("team")])]),_v(" "),_c('li',[_v("The script will also generate a label based on the number of Disputes (e.g "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pending.2")]),_v(" for issue with two disputes)")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"moderation-phase"}},[_c('span',{staticClass:"anchor",attrs:{"id":"moderation-phase"}}),_v("Moderation Phase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#moderation-phase","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"catcher-collect-tutor-response"}},[_c('span',{staticClass:"anchor",attrs:{"id":"catcher-collect-tutor-response"}}),_v("[CATcher] Collect Tutor Response"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#catcher-collect-tutor-response","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Show ticks for each dispute")]),_v(" "),_c('li',[_v("Add a comment to record tutor response")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Allow tutor to change other labels")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pending.x")]),_v(" label will be removed if all tasks are done")]),_v(" "),_c('li',[_v("Allow adding an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Unsure")]),_v(" label, in case the tutor is unsure about the decision")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")]),_v(", generated on Thu, 16 Feb 2023, 7:04:57 UTC]")])])])}
}];
  