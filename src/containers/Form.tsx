import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxForm } from "redux-form";
import { Icon } from "../components/Icon";
import { RadioWithLabel } from "../components/RadioWithLabel";
import { Summary } from "../components/Summary";
import { NumberField } from "../components/NumberField";
import { Toggle } from "../components/Toggle";
import { Tooltip } from "../components/Tooltip";
import {
  FORM_HEADING,
  SALARY_TYPES,
  TOGGLE_LABELS,
  tooltipText,
  TOOLTIP_STATUSES,
} from "../constants";
import {
  attachTooltipAction,
  hideTooltipAction,
  showTooltipAction,
} from "../store/actions";
import {
  getSumm,
  getSalaryType,
  getToggle,
  getTooltip,
} from "../store/selectors";
import { getInputLabel } from "../store/utils";
import "./Form.scss";

const FormView: React.FC = () => {
  const dispatch = useDispatch();
  const salaryType = useSelector(getSalaryType);
  const tooltipStatus = useSelector(getTooltip);
  const toggleStatus = useSelector(getToggle);
  const summ = useSelector(getSumm);

  const showTooltip = () => {
    if (tooltipStatus === TOOLTIP_STATUSES.ATTACH) {
      return;
    }

    if (tooltipStatus === TOOLTIP_STATUSES.SHOW) {
      return;
    }

    dispatch(showTooltipAction);
  };

  const hideTooltip = () => {
    if (tooltipStatus === TOOLTIP_STATUSES.ATTACH) {
      return;
    }

    if (tooltipStatus === TOOLTIP_STATUSES.HIDE) {
      return;
    }

    dispatch(hideTooltipAction);
  };

  const attachTooltip = () => {
    if (tooltipStatus === TOOLTIP_STATUSES.ATTACH) {
      dispatch(hideTooltipAction);
    } else {
      dispatch(attachTooltipAction);
    }
  };

  const isTooltipShowed =
    tooltipStatus === TOOLTIP_STATUSES.ATTACH ||
    tooltipStatus === TOOLTIP_STATUSES.SHOW;

  const isSalaryTextFieldShowed = salaryType !== SALARY_TYPES.MIN;

  const isSummaryShowed = salaryType === SALARY_TYPES.MONTH;

  const isToggleShowed = salaryType !== SALARY_TYPES.MIN;

  return (
    <form>
      <h6 className="heading">{FORM_HEADING}</h6>
      <div className="radio">
        <RadioWithLabel
          name="type"
          value={SALARY_TYPES.MONTH}
          isChecked={salaryType === SALARY_TYPES.MONTH}
        />
      </div>
      <div className="radio withI">
        <RadioWithLabel
          name="type"
          value={SALARY_TYPES.MIN}
          isChecked={salaryType === SALARY_TYPES.MIN}
        />
        <Tooltip isShowed={isTooltipShowed} text={tooltipText}>
          <div
            className="iconWrapper"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onClick={attachTooltip}
          >
            {tooltipStatus === "attach" ? (
              <Icon type="x-circle" />
            ) : (
              <Icon type="info" />
            )}
          </div>
        </Tooltip>
      </div>
      <div className="radio">
        <RadioWithLabel
          name="type"
          value={SALARY_TYPES.DAY}
          isChecked={salaryType === SALARY_TYPES.DAY}
        />
      </div>
      <div className="radio">
        <RadioWithLabel
          name="type"
          value={SALARY_TYPES.HOUR}
          isChecked={salaryType === SALARY_TYPES.HOUR}
        />
      </div>
      {isToggleShowed && (
        <div className="toggle-wrapper">
          <Toggle
            fieldName="toggle"
            leftLabel={TOGGLE_LABELS.LEFT}
            rightLabel={TOGGLE_LABELS.RIGHT}
            isChecked={toggleStatus}
          />
        </div>
      )}
      <div className="text-field-wrapper">
        {isSalaryTextFieldShowed && (
          <NumberField name="summ" labelText={getInputLabel(salaryType)} />
        )}
      </div>
      {isSummaryShowed && (
        <div className="summary-wrapper">
          <Summary summ={summ} hasTax={toggleStatus} />
        </div>
      )}
    </form>
  );
};

export const Form = reduxForm({
  form: "controller",
  onSubmit: (value) => console.log(value),
  initialValues: {
    type: SALARY_TYPES.MONTH,
    toggle: false,
    summ: 40000,
  },
})(FormView);
