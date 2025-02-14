import { AuthProvider } from './app/contexts/auth/provider';
import { Router } from './router';
import { ToasterContainer } from './components/Toaster';
import { AddDialogProvider } from './app/contexts/AddDialog/Provider';

export function App() {
  return (
    <AuthProvider>
      <AddDialogProvider>
        <Router />
        <ToasterContainer />
      </AddDialogProvider>
    </AuthProvider>
  );
}