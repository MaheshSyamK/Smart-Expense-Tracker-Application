import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import ExpenseForm from '../Form/ExpenseForm';
import IncomeItem from '../IncomeItem/IncomeItem';

function Expenses() {
    const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

    useEffect(() => {
        getExpenses();
    }, []);

    return (
        <ExpenseStyled>
            <InnerLayout>
                <h1>EXPENSES</h1>
                <h2 className="total-expense">
                    Expenditure: <span>${totalExpenses()}</span>
                </h2>
                <div className="expense-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="expenses">
                        {expenses.map((expense) => {
                            const { _id, title, amount, date, category, description, type } = expense;
                            return (
                                <IncomeItem
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    description={description}
                                    amount={amount}
                                    date={date}
                                    type={type}
                                    category={category}
                                    indicatorColor="var(--color-green)"
                                    deleteItem={deleteExpense}
                                />
                            );
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    );
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow-y: auto;
    padding-bottom: 2vh;
    padding-left: 3vw;
    padding-right: 3vw;
    height: auto;

    h1 {
        font-size: 7vh;
        text-align: center;
        padding-bottom: 2vh;
        margin-top: -5vh;
    }

    .total-expense {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fcf6f9;
        border: 0.2vw solid #ffffff;
        box-shadow: 0vw 0.01vw 0.1vw rgba(0, 0, 0, 0.06);
        border-radius: 1vw;
        padding: 1.5vw;
        margin: 1vw 0;
        font-size: 5.5vh;
        flex-wrap: wrap;
        gap: 0.5vh;

        span {
            font-size: 5.5vh;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .expense-content {
        display: flex;
        gap: 8vw;
        flex-wrap: wrap;
        border-radius: 0.2vw;

        .form-container {
            flex: 1;
            margin-bottom: 4vw;
        }

        .expenses {
            flex: 1 1 calc(50% - 2vw);
            background: #FCF6F9;
            border: 0.2vw solid #FFFFFF;
            box-shadow: 0vw 0.1vw 1.5vw rgba(0, 0, 0, 0.06);
            padding: 2.5vw;
            border-radius: 0.5vw;
            border-radius: 0.2vw;
            max-height: 68vh;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 2.5vh;

            &::-webkit-scrollbar {
                width: 0.05vw;
            }
            &::-webkit-scrollbar-thumb {
                background-color: var(--color-green);
                border-radius: 0.05vw;
            }
            &::-webkit-scrollbar-track {
                background-color: #f1f1f1;
            }
        }
    }
`;

export default Expenses;
