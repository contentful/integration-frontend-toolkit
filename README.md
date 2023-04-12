# integration-component-library

The purpose of this repository is to document the component library used as part of integration development.

This repository is not meant to replace F36 or experience-packages within Contentful, but rather offers the Integrations team a place to develop components that may be highly customized for certain integrations. If deemed necessary and valid, these components can be escalated to a process of inclusion within the F36 or experience-packages repository.

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

Please refer ```LineChart``` component as an example. 

1. Each new component added to this library should be housed in its own directory, either under a certain Stack or under a general 'Common' directory. 
2. Each new component should be accompanied by a spec. file. 
