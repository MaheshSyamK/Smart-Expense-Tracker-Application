
// Importing react and hooks and axios 
import React, { useContext, useState } from "react"
import axios from 'axios'

// Base url for api requests
const BASE_URL = "http://localhost:5000/api/v1/";

// Creating a context for global state
const GlobalContext = React.createContext()


export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    // Function to add new income
    const addIncome = async (income) => {
        await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message);
            });
        getIncomes();
    }

    // Function to fetch all incomes
    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    // Function to delete an income
    const deleteIncome = async (id) => {
        await axios.delete(`${BASE_URL}delete-income/${id}`);
        getIncomes();
    }

    // Function to calculate the total income
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    // Function to add the Expenses
    const addExpense = async (expense) => {
        await  axios.post(`${BASE_URL}add-expense`, expense)
                    .catch((err) => {
                        setError(err.response.data.message);
                    });
        getExpenses();
    }

    // Function to get all the Expenses
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    // Function to delete all the Expenses
    const deleteExpense = async (id) => {
        await axios.delete(`${BASE_URL}delete-expense/${id}`);
        getExpenses();
    }

    // Function to calculate the total expenses
    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

    // Function to calculate the total totalBalance
    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}