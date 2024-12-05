import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, OutlinedInput, Typography } from '@mui/material';

import FooterImg from 'src/common/assets/waves.png';
import { OutlinedBtn, PrimaryBtn } from 'src/common/components/buttons';
import { DragAndDropZone } from 'src/common/components/drag-and-drop';
import FormProvider from 'src/common/components/hook-form/form-provider';
import { Colors } from 'src/common/theme';
import { Path } from 'src/routing';
import { useGetMovieByIdQuery, useUpdateMovieMutation } from 'src/store/services/movies/movieApi';

import { IUpdateMovieForm, updateMovieFormSchema } from './validation';

export default function EditMoviePage(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();

  const [img, setImg] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [publishedYear, setPublishedYear] = useState<string>('');

  const { data: movieDetails, isLoading } = useGetMovieByIdQuery(id ?? '', {
    skip: !id
  });

  const [updateMovie] = useUpdateMovieMutation();

  const methods = useForm<IUpdateMovieForm>({
    resolver: yupResolver(updateMovieFormSchema),
    defaultValues: {
      title: '',
      publishedYear: ''
    },
    mode: 'onTouched'
  });

  const { handleSubmit, reset, setValue } = methods;

  useEffect(() => {
    if (movieDetails) {
      setValue('title', movieDetails.title);
      setValue('publishedYear', movieDetails.publishingYear);
      setTitle(movieDetails.title);
      setPublishedYear(movieDetails.publishingYear);
    }
  }, [movieDetails, setValue, isLoading]);

  const onCancel = (): void => {
    reset();
    setImg(null);
    navigate(Path.DASHBOARD);
  };

  const onSubmit = async (values: IUpdateMovieForm): Promise<void> => {
    try {
      const formData = new FormData();

      formData.append('title', values.title);
      formData.append('publishingYear', values.publishedYear);

      if (img instanceof File) {
        formData.append('movieImg', img);
      }

      await updateMovie({
        id: movieDetails?.id ?? '',
        formData
      }).unwrap();
      toast.success('Movie updated successfully');
      onCancel();
    } catch (err) {
      toast.error('Error updating movie');
    }
  };

  return (
    <Box
      sx={{
        background: Colors.BACKGROUND,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '80px 0 150px'
      }}
    >
      <img
        src={FooterImg}
        alt="footer"
        width="100%"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 1,
          objectFit: 'contain'
        }}
      />

      <Typography variant="h2" sx={{ color: Colors.WHITE }} marginBottom="120px">
        Edit
      </Typography>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" gap="120px">
          <DragAndDropZone setFile={setImg} />

          <Box display="flex" flexDirection="column" gap="64px">
            <Box display="flex" flexDirection="column" gap="24px">
              <OutlinedInput
                name="title"
                value={title}
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
                onChange={(e) => {
                  setValue('title', e.target.value);
                  setTitle(e.target.value);
                }}
              />
              <OutlinedInput
                name="publishedYear"
                autoComplete="off"
                placeholder="Published year"
                value={publishedYear}
                sx={{
                  borderRadius: '10px',
                  width: '215px',
                  background: Colors.INPUT,
                  color: Colors.WHITE,
                  '&::placeholder': {
                    color: Colors.WHITE
                  }
                }}
                onChange={(e) => {
                  setValue('publishedYear', e.target.value);
                  setPublishedYear(e.target.value);
                }}
              />
            </Box>
            <Box display="flex" gap="16px" alignItems="center">
              <OutlinedBtn text="Cancel" onClick={onCancel} />
              <PrimaryBtn text="Update" type="submit" />
            </Box>
          </Box>
        </Box>
      </FormProvider>
    </Box>
  );
}