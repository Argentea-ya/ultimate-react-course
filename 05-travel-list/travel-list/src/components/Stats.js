export default function Stats({ items }) {
  if (!items.length) return <p className='stats'>Add items to the list</p>;

  const numPacked = items.filter((item) => item.packed).length;
  const numItems = items.length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className='stats'>
      {percentage === 100
        ? 'You got everything ready to go!'
        : `You have ${numItems} items on your list and you already packed ${numPacked} 
      (${percentage}%)`}
    </footer>
  );
}
