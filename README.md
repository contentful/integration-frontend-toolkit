# integration-component-library

> **Warning**
> This library is under active development and is subject to significant changes. At any time components may be updated, depricated, or entirely removed based on our internal development of the [Apps](https://github.com/contentful/apps) repo.

This repository is a home to a documented component library, primarily used to support integration (app) development.

The library itself offers the Integrations team a place to develop components outside of the app itself, to support reusability as well as customizability. If deemed necessary and valid, these components can be escalated to a process of inclusion within the F36 or the experience-packages repository.

Please refer to [this](https://contentful.atlassian.net/wiki/spaces/ECO/pages/4206232072/Storybook+processes+and+expectations+of+use+on+the+Integrations+team) documentation for more details on Storybook development within the Integrations team.

## Local development

To install or update the app locally:

```sh
npm i
```

To run storybook locally:

```sh
npm run storybook
```

To run tests:

```sh
npm run test
```

### When you are ready to publish a new component, for now, it is imperative that you do the following:

1. Add the new component to the src/index.js file.

2. Run: `npm run build`

3. And include the `dist` directory within the PR itself. (this will be automated in the future ideally)

4. Lastly follow standard Semantic Versioning commit messages (when you squash or commit to master) in order to version the package correctly.

Examples commit messages:

- Feat: A new feature, i.e `feat(button): Add new button component`
- Fix: A bug fix
- Docs: A documentation change
- Style: A change that does not affect meaning of code (styling)
- Refactor: A change that neither fixes a bug nor adds a feature
- Perf: A code change that improves performance
- Test: An adjustment to tests
- Chore: A change to the build process of auxiliary tools and libraries

## Expectations of development:

1. Each new component added to this library should be housed in its own directory, either under a certain Stack or under the 'General' directory.
2. Each new component should be accompanied by a spec. file.
3. Each new component should be accompanied by a stories. file.
4. Keep in mind the various iterations of a component. Questions to ask: if it might be usuful to create a story for each iteration? and if the story is self-explantory to other developers? Sometimes it is useful to add details, actions, decorators to describe the story and component.

## Troubleshooting the installation of this package

If you are encountering an error after running `npm i @contentful/integration-component-library`, perhaps a 401 error around access to the package itself, please try the following:

1. Adjust the npm registry either within your local config or in a repository `.npmrc` file. To check your local config, run `npm config ls`. The regsitry should be the following:
   `registry = "https://registry.npmjs.org/"`.
2. If adjusting the registry does not resolve the issue, there may be an authorization step you must take. This should not be the case right now as the package access is public for now (to avoid the friction of these auth steps) and it is no longer hosted as a github package, but in the off chance this is the issue please refer to [this](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token) document.

## In progress improvements:

1. Automating the build process so there is no need for the build file to be manually contributed as part of the PR.
2. Adjusting Chromatic approval process per team feedback and use. How do we want to compare diffs, and visual changes, and how do we want this to reflect within the PR build and approval process?
3. There is a known issue with the import of the LineChart component. It is not importing correctly as a component within the apps repository, despite the successful import of other components. Thinking it may be a dependency issue.

## Storybook

[Documentation](https://storybook.js.org/docs/react/get-started/why-storybook)
