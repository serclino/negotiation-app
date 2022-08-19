# Negotiation App

Employer and employee enter salary values and the app tells if their expectations meet.
[Live Version](https://negotiation-application.netlify.app/).

## Installation & Running the App

From the root directory:

    ```
    npm install
    npm start
    ```

To run tests, from the root directory:

    ```
    npm test
    ```

## Technologies

- React

## Requirements for the project

- [x] Two tabs. Each tab contains an input box which only accepts numbers, and a “Submit” button.
- [x] Once a value has been entered and submitted, the input field of the tab disappears.
- [x] As soon as both inputs have been submitted, a modal window pops up and either shows “Success!” or “Failure!”, as well as the entered values.
- [x] “Success” is only if the employee’s minimum pay is equal to or below the employer’s maximum pay. Otherwise the input is considered a “Failure”.
- [x] Modal window show the current temeperature in Prague.

## Limits

Testing fetching data in PopUp component should be with mocked data. To-do.
