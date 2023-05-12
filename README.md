# integration-component-library

This repository is a home to a documented component library, primarily used to support integration (app) development.

It is not a replacement of F36 or experience-packages within Contentful, but rather offers the Integrations team a place to develop components outside of the app itself, to support reusability as well as customizability. If deemed necessary and valid, these components can be escalated to a process of inclusion within the F36 or the experience-packages repository.

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

2. Run: 
```sh
npm run build
```

3. And include the dist file within the PR itself. (this will be automated in the future ideally)

4. Lastly follow standard Semantic Versioning commit messages (when you squash or commit to master) in order to version the package correctly. 

Examples: 

Feat: A new feature
Fix: A bug fix
Docs: A documentation change
Style: A change that does not affect meaning of code (styling)
Refactor: A change that neither fixes a bug nor adds a feature
Perf: A code change that improves performance
Test: An adjustment to tests
Chore: A change to the build process of auxiliary tools and libraries 

## Expectations of development:  

1. Each new component added to this library should be housed in its own directory, either under a certain Stack or under a general 'General' directory. 
2. Each new component should be accompanied by a spec. file. 
3. Each new component should be accompanied by a stories. file.
4. Keep in mind the various iterations of a component i.e if it might be usuful to create a story for each iteration? and if the story is self-explantory to other developers? Sometimes it is useful to add details, actions, decorators to describe the story and component. 

## Storybook 

[Documentation](https://storybook.js.org/docs/react/get-started/why-storybook)
