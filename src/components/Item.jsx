
const Item = ({item, deleteItem, updateItem}) => {

  return (
    <li>
      <input type="checkbox" value={item.packed} onChange={() => updateItem(item.id)} />
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.num} {item.item}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;