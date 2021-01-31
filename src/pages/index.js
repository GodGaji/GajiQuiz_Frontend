import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Main = React.lazy(() => import('./Main'));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" component={Main} exact />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
