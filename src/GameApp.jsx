import { AppRouter } from './router/AppRouter';
import { UserProvider } from './auth/context/UserProvider';
import './styles.css';

export const GameApp = () => {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  )
}

export default GameApp;