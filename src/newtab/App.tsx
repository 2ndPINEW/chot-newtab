import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NewTab from './NewTab';

// Create a client
const queryClient = new QueryClient();

export const App = () => {
  document.body.className = 'w-full h-full';

  return (
    <QueryClientProvider client={queryClient}>
      <NewTab />
    </QueryClientProvider>
  );
};
