import { useState } from "react";

const Form = ({addItems}) => {

  const [num, setNum] = useState(0);
  const [item, setItem] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    // Validate
    if (item === "" || num === 0) {
      console.log("All fields are mandatory");
      return
    }

    // Create new item
    const newItem = {
      num,
      item,
      packed: false,
      id: Date.now()
    }

    //Add Item
    addItems(newItem)
    
    // Reset form
    setItem("");
    setNum(0);
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your trip?</h3>
      <select value={num} onChange={e => setNum(+e.target.value)}>
        <option value="">Select</option>
        {Array.from({length: 20}, (_, i) => i + 1).map(numb => (
          <option 
          key={numb}
          >
            {numb}
          </option>
        ))}
      </select>
      <input 
      type="text" 
      placeholder="item..."
      value={item}
      onChange={e => setItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
