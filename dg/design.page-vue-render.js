
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/CATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_m(0)],1),_v(" "),_m(1)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"design"}},[_c('span',{staticClass:"anchor",attrs:{"id":"design"}}),_v("Design"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As described in the "),_c('a',{attrs:{"href":"/dg/tools.html"}},[_c('em',[_v("Tools")])]),_v(" section, CATcher is an Angular application that is distributed as a web app.")]),_v(" "),_c('p',[_v("This page describes CATcher's design. As an Angular application, the different\nviews of the CATcher app are built out of "),_c('strong',[_v("components")]),_v(", and the content displayed on these\nviews is constructed using data provided by "),_c('strong',[_v("services")]),_v(". In the following sections we will briefly describe the design of some views and services within CATcher.")]),_v(" "),_c('h2',{attrs:{"id":"views"}},[_c('span',{staticClass:"anchor",attrs:{"id":"views"}}),_v("Views"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#views","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("There are only a few views accessible by the user, in each phase of the practical exam.")]),_v(" "),_c('p',[_v("The diagram below shows how a user can navigate between the different views in the bug reporting phase.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/images/views-traversal.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/images/views-traversal.png","alt":""}})])]),_v(" "),_c('p',[_v("Each view is built out of components.\nAs an example, the following diagram deconstructs the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ViewIssueComponent")]),_v(", which is used to display / update details about a bug report (i.e. the title, tester's original report, team's response, etc), to show how it is built using several smaller components.\nFor instance, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TitleComponent")]),_v(", a child component of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ViewIssueComponent")]),_v(", is responsible for\ndisplaying / updating the bug report's title.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/images/large-component.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/images/large-component.png","alt":""}})])]),_v(" "),_c('h2',{attrs:{"id":"services"}},[_c('span',{staticClass:"anchor",attrs:{"id":"services"}}),_v("Services"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#services","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Services are classes that define business logic or communicate with the app's backend (GitHub). For ease of understanding, we have distinct services for the different types of data exchanged with the backend. Below are some examples:")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IssueService")]),_v(": Responsible for creating / updating issues, and periodically fetching issues from GitHub.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AuthService")]),_v(": Responsible for initiating the authentication process, and querying / updating application state related to authentication.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LabelService")]),_v(": Responsible for ensuring the GitHub repo has the required labels, and providing label data to various components.")])]),_v(" "),_c('p',[_v("Under the hood, several services use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GitHubService")]),_v(" to communicate with GitHub.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GitHubService")]),_v(" abstracts the details of communication with GitHub, away from the other services.")]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")]),_v(", generated on Sat, 30 Sept 2023, 18:09:07 UTC]")])])])}
}];
  