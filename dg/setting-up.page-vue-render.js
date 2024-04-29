
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/index.html","title":"Home"}},[_c('img',{attrs:{"src":"/images/catcher_logo.png","width":"40"}})])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/index.html"}},[_v("HOME")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/ug/index.html"}},[_v(" USER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dg/index.html"}},[_v(" DEVELOPER GUIDE ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/about-us.html"}},[_v(" ABOUT US ")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/CATcher-org/CATcher","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"site-nav","tag-name":"nav","to":"site-nav"}},[_c('div',{staticClass:"site-nav-top"},[_c('div',{staticClass:"font-weight-bold mb-2",staticStyle:{"font-size":"1.25rem"}},[_c('span',[_c('strong',[_c('strong',[_v("DEVELOPER GUIDE")])])])])]),_v(" "),_c('div',{staticClass:"nav-component slim-scroll"},[_c('div',[_c('site-nav',[_c('overlay-source',{staticClass:"site-nav-list site-nav-list-root",attrs:{"tag-name":"ul","to":"mb-site-nav"}},[_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/index.html"}},[_v("DG Home")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/user-workflow.html"}},[_v("User workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/tools.html"}},[_v("Tools")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/setting-up.html"}},[_v("Setting up")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/design.html"}},[_v("Design")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/dev-workflow.html"}},[_v("Dev workflow")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/testing.html"}},[_v("Testing")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/project-management.html"}},[_v("Project management")])])]),_v(" "),_c('li',[_c('div',{staticClass:"site-nav-default-list-item site-nav-list-item-0",attrs:{"onclick":"handleSiteNavClick(this)"}},[_c('a',{attrs:{"href":"/dg/future-directions.html"}},[_v("Future directions")])])])])],1)],1)])]),_v(" "),_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("This section guides you through the steps required to set up your computer for developing CATcher.")]),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_c('hr'),_v(" "),_m(8),_v(" "),_c('p',[_v("Given below are different commands you can use to run the app locally.")]),_v(" "),_m(9),_c('hr'),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_c('p',[_v("In summary, the following steps are needed:")]),_v(" "),_m(12),_v(" "),_c('hr'),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_c('hr'),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('panel',{attrs:{"type":"primary"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Task 1: Add new label")])])]},proxy:true}])},[_v(" "),_c('p',[_c('strong',[_v("Task 1: Add new label "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.UiFlaw")])])]),_v(" "),_c('p',[_v("Currently, there are only 3 types of bugs in CATcher: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.DocumentationBug")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.FeatureFlaw")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.FunctionalityBug")]),_v(". Let's add a fourth one, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.UiFlaw")]),_v(" to understand the backend.")]),_v(" "),_c('p',[_c('strong',[_v("Your Task")])]),_v(" "),_c('p',[_v("Add a new label "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.UiFlaw")]),_v(" to the existing list of labels. You may choose a color and a definition to your liking.")]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Hint 1")])]},proxy:true}])},[_v(" "),_c('p',[_v("First, you need to locate the files responsible for labels. Note that this is a backend task, so it is unlikely to be an Angular component.")])]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Hint 2")])]},proxy:true}])},[_v(" "),_c('p',[_v("You may encounter 2 files that handle labels: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("label.service.ts")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("label.model.ts")]),_v(". "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("label.model.ts")]),_v(" contains the class responsible for Labels. It does not contain the list of labels used in CATcher. Therefore, look into "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("label.service.ts")]),_v(".")])]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Hint 3")])]},proxy:true}])},[_v(" "),_c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("label.service.ts")]),_v(", you will see how the various labels are defined. Can you emulate the other labels and add the new label?")])]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Suggested solution")])]},proxy:true}])},[_v(" "),_c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("label.service.ts")]),_v(", you should declare a new definition of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("type.UiFlaw")]),_v(", then add it to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LABEL_DEFINITIONS")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("REQUIRED_LABELS")]),_v(" under "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("REQUIRED_LABELS['type']['UiFlaw']")]),_v(".")]),_v(" "),_c('p',[_v("See the changes "),_c('a',{attrs:{"href":"https://github.com/chunweii/CATcher/commit/e34cc70be83ad14ed5bde0e6941894f0d76c03bd"}},[_v("here")]),_v(".")])])],1),_v(" "),_c('panel',{attrs:{"type":"primary"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Task 2: Delete labels that are not in use")])])]},proxy:true}])},[_v(" "),_c('p',[_c('strong',[_v("Task 2: Delete labels that are not in use")])]),_v(" "),_c('p',[_v("Upon creation of a new repository, Github will automatically create default labels, which we may not use in CATcher. The user might also have added other labels on their own.")]),_v(" "),_c('p',[_c('strong',[_v("Your task")])]),_v(" "),_c('p',[_v("Add a feature to delete all labels that are not required by CATcher upon login.")]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Hint 1")])]},proxy:true}])},[_v(" "),_c('p',[_v("Similar to the first task, one of the files responsible for this feature is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("label.service.ts")]),_v(". However, we need to interact with the Github API to delete labels. Can you find which service is responsible for handling Github API calls?")])]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Hint 2")])]},proxy:true}])},[_v(" "),_c('p',[_v("Refer to the "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("The version of octokit may differ. The version used by CATcher can be found in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(".")]},proxy:true}])},[_c('a',{attrs:{"target":"none","href":"https://octokit.github.io/rest.js"}},[_v("octokit documentation")])]),_v(" for details on which Github API call to use.")],1)]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Suggested solution")])]},proxy:true}])},[_v(" "),_c('ol',[_c('li',[_c('p',[_v("Create a new method "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLabel(labelName)")]),_v(" in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("github.service.ts")]),_v(". Call the "),_c('tooltip',{scopedSlots:_u([{key:"content",fn:function(){return [_v("See "),_c('a',{attrs:{"href":"https://octokit.github.io/rest.js/v18#issues-delete-label"}},[_v("the octokit docs")])]},proxy:true}])},[_v("octokit function")]),_v(" to delete label.")],1)]),_v(" "),_c('li',[_c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("label.service.ts")]),_v(", edit the private "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LabelService.ensureRepoHasRequiredLabels(actualLabels, requiredLabels)")]),_v(" method, by iterating through "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("actualLabels")]),_v(" and deleting every label in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("actualLabels")]),_v(" that are not present in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("requiredLabels")]),_v(".")])])]),_v(" "),_c('p',[_v("Refer "),_c('a',{attrs:{"href":"https://github.com/chunweii/CATcher/commit/eb38328b263aa08376fb6e5e47b83c4a07d00650"}},[_v("here")]),_v(" for the full changes.")])])],1),_v(" "),_m(19),_v(" "),_c('panel',{attrs:{"type":"primary"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_c('strong',[_v("Task 1: Make error snack bars automatically close")])])]},proxy:true}])},[_v(" "),_c('p',[_c('strong',[_v("Task 1: Make error snack bars automatically close")])]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/images/error-snackbar.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/images/error-snackbar.png","alt":""}})])]),_v(" "),_c('ol',[_c('li',[_v("To help you see the error snack bar, first launch "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CATcher")]),_v(" locally.")]),_v(" "),_c('li',[_v("Enter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(" inside the Settings Location input and click submit.")]),_v(" "),_c('li',[_v("On the bottom of your browser, a pop-up \"Failed to fetch settings file.\" should appear.")]),_v(" "),_c('li',[_v("You will see that it doesn't close by itself; you have to manually click the close button.")])]),_v(" "),_c('p',[_c('strong',[_v("Your Task")])]),_v(" "),_c('p',[_v("Make the error snack bar disappear automatically, after being displayed for 3 seconds.")]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Hint 1")])]},proxy:true}])},[_v(" "),_c('p',[_v("First, you need to locate the files responsible for error handling.\nWhen searching for the relevant files, it is useful to know the name of the frontend component involved.\nIn this task, the name of the frontend component is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MatSnackBar")]),_v(". Try to find out where it's used.\nFor more information on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MatSnackBar")]),_v(", you can read the documentation "),_c('a',{attrs:{"href":"https://material.angular.io/components/snack-bar/overview"}},[_v("here")]),_v(".")])]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Hint 2")])]},proxy:true}])},[_v(" "),_c('p',[_v("You should find that our related file is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("error-handling.service.ts")]),_v(".\nAll that's left is to figure out how to tell "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("snackBar")]),_v(" to close after a certain amount of time.\nThere are multiple ways to do this. One way is to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setTimeout")]),_v(" function on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("snackBarRef.dismiss()")]),_v(" like this:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs typescript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" snackBarRef = "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".snackBar.openFromComponent(GeneralMessageErrorComponent, {"),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("data")]),_v(": error});\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("setTimeout")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("() =>")]),_v(" {\n")]),_c('span',[_v("  snackBarRef.dismiss();\n")]),_c('span',[_v("}, "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".snackBarAutoCloseTime);\n")])])])]),_v(" "),_c('panel',{attrs:{"type":"info"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("Suggested solution")])]},proxy:true}])},[_v(" "),_c('p',[_v("There is more than 1 way to achieve this. By combining the changes in hint 1 and hint 2, you should be able to reach a solution.")]),_v(" "),_c('panel',{attrs:{"type":"success"},scopedSlots:_u([{key:"header",fn:function(){return [_c('p',[_v("error-handling.service.ts")])]},proxy:true}])},[_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs typescript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { ErrorHandler, Injectable } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'@angular/core'")]),_v(";\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { MatSnackBar, MatSnackBarRef } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'@angular/material'")]),_v(";\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { GeneralMessageErrorComponent } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'../../shared/error-toasters/general-message-error/general-message-error.component'")]),_v(";\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { FormErrorComponent } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'../../shared/error-toasters/form-error/form-error.component'")]),_v(";\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { HttpErrorResponse } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'@angular/common/http'")]),_v(";\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { RequestError } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'@octokit/request-error'")]),_v(";\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("import")]),_v(" { LoggingService } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'./logging.service'")]),_v(";\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("export")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" ERRORCODE_NOT_FOUND = "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("404")]),_v(";\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" FILTERABLE = ["),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'node_modules'")]),_v("];\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Injectable")]),_v("({\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("providedIn")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'root'")]),_v(",\n")]),_c('span',[_v("})\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("export")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("ErrorHandlingService")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("implements")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("ErrorHandler")]),_v(" ")]),_v("{\n")]),_c('span',[_v("  snackBarAutoCloseTime = "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("3000")]),_v(";\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("constructor")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" snackBar: MatSnackBar, "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" logger: LoggingService")]),_v(")")]),_v(" {}\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("handleError")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("error: HttpErrorResponse | "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("Error")]),_v(" | RequestError, actionCallback?: () => "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("void")])]),_v(")")]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".logger.error(error);\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (error "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("instanceof")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("Error")]),_v(") {\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".logger.error("),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".cleanStack(error.stack));\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (error "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("instanceof")]),_v(" HttpErrorResponse || error "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("instanceof")]),_v(" RequestError) {\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".handleHttpError(error, actionCallback);\n")]),_c('span',[_v("    } "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("else")]),_v(" {\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".handleGeneralError(error.message || "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("JSON")]),_v(".stringify(error));\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" addAutoClose<T>(snackBarRef: MatSnackBarRef<T>) {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("setTimeout")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("() =>")]),_v(" {\n")]),_c('span',[_v("      snackBarRef.dismiss();\n")]),_c('span',[_v("    }, "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".snackBarAutoCloseTime);\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" cleanStack(stacktrace: "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v("): "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" stacktrace\n")]),_c('span',[_v("            .split("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'\\n'")]),_v(")\n")]),_c('span',[_v("            .filter("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("line")]),_v(" =>")]),_v(" !FILTERABLE.some("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("word")]),_v(" =>")]),_v(" line.includes(word))) "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// exclude lines that contain words in FILTERABLE")]),_v("\n")]),_c('span',[_v("            .join("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'\\n'")]),_v(");\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Ref: https://developer.github.com/v3/#client-errors")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" handleHttpError(error: HttpErrorResponse | RequestError, actionCallback?: "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("() =>")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("void")]),_v("): "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("void")]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("let")]),_v(" snackBarRef = "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("null")]),_v(";\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Angular treats 304 Not Modified as an error, we will ignore it.")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (error.status === "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("304")]),_v(") {\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(";\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (!navigator.onLine) {\n")]),_c('span',[_v("      snackBarRef = "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".handleGeneralError("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'No Internet Connection'")]),_v(");\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".addAutoClose(snackBarRef);\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(";\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("switch")]),_v(" (error.status) {\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("case")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("500")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Internal Server Error.")]),_v("\n")]),_c('span',[_v("        snackBarRef = "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".snackBar.openFromComponent(GeneralMessageErrorComponent, {"),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("data")]),_v(": error});\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("break")]),_v(";\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("case")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("422")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Form errors")]),_v("\n")]),_c('span',[_v("        snackBarRef = "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".snackBar.openFromComponent(FormErrorComponent, {"),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("data")]),_v(": error});\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("break")]),_v(";\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("case")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("400")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Bad request")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("case")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("401")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Unauthorized")]),_v("\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("case")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("404")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Not found")]),_v("\n")]),_c('span',[_v("        snackBarRef = "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".snackBar.openFromComponent(GeneralMessageErrorComponent, {"),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("data")]),_v(": error});\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("break")]),_v(";\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("default")]),_v(":\n")]),_c('span',[_v("        snackBarRef = "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".snackBar.openFromComponent(GeneralMessageErrorComponent, {"),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("data")]),_v(": error});\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("if")]),_v(" (snackBarRef) {\n")]),_c('span',[_v("      "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".addAutoClose(snackBarRef);\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" handleGeneralError(error: "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("string")]),_v("): "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("void")]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" snackBarRef = "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".snackBar.openFromComponent(GeneralMessageErrorComponent, {"),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("data")]),_v(": {"),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("message")]),_v(": error}});\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("this")]),_v(".addAutoClose(snackBarRef);\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("}\n")])])])])],1)],1),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})],1)],1),_v(" "),_m(20)],1)}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"setting-up"}},[_c('span',{staticClass:"anchor",attrs:{"id":"setting-up"}}),_v("Setting up"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"getting-started"}},[_c('span',{staticClass:"anchor",attrs:{"id":"getting-started"}}),_v("Getting started"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Prerequisites:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://nodejs.org/en/blog/release/v14.21.2/"}},[_v("Node.js 14")]),_v(" -- (run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("node -v")]),_v(" in your OS terminal to check the version of Node on your computer)")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Recommended:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("IDE: Visual Studio Code")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Steps:")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Fork this repository into your Github account.")]),_v(" "),_c('li',[_v("Clone the forked repository into your computer.")]),_v(" "),_c('li',[_v("Install dependencies with npm: Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm install")]),_v(" "),_c('ul',[_c('li',[_c('em',[_v("a list of warnings on outdated dependencies is to be expected and no action needs to be taken before proceeding.")])])])]),_v(" "),_c('li',[_v("Compile and start the application in browser: Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:web")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"dev-commands"}},[_c('span',{staticClass:"anchor",attrs:{"id":"dev-commands"}}),_v("Dev commands"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#dev-commands","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Command")]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:web")])]),_v(" "),_c('td',[_v("Start the app from the browser in development mode.")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"debugging"}},[_c('span',{staticClass:"anchor",attrs:{"id":"debugging"}}),_v("Debugging"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#debugging","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("If you are using Visual Studio Code to debug CATcher with Chrome, Firefox or Edge.\nRefer to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Debugging Angular")]),_v(" section of "),_c('a',{attrs:{"href":"https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular"}},[_v("this guide")]),_v(" for a step-by-step walkthrough of the debugger setup.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Install the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Debugger for Chrome")]),_v(" extension for VS Code. You can also install debugger extensions for Firefox and Edge.")]),_v(" "),_c('li',[_v("Create VS Code's debugger config file ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("launch.json")]),_v(" ) as shown in "),_c('a',{attrs:{"href":"https://code.visualstudio.com/docs/nodejs/angular-tutorial#_debugging-angular"}},[_v("the guide")]),_v(". Particularly, set the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("url")]),_v(" attribute to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("http://localhost:4200")]),_v(" (reason: CATcher app is served locally on port 4200, by default.)")]),_v(" "),_c('li',[_v("In the root project folder, run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run ng:serve:web")]),_v(".")]),_v(" "),_c('li',[_v("In VS Code's Debug View, launch the debugger by clicking the green arrow (or F5). You should see the CATcher app loading within a new browser window.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"writing-documentation"}},[_c('span',{staticClass:"anchor",attrs:{"id":"writing-documentation"}}),_v("Writing Documentation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#writing-documentation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("CATcher documentation is hosted in a separate repo")]),_v(" "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/catcher-org.github.io"}},[_v("CATcher-org/catcher-org.github.io")]),_v(".\nWhen you need to update documentation, you'll need to fork and clone that repo to your computer as well.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("We use "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind")]),_v(" for documentation")]),_v(". Follow "),_c('a',{attrs:{"href":"https://se-education.org/guides/tutorials/markbind.html"}},[_v("this tutorial")]),_v(" to learn how to use MarkBind for updating project documentation.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"tasks-to-self-test-knowledge"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tasks-to-self-test-knowledge"}}),_v("Tasks To Self-Test Knowledge"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tasks-to-self-test-knowledge","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("These tasks assume a basic understanding of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Angular")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TypeScript")]),_v(".\nIf you wish to know more about them, you can visit our "),_c('a',{attrs:{"href":"/dg/tools.html"}},[_v("tools page")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"backend"}},[_c('span',{staticClass:"anchor",attrs:{"id":"backend"}}),_v("Backend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"frontend"}},[_c('span',{staticClass:"anchor",attrs:{"id":"frontend"}}),_v("Frontend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#frontend","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 4.1.0")]),_v(", generated on Mon, 29 Apr 2024, 16:01:51 UTC]")])])])}
}];
  