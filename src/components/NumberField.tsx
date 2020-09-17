import React from "react";
import { Field } from "redux-form";
import { MAX_SALARY } from "../constants";
import "./NumberField.scss";

type Props = {
  name: string;
  labelText: string;
};

const formatValue = (value: number) => new Intl.NumberFormat("ru-RU").format(value);

const normalize = (value: string) => {
  const number = parseInt(value.replace(/\s/g, ""));

  if(number > MAX_SALARY) {
    return MAX_SALARY;
  }

  return number ? number : 0;
};

export const NumberField: React.FC<Props> = ({ name, labelText }) => (
  <label className="text-field-label">
    <Field
      name={name}
      type="text"
      component="input"
      className="text-field"
      format={formatValue}
      normalize={normalize}
    />
    &nbsp;{labelText}
  </label>
);
