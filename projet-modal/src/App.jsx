
import './App.css'
import { useState } from 'react'
import Modal from './Components/modal'

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
     <div className='App'>
      Front Beginners - Modal
      <div>
        <button onClick={() => setOpenModal(true)}> Abrir o Modal </button>
      </div>
      <Modal isOpen={openModal} isClose={() => setOpenModal(!openModal)}>
        Conteúdo do modal
      </Modal>
     </div>
    </>
  )
}

export default App
