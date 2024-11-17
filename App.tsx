import React from 'react';
import {Provider} from 'react-redux';

import Root from './src';
import {store} from './src/state/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
