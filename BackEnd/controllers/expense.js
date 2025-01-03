
// Importing the ExpenseSchema model to interact with the   Expense Collection
const ExpenseSchema = require("../models/ExpenseModel")


// Function to handle a new expense 
exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date}  = req.body

    // creating a new expense document using the extracted fields 
    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    // Validations for expense schema
    try {
        if(!title || !category || !description || !date){
            console.log('All fields are required!')
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            console.log('Amount must be a positive number!')
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        console.log('Expense Added.')
        res.status(200).json({message: 'Expense Added'})
    } catch (error) {
        console.log('Server Error: ', error.message)
        res.status(500).json({message: `Server Error: ${error.message}`})
    }

    console.log(income)
}

// Function to feth all expenses form the database
exports.getExpense = async (_, res) =>{
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: `Server Error: ${error.message}`})
    }
}

// Function to delete the expenses using the ID
exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then(() =>{
            console.log('Expense Deleted.')
            res.status(200).json({message: 'Expense Deleted'})
        })
        .catch((error) =>{
            console.log('Server Error: ', error.message)
            res.status(500).json({message: `Server Error: ${error.message}`})
        })
}
