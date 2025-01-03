import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}
const IncomeItemStyled = styled.div`
    
    border: 0.2vw solid #FFFFFF;
    box-shadow: 0vw 0.1vw 1.5vw rgba(0, 0, 0, 0.06);
    border-radius: 1vw;
    padding: 1vw;
    margin-bottom: 1vw;
    display: flex;
    align-items: center;
    gap: 1vw;
    width: 100%;
    color: #222260;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0vw 1vw 2vw rgba(0, 0, 0, 0.1);
    }

    .icon {
        width: 4vw;
        height: 4vw;
        border-radius: 1vw;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0.2vw solid #FFFFFF;
        i {
            font-size: 2vw;
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.5vw;
        h5 {
            font-size: 1.5vw;
            padding-left: 2vw;
            position: relative;
            color: #222260;

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 0.8vw;
                height: 0.8vw;
                border-radius: 50%;
                background: ${(props) => props.indicator};
            }
        }

        .inner-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1vw;

            .text{
                display: flex;
                flex-wrap: wrap;
                gap: 2vw;
                p {
                    font-size: 1.2vw;
                    color: #333;
                }
            }

            .btn-con {
                display: flex;
                justify-content: flex-end;
                align-items: center;

                button {
                    width: 3.5vw; 
                    height: 3.5vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-size: 1.5vw;
                    transition: background-color 0.3s ease, transform 0.3s ease;

                    &:hover {
                        transform: scale(1.1);
                        background-color: var(--color-green);
                    }
                }

                @media (max-width: 768px) {
                    button {
                        width: 3.5vw; 
                        height: 3.5vw;
                        font-size: 1.2vw; 
                    }
                }
            }
        }
    }

    background:rgb(112, 12, 62, 0.03);
`;


export default IncomeItem