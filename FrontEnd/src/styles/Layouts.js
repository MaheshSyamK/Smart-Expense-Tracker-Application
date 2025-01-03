import styled from "styled-components";

export const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
    gap: 2vw;
    padding: 1vw;
    overflow-y: hidden;
    overflow-x: hidden;
    box-sizing: border-box;
`;

export const InnerLayout = styled.div`
    padding: 10vh 1.5vw; 
    width: 100%;
    flex-grow: 1; 
    overflow: hidden; 
    box-sizing: border-box;
`;
