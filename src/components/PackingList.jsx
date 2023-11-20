import Item from './Item.jsx';

const PackingList = ({items, deleteItem}) => {

  return (
    <div className="list">
      <ul>
        {items.map(item => (
          <Item 
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  )
};

export default PackingList;
