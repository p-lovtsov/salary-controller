import { State } from "../types";

export const getTooltip = (state: State) => state.tooltip;

export const getToggle = (state: State) => state.form.controller.values.toggle;

export const getSalaryType = (state: State) => state.form.controller.values.type;

export const getSumm = (state: State) => state.form.controller.values.summ;
