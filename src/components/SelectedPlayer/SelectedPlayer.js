import React from 'react';

const SelectedPlayer = (props) => {
    const selectedPlayer = props.selectedPlayer
    const selectedPlayerName = selectedPlayer.reduce((player, selectedPlayer)=> player + selectedPlayer.name + ', ' ,[]) 
    const salary = selectedPlayer.reduce((salary, team) => salary+ team.salary ,0)
    return (
        <div>
            <h5>No of Player Selected: {selectedPlayer.length}</h5>
            <h5>Selected Player Name: {selectedPlayerName} </h5>
            <h5>Budget: $ {salary}</h5>
        </div>
    );
};

export default SelectedPlayer;