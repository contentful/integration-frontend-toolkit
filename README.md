# integration-frontend-toolkit

> **Warning**
> This library is under active development and is subject to significant changes. At any time code may be updated, depricated, or entirely removed based on our internal development of the [Apps](https://github.com/contentful/apps) repo.

This repository is a home to frontend tooling, primarily used to support integration (app) development.

The library itself offers the Integrations team a place to develop components outside of the app itself, as well as to house highly repeated code, to support reusability as well as customizability.

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

### Testing package locally

Option 1: Link the package using the global node module namespace

```sh 
npm link 
```

and within the test application run 

```sh 
npm link @contentful/integration-frontend-toolkit
```

Option 2: Use npm pack to create a tgz file locally that mimics a fully packed library structure

```sh 
npm build 
```

```sh 
npm pack --pack-destination ~
```

import the packed file, i.e "file:~/contentful-integration-frontend-toolkit-0.0.0-semantic-release.tgz", into another library for testing

and within the testing library run:

```sh 
npm install 
```
to actually install the tgz packed file. 

You may need to continually update the version in your local package, and repack the tgz file, and reimport it with the new version, when updates are made. 


### Creating new submodule directories: 

The current build of this toolkit creates build directories directly reflecting the directories under the src directory. You will notice upon building the toolkit, that these directories are created, and this supports submodule imports of the toolkit i.e: 

```sh 
import { HyperLink } from "@contentful/integration-frontend-toolkit/components" 
import { sentryMarketplaceAppsSDK } from "@contentful/integration-frontend-toolkit/sdks" 
```

IMPORTANT: When creating a new directory, you will need to add the directory name to the package.json "files" section in order for it to be exposed as a submodule.  

### Expectations of development

1. Each new entity added to this library should be housed in its own directory
2. Each new entity should be accompanied by a spec. file
3. Each new component created should be accompanied by a stories. file. Keep in mind the various iterations of the components. Questions to ask: if it might be useful to create a story for each iteration? and if the story is self-explanatory to other developers? Sometimes it is useful to add details, actions, decorators to describe the story and component
4. Each new entity needs to be added to the respective parent directory index.ts file
5. Directories are lower-cased unless they house a set of files related to a React component
6. File names are lower-cased unless they house a React component
7. The code contribution should be TypeScript
8. Please add JSDocs to methods that may need more context


## Commiting 

Follow standard Semantic Versioning commit messages (when you squash or commit to master) in order to version the package correctly.

Examples commit messages:

- Feat: A new feature, i.e `feat(button): Add new button component`
- Fix: A bug fix
- Docs: A documentation change
- Style: A change that does not affect meaning of code (styling)
- Refactor: A change that neither fixes a bug nor adds a feature
- Perf: A code change that improves performance
- Test: An adjustment to tests
- Chore: A change to the build process of auxiliary tools and libraries

By default in this library right now, FIX is a patch release, FEATURE is a minor, and the label BREAKING CHANGE is a major release. 


## In progress improvements and known limitations:

1. Currently it is challenging to create a directory that is just internal to the toolkit itself. For example, if we want to create a directory that houses a helper function used in other methods across other directories, but do not intend on exposing this directory as part of the library, given how the build works now, we will need to experiment with how to implement this
2.  Currently within the CI, we require Chromatic visual approvals of changes to components. This deserves some fine-tuning, and there is a ticket open to complete this
3. Package optimization of the build: there is a ticket open to remove unecessary artifacts in the built directories, such as stories and tests
4. Feel free to create a ticket within the associated epic for new issues or improvements

## Other resources

1. [Storybook](https://storybook.js.org/docs/react/get-started/why-storybook)
2. [Chromatic](https://www.chromatic.com/)
3. [Semantic Release](https://semantic-release.gitbook.io/semantic-release/)

