import React from "react";
import { ToggleOn } from "react-bootstrap-icons";
import { Field } from "redux-form";
import "./Toggle.scss";

type Props = {
  isChecked: boolean;
  leftLabel: string;
  rightLabel: string;
  fieldName: string;
};

export const Toggle: React.FC<Props> = ({
  isChecked,
  leftLabel,
  rightLabel,
  fieldName,
}) => (
  <label className="toggle-label">
    <span className={`left-label ${isChecked && "left-label--active"}`}>
      {leftLabel}&nbsp;
    </span>
    <Field
      className="field"
      type="checkbox"
      name={fieldName}
      component="input"
    />
    <ToggleOn className={`icon ${isChecked && "icon--colored"}`} />
    <span className={`right-label ${!isChecked && "left-label--active"}`}>
      &nbsp;{rightLabel}
    </span>
  </label>
);
