import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Main = React.lazy(() => import('./Main'));
const Login = React.lazy(() => import('./Login'));
const Quiz = React.lazy(() => import('./Quiz'));

export default function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/quiz" component={Quiz} />
          {/* 규칙을 벗어나면 root(/)로 리다이렉션 */}
          <Redirect path="*" to="/" />{' '}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
