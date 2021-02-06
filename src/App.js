import { useCallback } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from 'terra-application/lib/application-navigation';
import { start } from 'single-spa';

function App() {
  const handleAppReady = useCallback((node) => {
    start({
      urlRerouteOnly: true,
    });
  }, []);

  return (
    <ApplicationBase>
      <ApplicationNavigation 
        titleConfig={{
          title: 'Single-SPA Test',
        }}
        userConfig={
          {
            name: 'Example User',
            initials: 'EU',
          }
        }
        navigationItems={[]}
      >
        <Router ref={handleAppReady} >
          <Switch>
            <Route exact path="/">
              <ul>
                <li><Link to="/app1">App 1</Link></li>
              </ul>
            </Route>
            <Route path="/app1">
              <div id="single-spa-application:@nickpith/app1" style={{height: '100%'}}/>
            </Route>
            <Route>
              <div>Page Not Found</div>
            </Route>
          </Switch>
        </Router>
      </ApplicationNavigation>
    </ApplicationBase>
  );
}

export default App;
