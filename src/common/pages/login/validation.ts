import * as Yup from 'yup';

export const loginFormSchema = Yup.object({
  email: Yup.string().trim().email('common.invalidEmail').required('common.emailRequired'),

  password: Yup.string().trim().required('common.passwordRequired'),

  rememberMe: Yup.boolean().optional()
});

export type ILoginForm = {
  email: string;
  password: string;
  rememberMe?: boolean;
};
