# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How the Decentralised Application is used for CR (Class Representatives Voting)
All the votes made to the students standing in election are public and can be verified at any point of time. Hence the votes
given to the students are upfront and no inequalities are caused | partiality. This is very simple to use d-application for 
teachers who deploy the smart contract and the students of his/her class are given accounts from which they can interact and vote via same. Teachers can declare the result as per all the criterias are met for him/her.

## If new updates are made to the Smart Contract then 
run 
`node exportContract.js`
in the root folder

## To run the Decentralised Application
run `npm start`
and the host will be active at port: 3000


## Workflow of the DApp
1. Need of CR is identified for the division or subject
2. Teacher of the division or subject announces the CR election
3. The interested students raise notion to stand in election
4. The rest of the students vote for the students in election
5. Voting ends when all the rest of students delegate their vote to at least one of them 
6. Teacher declares the winner of the election

## Tasks
1. Read the Excel file : DONE
2. Add the ethereum address at the end of this data : DONE
3. Develop a Smart Contract
    3.1. Basic Format : DONE
    3.2. Register Function : DONE
    3.3. Teacher : DONE
    3.4  Students mapping : DONE
    3.5. Students in Election mapping : DONE
    3.6. Students in election Count : DONE
4. Front End I
    4.1. Display Teacher : DONE
    4.2. Display Contract : DONE
    4.3. Check if student is registered : DONE
    4.4. Register a student : DONE
    4.5. Register all students : DONE
    4.6. Student should apply for the election : DONE
    4.7. Show students standing in election : DONE
5. Front End II
    5.1. Display Teacher : DONE
    5.2. Display Contract : DONE
    5.3. Check if student is registered : DONE
    5.4. Register a student : DONE
    5.5. Register All Students with a button: DONE
    5.6. Student should apply for the election : DONE
    5.7. Show students standing in election : DONE

## HOW TO RUN the DAPP
1. `npm install`
2. `npm start`
3. `truffle migrate --reset`
4. `node exportContract.js`
5. `node updateExcelFile.js (Delete the 'Sheet 2' of the xlsx file)`
6. `node exportStudentData.js`

![EnteringTask](/IMG_7115.PNG)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
