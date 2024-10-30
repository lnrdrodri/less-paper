import { AuthProvider } from './app/contexts/AuthContext';
import { Router } from './router';

export function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}