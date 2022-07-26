function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.cancelModal}>Cancel</button>
      <button className="btn" onClick={props.confirmModal}>Confirm</button>
    </div>
  )
    
}

export default Modal