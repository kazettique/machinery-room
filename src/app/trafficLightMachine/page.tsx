import { useMachine } from '@xstate/react';

import { trafficLightMachine } from './machine';

export default function TrafficLight() {
  const [state, send] = useMachine(trafficLightMachine);

  console.log('state', state);

  return (
    <div>
      <div>{String(state.value)}</div>
      <button onClick={() => send('NEXT')}>change</button>
    </div>
  );
}
