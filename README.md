# integration-component-library

This repository is a home to a documented component library, primarily used to support integration (app) development.

It is not a replacement of F36 or experience-packages within Contentful, but rather offers the Integrations team a place to develop components outside of the app itself, to support reusability as well as customizability. If deemed necessary and valid, these components can be escalated to a process of inclusion within the F36 or the experience-packages repository.

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

## Expectations of development:

1. Each new component added to this library should be housed in its own directory, either under a certain Stack or under a general 'General' directory.
2. Each new component should be accompanied by a spec. file.
3. Keep in mind the various iterations of a component i.e if it might be usuful to create a story for each iteration? and if the story is self-explantory to other developers? Sometimes it is useful to add details, actions, decorators to describe the story and component.

## Storybook

[Documentation](https://storybook.js.org/docs/react/get-started/why-storybook)
