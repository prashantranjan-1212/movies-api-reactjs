import Counter from "../component/counter/counter.component";

export default {
  title: "Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: { ...Counter.defaultProps },
};

export const WithValue = {
  args: {
    initialValue: 10,
  },
};
