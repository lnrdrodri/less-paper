import { Toaster } from "react-hot-toast"

export function ToasterContainer() {
  return (
    <Toaster
      toastOptions={{
        duration: 3000,
        style: {
          background: 'var(--gray-3)',
          border: '1px solid var(--slate-7)',
          color: '#fff',
          borderRadius: '4px',
          padding: '12px 24px',
        },
      }}
    />
  );
}