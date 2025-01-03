
// Importing the functions for handling the Expense and Income related requests form the controllers directory 
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')

// Importing the express framework
const express = require('express')

// Creating the Router Instance
const router = express.Router()


// Defining POST, GET, Delete for Income
router.post('/add-income', addIncome)
router.get('/get-incomes', getIncomes)
router.delete('/delete-income/:id', deleteIncome)


// Defining the POST, GET, Delete for Expense
router.post('/add-expense', addExpense)
router.get('/get-expenses', getExpense)
router.delete('/delete-expense/:id', deleteExpense)


// Exporting the router 
module.exports = router


