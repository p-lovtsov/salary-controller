import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { TOOLTIP_STATUSES } from "../constants";

import { Action } from "../types";

const tooltipReducer = (state = TOOLTIP_STATUSES.HIDE, action: Action) => {
  switch (action.type) {
    case TOOLTIP_STATUSES.SHOW:
      return TOOLTIP_STATUSES.SHOW;
    case TOOLTIP_STATUSES.HIDE:
      return TOOLTIP_STATUSES.HIDE;
    case TOOLTIP_STATUSES.ATTACH:
      return TOOLTIP_STATUSES.ATTACH;
    default:
      return state;
  };
};

export const rootReducer = combineReducers({
  tooltip: tooltipReducer,
  form: formReducer,
});
