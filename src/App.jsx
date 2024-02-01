import PageLayout from "./PageLayout/PageLayout";

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "./util/http";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageLayout />
    </QueryClientProvider>
  );
}

export default App;
