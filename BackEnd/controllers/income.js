
// Importing the Income  model to interact with the Income Collection
const Income = require("../models/IncomeModel")


// Function to handle a new income document using exracted files
exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date}  = req.body

    const income = Income ({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if(!title || !category || !description || !date){
            console.log('All fields aree required.')
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            console.log('Amount must be a positive number.')
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        console.log('Income Added Succesfully.')
        res.status(200).json({message: 'Income Added Succesfully.'})
    } catch (error) {
        console.log('Server Error: ', error.message)
        res.status(500).json({message: `Server Error: ${error.message}`})
    }

    console.log(income)
}

// Function to fetch all incomes from the database
exports.getIncomes = async (_, res) =>{
    try {
        const incomes = await Income.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: `Server Error: ${error.message}`})
    }
}

// Function to delete an income form the database using id
exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    Income .findByIdAndDelete(id)
        .then(() =>{
            console.log('Income Deleted Succesfully.')
            res.status(200).json({message: 'Income Deleted Succesfully.'})
        })
        .catch((error) =>{
            console.log('Server Error: ', error.message)
            res.status(500).json({message: `Server Error: ${error.message}`})
        })
}