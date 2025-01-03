import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';

function Navigation({ active, setActive }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Toggle menu on touch or click
    const handleToggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <NavStyled ref={menuRef} isMenuOpen={isMenuOpen}>
            <div
                className="user-connect"
                onClick={handleToggleMenu}  // Toggle on touch/click
            >
                <img src={avatar} alt="User Avatar" />
                <div className="text">
                    <h2>Mahesh</h2>
                </div>
            </div>
            <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => {
                            setActive(item.id);
                            setIsMenuOpen(false);  // Close menu after selection
                        }}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    padding: 1vh;
    width: 100vw;
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 0.2vw solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1vw 3vw rgba(0, 0, 0, 0.1);
    gap: 5vw;

    .user-connect {
        display: flex;
        align-items: center;
        gap: 1vw;
        cursor: pointer;
        padding-left: 10vw;

        img {
            width: 8vh;
            height: 8vh;
            border-radius: 50%;
            object-fit: cover;
            border: 0.02rem solid #fff;
            box-shadow: 0vh 0.8vh 2vh rgba(0, 0, 0, 0.2);
        }

        h2 {
            color: rgba(34, 34, 96, 1);
            font-size: 4vh;
            white-space: nowrap;
        }
    }

    .menu-items {
        display: flex;
        gap: 2vw;
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            display: flex;
            align-items: center;
            gap: 0.4vw;
            cursor: pointer;
            font-size: 2.5vh;
            font-weight: 500;
            color: #444;
            padding: 0.3vw 1vw;
            border-radius: 5vh;
            transition: all 0.3s ease-in-out;
            position: relative; /* For pseudo-elements */

            &:hover {
                color: #222260;
            }

            &.active {
                color: #222260;
                font-weight: bold;
                background: rgba(34, 34, 96, 0.1); /* Optional background color */
            }

            &.active::after {
                content: '';
                position: absolute;
                bottom: -5px; /* Adjust as needed */
                left: 10%;
                right: 10%;
                height: 3px;
                background: linear-gradient(90deg, #222260, #6c63ff); /* Gradient line */
                border-radius: 1px;
                transition: width 0.3s ease-in-out;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        .user-connect {
            width: 100%;
            justify-content: center;
        }

        .menu-items {
            display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
            position: relative;
            top: 1vh;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
            padding: 1rem;
            z-index: 10;

            li {
                display: block;
                width: 100%;
                text-align: left;
                font-size: 2vh;
                padding: 1rem;
                margin-bottom: 0.5rem;
                border-radius: 0.5rem;

                &:hover {
                    background: rgba(34, 34, 96, 0.05);
                }
            }
        }
    }
`;

export default Navigation;
