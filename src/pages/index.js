import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Main = React.lazy(() => import('./Main'));
const Quiz = React.lazy(() => import('./Quiz'));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
