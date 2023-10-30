import { assign, createMachine } from 'xstate';

export const counterMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYgEkA5AYQCUBRAWTooBUBtABgF1FQAHAPaxcAF1wD8vEAA9EARgAsAOgDMAdjkcAnOoCsAGhABPeRwAcShbpVyATLoC+Dw2ix5CpACJ1ajZu24pQWExCSlZBDtDE0jbJ2cQfAEIOClXHAJiIKFRcUkkGURbZQ45LWs7A2Mi7SUtDgA2e3iHIA */
  context: {
    // Here, we will define the initial state of the machine
    count: 0,
  },
  on: {
    DECREMENT: {
      actions: assign({
        count: (context) => context.count - 1,
      }),
    },
    // Here we will define the events that will trigger the transitions.
    INCREMENT: {
      actions: assign({
        count: (context) => context.count + 1,
      }),
    },
  },
});
