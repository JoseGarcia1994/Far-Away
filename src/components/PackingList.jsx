import { initialItems } from '../data';
import Item from './Item.jsx';

const PackingList = () => {

  return (
    <div className="list">
      <ul>
        {initialItems.map(item => (
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
