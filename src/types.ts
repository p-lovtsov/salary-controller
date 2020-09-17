export type Action = {type: string, payload?: unknown};

export type State = {
  tooltip: string;
  form: {
    controller: {
      values: {
        type: string;
        toggle: boolean;
        summ: number;
      },
      initial: {
        type: string;
        toggle: boolean;
        summ: number;
      },
    }
  }
};
