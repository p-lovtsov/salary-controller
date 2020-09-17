import { SALARY_TYPES } from "../constants";

export const formatNumber = (num: number) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

export const getInputLabel = (salaryType: string) => {
  switch (salaryType) {
    case SALARY_TYPES.MONTH:
      return "₽";
    case SALARY_TYPES.MIN:
      return "₽";
    case SALARY_TYPES.DAY:
      return "₽ в день";
    case SALARY_TYPES.HOUR:
      return "₽ в час";
    default:
      return "₽";
  }
};
