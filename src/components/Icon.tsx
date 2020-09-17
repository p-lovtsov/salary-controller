import React from "react";
import { InfoCircle, XCircle } from 'react-bootstrap-icons';


type Props = {
  type: string;
};

export const Icon: React.FC<Props> = ({ type }) => {
  return type === 'info' ? <InfoCircle /> : <XCircle />
};
