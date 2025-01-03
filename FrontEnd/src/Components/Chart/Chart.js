import React from 'react'
import {Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: 'green',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: 'red',
                tension: .2
            }
        ]
    }


    return (
        <ChartStyled >
            <Line data={data} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #fcf6f9;
    border: 0.2vw solid #ffffff;
    box-shadow: 0 1vw 1.5vw rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 2vw;
    margin: 0 auto;
    width: 100%;
    max-width: 45vw; /* Occupies left half for PC mode */
    height: auto;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    justify-content: center;

    canvas {
        width: 100% !important;
        height: 100% !important;
    }

    @media (max-width: 768px) {
        padding: 0.5rem;
        border-radius: 1vw;
        max-width: 100%; /* Use full width on mobile */
    }
`;



export default Chart