
const ConfirmDeleteModal = ({setItems, setClearModal}) => {

  const clearList = () => {
    setItems([])
    setClearModal(false)
  }
  return (
    <div className="reset__modal-container">
            <div className="reset__modal">
                <p className="reset__modal-title">Are you sure you want to reset app?</p>
                <button 
                className="reset__modal-btn-no"
                onClick={() => setClearModal(false)}
                >
                  No
                </button>
                <button 
                className="reset__modal-btn-yes"
                onClick={clearList}
                >
                  Yes
                </button>
            </div>
        </div>
  );
};

export default ConfirmDeleteModal;