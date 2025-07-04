import React from 'react'

const Placar = ({ primaryTeam, secondTeam, scorePrimaryTeam, scoreSecondTeam }) => {
    return (
        <>
            <div className='teamsScoreBoard'>
                <div className='scorePrimaryTeam'>
                    <p>{primaryTeam}</p>
                    <p>{scorePrimaryTeam}</p>
                </div>
                <p>X</p>
                <div className='teamScoreBoard'>
                    <p>{secondTeam}</p>
                    <p>{scoreSecondTeam}</p>
                </div>
            </div>
        </>
    )
}

export default Placar;