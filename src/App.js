


import React from 'react';
import { MantineProvider } from '@mantine/core';
import AgricultureTables from './components/AgricultureTables';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div>
        <AgricultureTables />
      </div>
    </MantineProvider>
  );
};

export default App;

