import * as yup from 'yup';

export const managerValidationSchema = yup.object().shape({
  position: yup.string().required(),
  salary: yup.number().integer().required(),
  hired_date: yup.date().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
