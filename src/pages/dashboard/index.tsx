import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Typography } from '@mui/material';
import { t } from 'i18next';
import { useRouter } from 'next/router';

import { PrimaryBtn, TextBtn } from 'src/common/components/buttons';
import { Colors } from 'src/common/theme';
import { MovieCard } from 'src/components/create-movie/MovieCard';
import { Path } from 'src/routing';
import { clearState } from 'src/store/features/auth/authSlice';
import { useAppDispatch } from 'src/store/hooks';
import { useGetUserMoviesQuery } from 'src/store/services/user/userApi';

export default function DashboardPage(): JSX.Element {
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  const { data: movies, isLoading, isError } = useGetUserMoviesQuery();

  const addNewMovie = (): void => {
    navigate.push(Path.CREATE_MOVIE);
  };

  const logout = (): void => {
    dispatch(clearState());
    navigate.push(Path.LOGIN);
  };

  if (isLoading || isError) {
    return (
      <Box
        sx={{
          background: Colors.BACKGROUND,
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {t('common.loading')}
      </Box>
    );
  }

  return movies && movies.length > 0 ? (
    <>
      <Box width="80%" display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h2" fontWeight="600">
          {t('dashboard.title')}
          <AddCircleOutlineIcon
            sx={{
              marginLeft: '15px',
              width: '26px',
              height: '26px',
              cursor: 'pointer'
            }}
            onClick={addNewMovie}
          />
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            gap: '12px'
          }}
          onClick={logout}
        >
          <TextBtn text="Logout" onClick={logout} />
          <LogoutIcon
            sx={{
              color: Colors.WHITE
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          marginTop: '120px'
        }}
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imgSrc={movie.image}
            year={movie.publishingYear}
          />
        ))}
      </Box>
    </>
  ) : (
    <Box display="flex" alignItems="center" gap="40px" flexDirection="column">
      <Typography variant="h2" fontWeight="600">
        {t('dashboard.noMovies')}
      </Typography>
      <PrimaryBtn text="Add a new movie" width="40%" onClick={addNewMovie} />
    </Box>
  );
}
