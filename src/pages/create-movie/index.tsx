import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, OutlinedInput, Typography } from '@mui/material';
import { t } from 'i18next';
import { useRouter } from 'next/router';

import { OutlinedBtn, PrimaryBtn } from 'src/common/components/buttons';
import { DragAndDropZone } from 'src/common/components/drag-and-drop';
import FormProvider from 'src/common/components/hook-form/form-provider';
import { Colors } from 'src/common/theme';
import { Path } from 'src/routing';
import { useCreateMovieMutation } from 'src/store/services/movies/movieApi';

import { createMovieFormSchema, ICreateMovieForm } from './validation';

export default function CreateMoviePage(): JSX.Element {
  const [img, setImg] = useState<File | null>(null);
  const navigate = useRouter();

  const [createMovie] = useCreateMovieMutation();

  const methods = useForm<ICreateMovieForm>({
    resolver: yupResolver(createMovieFormSchema),
    defaultValues: {
      title: '',
      publishedYear: ''
    },
    mode: 'onTouched'
  });

  const { handleSubmit, reset, setValue } = methods;

  const onCancel = (): void => {
    reset();
    setImg(null);
    navigate.push(Path.DASHBOARD);
  };

  const onSubmit = async (values: ICreateMovieForm): Promise<void> => {
    try {
      const formData = new FormData();

      formData.append('title', values.title);
      formData.append('publishingYear', values.publishedYear);

      if (img instanceof File) {
        formData.append('movieImg', img);
      }

      await createMovie(formData).unwrap();
      toast.success(t('common.movieCreated'));
      onCancel();
      navigate.push(Path.DASHBOARD);
    } catch (err) {
      toast.error(t('common.movieCreatedDelete'));
    }
  };

  return (
    <>
      <Typography variant="h2" sx={{ color: Colors.WHITE }} marginBottom="120px">
        {t('common.createMovie')}
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" gap="120px">
          <DragAndDropZone setFile={setImg} />

          <Box display="flex" flexDirection="column" gap="64px">
            <Box display="flex" flexDirection="column" gap="24px">
              <OutlinedInput
                name="title"
                autoComplete="off"
                placeholder="Title"
                sx={{
                  borderRadius: '10px',
                  width: '360px',
                  background: Colors.INPUT,
                  color: Colors.WHITE,
                  '&::placeholder': {
                    color: Colors.WHITE
                  }
                }}
                onChange={(e) => setValue('title', e.target.value)}
              />
              <OutlinedInput
                name="publishedYear"
                autoComplete="off"
                placeholder="Published year"
                sx={{
                  borderRadius: '10px',
                  width: '215px',
                  background: Colors.INPUT,
                  color: Colors.WHITE,
                  '&::placeholder': {
                    color: Colors.WHITE
                  }
                }}
                onChange={(e) => setValue('publishedYear', e.target.value)}
              />
            </Box>
            <Box display="flex" gap="16px" alignItems="center">
              <OutlinedBtn text={t('common.cancel')} onClick={onCancel} />
              <PrimaryBtn text={t('common.submit')} type="submit" />
            </Box>
          </Box>
        </Box>
      </FormProvider>
    </>
  );
}
