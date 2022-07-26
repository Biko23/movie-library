import { useState } from 'react';

import Modal from './modal';
import Backdrop from './backdrop';
function Movie(props) {
  const [modalIsOpen, setModelIsOpen] = useState(false)
  function deleteHandler() {
    setModelIsOpen(true)
    // console.log('Clicked!')
    // console.log(props.title)
  }
  function closeModal() {
    setModelIsOpen(false)
  }
  return (        
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modalIsOpen && <Modal cancelModal={closeModal} confirmModal={closeModal} />}
      {modalIsOpen && <Backdrop onClick={closeModal} />}  
    </div>
  )
}

export default Movie