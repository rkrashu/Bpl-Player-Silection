import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import fakeData from './fakeData/fakeData.json'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TeamPlayers from './components/SelectedPlayer/SelectedPlayer';
function App() {
  const [players, setPlayers] =useState([])
  const [selectedPlayer, setSelectedPlayer] = useState([])
  useEffect(()=>setPlayers(fakeData),[])
  const handleClick=(player)=>{
    const newSelectedPlayer = [...selectedPlayer, player]
    setSelectedPlayer(newSelectedPlayer)
  }
  return (
    <div>
      <div className="sticky-top">
      <TeamPlayers selectedPlayer={selectedPlayer}></TeamPlayers>
      </div>
    <Header></Header>
    <div className='player-container'>
    {
      players.map(player => <Container player = {player} key={player.id} handleClick={handleClick}></Container>
        )
    }
    </div>
    </div>
  );
}

export default App;
