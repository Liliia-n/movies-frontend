import * as Yup from 'yup';

export const createMovieFormSchema = Yup.object({
  title: Yup.string().trim().required('common.titleRequired'),
  publishedYear: Yup.string().required('common.publishedYearRequired')
});

export type ICreateMovieForm = {
  title: string;
  publishedYear: string;
};
