import React from "react";
import { CURRENCY } from "../constants";
import { formatNumber } from "../store/utils";
import "./Summary.scss";

type Props = {
  summ: number;
  hasTax: boolean;
};

const SUMMARY_TEXTS = {
  FIRST_LINE: "сотрудник будет получать на руки",
  SECOND_LINE: "НДФЛ, 13% от оклада",
  THIRD_LINE: "за сотрудника в месяц",
};

export const Summary: React.FC<Props> = ({ summ, hasTax }) => {
  const tax = hasTax
    ? Math.round(summ * 0.13)
    : Math.round((summ / 87) * 100 - summ);
  const firstLineSumm = hasTax ? summ - tax : +summ;
  const thirdLineSumm = hasTax ? +summ : +summ + tax;

  return (
    <div className="summary">
      <p className="line">
        <b>
          {formatNumber(firstLineSumm)} {CURRENCY}
        </b>{" "}
        {SUMMARY_TEXTS.FIRST_LINE}
      </p>
      <p className="line">
        <b>
          {formatNumber(tax)} {CURRENCY}
        </b>{" "}
        {SUMMARY_TEXTS.SECOND_LINE}
      </p>
      <p className="line">
        <b>
          {formatNumber(thirdLineSumm)} {CURRENCY}
        </b>{" "}
        {SUMMARY_TEXTS.THIRD_LINE}
      </p>
    </div>
  );
};
