import { html, renderView, setter } from 'mates';

export const Counter = () => {
  // Mutable state - just JavaScript!
  let count = 0;

  // create a setter to update the state
  const increment = setter(() => count++);

  return () => html`
    <div>
      <h1>Count: ${count}</h1>
      <button @click=${increment}>Increment</button>
    </div>
  `;
};
