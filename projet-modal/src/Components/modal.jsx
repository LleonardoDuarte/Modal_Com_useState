//COMANDO RFC

import React from 'react'


const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '1000',
    padding: '150px',
    backgroundColor: '#ffff',
    borderRadious: '10px',
    color: 'black',
    fontSize:'20px',
}


export default function modal({isOpen, isClose, children}) {

if (isOpen) {
    return (
        <div style={BACKGROUND_STYLE}>
            <div style={MODAL_STYLE}>
                <div style={{cursor: 'pointer'}} onClick={isClose}>X</div>
                <div>
                    {children}
                </div>
                <button onClick={isClose}>Fechar</button>
            </div>
        </div>
    )
}
  
    return null

}