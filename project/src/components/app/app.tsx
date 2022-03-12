import { AppRoute, AuthorizationStatus} from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import AtristQuestionScreen from '../ArtistQuestionScreen.tsx/AtristQuestionScreen';
import GenreQuestionScreen from '../GenreQuestionScreen/GenreQuestionScreen';
import AuthScreen from '../AuthSceen/AuthScreen';
import FailScreen from '../FailScreen/FailScreen';
import NotFoundScreen from '../NotFoundScreen/NotFoundScreen';
import WinScreen from '../WinScreen/WinScreen';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

type AppScreenProps = {
  errorsCount: number;
}

function App({errorsCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<WelcomeScreen errorsCount={errorsCount} />} />
        <Route path={AppRoute.DevArtist} element={<AtristQuestionScreen />} />
        <Route path={AppRoute.DevGenre} element={<GenreQuestionScreen />} />
        <Route path={AppRoute.Login} element={<AuthScreen />} />
        <Route path={AppRoute.Lose} element={<FailScreen />} />
        <Route path={AppRoute.Result} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <WinScreen />
          </PrivateRoute>
        }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
