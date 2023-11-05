import Dialog from "../component/dialog/dialog.component";

export default {
  title: "Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: { ...Dialog.defaultProps },
};
