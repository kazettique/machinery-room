import { createMachine } from 'xstate';

type TrafficLightEvent = { type: 'NEXT' };

type TrafficContext = undefined;

type TrafficLightState =
  | { context: undefined; value: 'green' }
  | { context: undefined; value: 'yellow' }
  | { context: undefined; value: 'red' };

export const trafficLightMachine = createMachine<TrafficContext, TrafficLightEvent, TrafficLightState>({
  id: 'trafficLight',
  initial: 'red',
  states: {
    green: {
      on: { NEXT: 'yellow' },
    },
    red: {
      on: { NEXT: 'green' },
    },
    yellow: {
      on: { NEXT: 'red' },
    },
  },
});
