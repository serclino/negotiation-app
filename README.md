# Negotiation App

Employer and employee enter salary values and the app tells if their expectations meet.

## Installation & Running the App

From the root directory:

    ```text
    npm install
    npm start
    ```

## Technologies

- React

## Requirements for the project

- [x] uplad CSV and save it to the backend side
- [x] render table displaying data from CSV (if they are presented)
- [x] in each row you can choose only one value
- [x] at the end of each row, there is an additional input called "Jiné" - user can write in any number
- [x] under the table there is overview of total hours, input for wage per hour and total cost
- [x] export selected table data as a CSV file

## Bonuses

- [x] validation:
  - [x] only CSV file can be uploaded
  - [x] if CVS content doesn't have proper form (i.e. short rows), then user is alerted
- [x] on the first render, file is fetched to the client side, if it's already uploaded
- [x] delete button - it deletes file from the backend
- [x] if CSV cells contain letters (or they're empty) in place where should be numbers, then "0" is rendered
- [x] radio input with value 0 is disabled and cannot be choosed
- [x] when no input is selected within some of the rows, then "0" is exported

## Limits

Testing fetching data in PopUp component should be with mocked data. To-do.
