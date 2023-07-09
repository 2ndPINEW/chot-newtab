import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { Clock } from './components/Clock';
import { ContributesGraph } from './components/ContributesGraph';
import { DynamicBackground } from './components/DynamicBackground';

const queryClient = new QueryClient();

const NewTab = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DynamicBackground></DynamicBackground>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <Clock></Clock>
        <ContributesGraph></ContributesGraph>
      </div>
    </QueryClientProvider>
  );
};

export default NewTab;
