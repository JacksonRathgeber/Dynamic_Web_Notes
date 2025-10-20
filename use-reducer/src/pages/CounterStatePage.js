import { useState } from 'react';
import Panel from '../components/Panel';
import Button from '../components/Button';

const CounterStatePage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [valuetoAdd, setValueToAdd] = useState(0);

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setCount(count + valuetoAdd);
    setValueToAdd(0);
  }

  return (
    <Panel>
      <div className='flex flex-col gap-5'>
        <div>Count: {count}</div>
        <div className="flex flex-row gap-2">
          <Button success rounded onClick={() => setCount(count + 1)}>Increment</Button>
          <Button danger rounded onClick={() => setCount(count - 1)}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder="Enter something" 
          className="border p-2" 
          onChange={handleChange} 
          value={valuetoAdd || ''} />
          <Button primary type="submit">Submit</Button>
        </form>
      </div>
    </Panel>
  );
};

export default CounterStatePage;
