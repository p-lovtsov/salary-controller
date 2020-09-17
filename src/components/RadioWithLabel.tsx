import React from "react";
import { Field } from "redux-form";
import "./RadioWithLabel.scss";

type RadioViewProps = {
  isChecked: boolean;
  input: {
    value: string;
    onChange: (value: string) => void;
  };
};

const RadioView: React.FC<RadioViewProps> = ({
  input: { value, onChange },
  isChecked,
}) => {
  const onClick = () => onChange(value);

  return (
    <label className="label">
      <div className="outer-round" onClick={onClick}>
        {isChecked && <div className="inner-round" />}
      </div>
      &nbsp;{value}
    </label>
  );
};

type Props = {
  value: string;
  name: string;
  isChecked: boolean;
};

export const RadioWithLabel: React.FC<Props> = ({ value, name, isChecked }) => (
  <Field
    className="radio-input"
    type="radio"
    component={RadioView}
    name={name}
    value={value}
    isChecked={isChecked}
  />
);
