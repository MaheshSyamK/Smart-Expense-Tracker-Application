import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (    
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vw;
    padding: 2rem;
    height: 56vh;

    .history-item{
        background: #FCF6F9;
        border: 0.2vw solid #FFFFFF;
        box-shadow: 0vw 1vw 1.5vw rgba(0, 0, 0, 0.06);
        padding: 1vw;
        border-radius: 0.2vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h2 {
        font-size: 4vh; 
        margin-bottom: 1vh;
        text-align: center;
    }
`;

export default History