
const Item = ({item, deleteItem}) => {
  return (
    <li>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.num} {item.item}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;