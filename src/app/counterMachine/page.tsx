import { useMachine } from '@xstate/react';

import { counterMachine } from './machine';

export default function Page() {
  const [state, send] = useMachine(counterMachine);

  return (
    <>
      <h1>{state.context.count}</h1>
      <button onClick={() => send('DECREMENT')}>decrement</button>
      <button onClick={() => send('INCREMENT')}>increment</button>
    </>
  );
}
