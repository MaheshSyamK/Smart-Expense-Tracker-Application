// Import React and hooks for state and memoization
import React, {useState, useMemo} from 'react'

// Import styled components for styling
import styled from "styled-components"

// Import the background image
import bg from './img/bg.png'

// Import Layouts and Components 
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard'
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses'



function App() {
  
  const [active, setActive] = useState(1)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <Navigation active={active} setActive={setActive} />
      <MainLayout>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.bg});
  background-size: cover; 
  background-position: center; 
  
  main {
    background: rgba(247, 236, 241, 0.78);
    border: 0.3vw solid #FFFFFF;
    backdrop-filter: blur(0.45vw);
    border-radius: 3.5vw;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0; 
    }
  }
`;


export default App
