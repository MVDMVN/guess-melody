import { AppRoute, AuthorizationStatus} from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import AuthScreen from '../AuthSceen/AuthScreen';
import FailScreen from '../FailScreen/FailScreen';
import NotFoundScreen from '../NotFoundScreen/NotFoundScreen';
import WinScreen from '../WinScreen/WinScreen';
import GameScreen from '../GameScreen/GameScreen';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import {Questions} from '../../types/question';

type AppScreenProps = {
  errorsCount: number;
  questions: Questions;
}

function App({errorsCount, questions}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<WelcomeScreen errorsCount={errorsCount} />} />
        <Route path={AppRoute.Login} element={<AuthScreen />} />
        <Route path={AppRoute.Lose} element={<FailScreen />} />
        <Route path={AppRoute.Result} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <WinScreen />
          </PrivateRoute>
        }
        />
        <Route
          path={AppRoute.Game}
          element={
            <GameScreen
              questions={questions}
            />
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
