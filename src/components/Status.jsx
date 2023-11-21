
const Status = ({items}) => {

  const totalItems = items.length
  const numPacked = items.filter(item => item.packed).length
  const percentage = Math.round((numPacked / totalItems) * 100)

  return (
    <footer className="stats">
      {totalItems === 0 ? 
      <em>Start adding some items to your packing list</em> :
      <em>
        {percentage === 100 ? 'You got everthing! Ready to go ✈' : `You have ${totalItems} ${totalItems > 1 ? 'items' : 'item'} on your list, and you already packed ${numPacked} (${totalItems === 0 ? 0 : percentage}%)`}
      </em>}
    </footer>
  );
};

export default Status;
