import Item from './Item.jsx';

const PackingList = ({items}) => {

  return (
    <div className="list">
      <ul>
        {items.map(item => (
          <Item 
          key={item.id}
          item={item}
          />
        ))}
      </ul>
    </div>
  )
};

export default PackingList;
