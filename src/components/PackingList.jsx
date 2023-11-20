import Item from './Item.jsx';

const PackingList = ({items, deleteItem, updateItem}) => {

  return (
    <div className="list">
      <ul>
        {items.map(item => (
          <Item 
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          updateItem={updateItem}
          />
        ))}
      </ul>
    </div>
  )
};

export default PackingList;
