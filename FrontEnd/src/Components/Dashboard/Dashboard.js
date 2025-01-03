import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import { InnerLayout } from '../../styles/Layouts';

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    })

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1>TRANSACTIONS</h1>
                <div className="stats-connect">
                    <div className="chart-con">
                        <div className="custom-chart">
                            <Chart />
                        </div>
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`

    h1 {
        font-size: 5.5vh;
        text-align: center;
        margin-top: -5vh;
        margin-bottom: 3vh;
    }

    .stats-connect {
        display: flex;
        gap: 2vw;
        padding: 1vh 2vw; 
        flex-wrap: wrap;  
        align-content: center;
        justify-content: center;

        .chart-con {
            display: flex;
            flex-direction: column;
            gap: 3vh;

            .amount-con {
                display: flex;
                gap: 2vw;
                flex-wrap: wrap;
                justify-content: center;

                .income, .expense, .balance {
                    background: #FCF6F9;
                    border: 0.2vw solid #FFFFFF;
                    box-shadow: 0 0.2vw 1vw rgba(0, 0, 0, 0.06);
                    border-radius: 2vh;
                    padding: 2vh 1vw;
                    text-align: center;
                    max-width: 80vw;
                    flex: 1;

                    h2 {
                        font-size: 2.5vh;
                        margin-bottom: 1vh;
                    }

                    p {
                        font-size: 3vh;
                        font-weight: 700;
                        display: inline-flex;
                        align-items: center;
                        gap: 0.2vw;
                    }
                }
            }
        }

        .history-con {
            background: #fff;
            border: 0.2vw solid #f0f0f0;
            box-shadow: 0 0.2vh 1vw rgba(0, 0, 0, 0.06);
            border-radius: 2vh;
            
            overflow-y: auto;
            padding: 2vh 1vw;
            transition: all 0.3s ease-in-out;

            h2.salary-title {
                margin: 2vh 0 1vh;
                font-size: 2.5vh;
                font-weight: 600;

                span {
                    font-size: 2.5vh;
                }
            }

            .salary-item {
                background: #fcf6f9;
                border: 0.2vw solid #fff;
                box-shadow: 0 0.2vh 1vw rgba(0, 0, 0, 0.06);
                border-radius: 1.5vh;
                padding: 1.5vh 1vw;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1vh;
                transition: all 0.3s ease-in-out;

                p {
                    font-size: 3vh;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.2vw;
                }
            }
        }
    }

`;

export default Dashboard