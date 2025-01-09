# Watch List App

This app displays a collection of TV Series and Movie posters that I have on my list to watch.
While it's clear from the posters what's on my list, the app isn't very visually appealing.
Your task will be to update some files in this repo (`.css`, `.js`, and `.test.js`) by
1. asking questions to `GitHub Copilot Chat`
2. implementing the suggestions generated
3. essentially making the app more visually appealing and (bonus) fixing/implementing tests!

Please read on for more details!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using Copilot

Ensure you have `GitHub Copilot set up` (either the Free Trial or GitHub Education)
- Log into your GitHub account
- Go to https://github.com/settings/copilot
- Select your preferences to start using GitHub Copilot

### Option 1, Local development

Pull the repo locally, `cd react-challenge`, and complete the challenge inside VS `Code` using the Copilot extensions.
You will need:
1. the compatible versions of `node` (`v20.5.1`) and `npm` (`9.8.0`) installed on your machine.
2. In VS Code, you will also need to install the following [extensions](https://code.visualstudio.com/docs/editor/extension-marketplace):
   1. GitHub Copilot
   2. GitHub Copilot Chat

Once installed, open the [GitHub Copilot Chat](https://learn.microsoft.com/en-us/visualstudio/ide/visual-studio-github-copilot-chat?view=vs-2022#use-copilot-chat-in-visual-studio) (on Mac `CMD + Shift + P` > `Copilot`).

### Option 2, Develop in the browser

You can also run the code in the browser at https://codesandbox.io/p/github/eharason/cusec-react/main.

In another tab, navigate to https://github.com/kennyhong/rbc-cusec-workshop-2025/tree/master/react-challenge
   1. Click the icon (beside the search bar) to `Chat with Copilot`
   2. Ask your questions here!

With this approach, toggle between browser tabs, and add suggested changes directly inside the files hosted at https://codesandbox.io/p/github/eharason/cusec-react/main to visualize/test the changes

## To Do

Using the Copilot chat _only_, write (and record in your notes) questions that will generate answers to:
1. Make the App look like this

Desktop view | Responsive
--- | ---
![desktop](./public/expected/desktop.png?raw=true "Desktop") | ![responsive](./public/expected/responsive.png?raw=true "Responsive")

2. Bonus: Tests
   1. Make the current test pass
   2. Write one additional test

```
 PASS  src/App.test.js
  ✓ header renders (65 ms)
  ✓ Gallery component is defined

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.533 s
Ran all test suites related to changed files.
```

The goal is to complete the above task(s) as quickly as possible, using GitHub Copilot Chat. Ask it questions, then receive and implement the answers in your code. Make sure to keep a record of the questions you asked so that we can go over it together at the end of the exercise.

## Commands

`npm i`
- Install dependencies

`npm start`
- Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will reload when you make changes.
You may also see any lint errors in the console.

`npm test`
- Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
