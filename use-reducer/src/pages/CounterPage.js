import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return { ...state, count: state.count + 1 };
  } else if (action.type === 'decrement') {
    return { ...state, count: state.count - 1 };
  } else if (action.type === 'set-value-to-add') {
    return { ...state, valuetoAdd: action.payload };
  }
  return state;
};

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, { 
    count: initialCount,
    valuetoAdd: 0
  });

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: 'set-value-to-add', payload: value });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'increment', payload: state.valuetoAdd });
    dispatch({ type: 'set-value-to-add', payload: 0 });
  }

  return (
    <Panel>
      <div className='flex flex-col gap-5'>
        <div>Count: {state.count}</div>
        <div className="flex flex-row gap-2">
          <Button success rounded onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
          <Button danger rounded onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder="Enter something" 
          className="border p-2" 
          onChange={handleChange} 
          value={state.valuetoAdd || ''} />
          <Button primary type="submit">Submit</Button>
        </form>
      </div>
    </Panel>
  );
};

export default CounterPage;
