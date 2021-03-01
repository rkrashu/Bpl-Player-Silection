import React from 'react';

const SelectedPlayer = (props) => {
    const selectedPlayer = props.selectedPlayer
    const salary = selectedPlayer.reduce((salary, team) => salary+ team.salary ,0)
    const selectedPlayerName = selectedPlayer.reduce((player, selectedPlayer)=> player + selectedPlayer.name + ' $'+ (selectedPlayer.salary) + ', ' ,[]) 
    
    return (
        <div>
            <h5>No of Player Selected: {selectedPlayer.length}</h5>
            <h5>Selected Player: {selectedPlayerName} </h5>
            <h5>Budget: $ {salary}</h5>
        </div>
    );
};

export default SelectedPlayer;