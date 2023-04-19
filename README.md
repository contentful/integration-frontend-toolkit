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

## Expectations of development: 

Please refer to the ```LineChart``` component as an example. 

1. Each new component added to this library should be housed in its own directory, either under a certain Stack or under a general 'Common' directory. 
2. Each new component should be accompanied by a spec. file.  

## Storybook 

[Documentation](https://storybook.js.org/docs/react/get-started/why-storybook)
