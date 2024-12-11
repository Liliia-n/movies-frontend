import * as Yup from 'yup';

export const updateMovieFormSchema = Yup.object({
  title: Yup.string().trim().required('common.titleRequired'),
  publishedYear: Yup.string().required('common.publishedYearRequired')
});

export type IUpdateMovieForm = {
  title: string;
  publishedYear: string;
};
