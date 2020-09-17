import React from "react";
import "./Tooltip.scss";

type Props = {
  text: string;
  isShowed: boolean;
};

export const Tooltip: React.FC<Props> = ({ text, isShowed, children }) => (
  <>
    {isShowed ? (
      <div className="tooltip-container">
        {children}
        <div className="tooltip">{text}</div>
      </div>
    ) : (
      children
    )}
  </>
);
