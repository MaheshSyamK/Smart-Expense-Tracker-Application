import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/IncomeForm';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
    const {incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() =>{
        getIncomes()
    })
    
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>INCOMES</h1>
                <h2 className="total-income">Revenue: <span>${totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                        key={_id}
                                        id={_id} 
                                        title={title} 
                                        description={description} 
                                        amount={amount} 
                                        date={date} 
                                        type={type}
                                        category={category} 
                                        indicatorColor="var(--color-green)"
                                        deleteItem={deleteIncome}
                                    />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}


const IncomeStyled = styled.div`
    display: flex;
    overflow-y: auto;
    height: auto;
    pading-bottom: 2vh; 
    padding-left: 3vw;
    padding-right: 3vw;

    h1 {
        font-size: 7vh;
        text-align: center;
        padding-bottom: 2vh;
        margin-top: -5vh;
    }

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 0.2vw solid #FFFFFF;
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

    .income-content {
        display: flex;
        gap: 8vw;
        flex-wrap: wrap;
        border-radius: 0.2vw;

        .form-container {
            flex: 1;
            margin-bottom: 4vw;
        }

        .incomes {
            flex: 1 1 calc(50% - 2vw);
            background: #FCF6F9;    
            border: 0.2vw solid #FFFFFF;
            box-shadow: 0vw 0.1vw 1.5vw rgba(0, 0, 0, 0.06);
            border-radius: 0.5vw;
            padding: 2.5vw;
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

export default Income