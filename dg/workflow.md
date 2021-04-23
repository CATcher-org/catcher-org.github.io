<frontmatter>
  header: header.md
  pageNav: 2
  pageNavTitle: "Chapters of This Page"
  siteNav: dg-nav.md
  footer: footer.md
</frontmatter>

# Workflow of CATcher

The following is the workflow that contributors need to follow when proposing changes to CATcher.

1. [Submitting PRs](#submitting-prs)
2. [Testing](#testing)
    1. [Generating Spec Files](#generating-spec-files)

## Submitting PRs

When a pull request is merged, it should be accompanied by a helpful commit message. Hence, contributors are recommended to propose a commit message for their pull requests.
[Here](https://oss-generic.github.io/process/docs/FormatsAndConventions.html#commit-message) are
some good guidelines for crafting the commit message.

## Testing

We use [Scuri](https://github.com/gparlakov/scuri) to generate spec files for unit tests.
Scuri uses [Jasmine's spy feature](https://jasmine.github.io/2.0/introduction.html#section-Spies) to stub dependencies.

### Generating Spec Files

- To generate spec files for files that have none:
    Run `npm run ng g scuri:spec --name src/app/app.component.ts`

- To generate spec files for files that have existing spec files:
    Run `npm run ng g scuri:spec --name src/app/app.component.ts --force`


<div class="clearfix">
  <p>
    <span class="float-left">
      <a class="btn btn-light" href="{{ baseUrl }}/dg/tests.html">
        <span aria-hidden="true" class="far fa-arrow-alt-circle-left"></span>
        <span> Tests in CATcher </span>
      </a>
    </span>
    <span class="float-right">
      <a class="btn btn-light" href="{{ baseUrl }}/dg/getting-started.html">
        <span> Getting Started </span>
        <span aria-hidden="true" class="far fa-arrow-alt-circle-right"></span>
      </a>
    </span>
  </p>
</div>
<br/>