
const Item = ({item}) => {
  return (
    <li>
      <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
        {item.num} {item.item}
      </span>
      <button>❌</button>
    </li>
  );
};

export default Item;