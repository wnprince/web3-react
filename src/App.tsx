import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import Layout from './layouts';
import useAuth from './hooks/useAuth';

import Landing from './pages/Landing';

import ConnectModal from './components/ConnectModal';

function App() {
  const [isOpen, setOpen] = useState(false);

  const { account } = useWeb3React()
  const { login, logout } = useAuth()

  return (
    <Router>
      <Switch>
        <Layout
          isOpen={isOpen} setOpen={setOpen}
          account={account}
          login={login} logout={logout}
        >
          <Route exact path='/'>
            <Landing account={account} />
          </Route>
          <ConnectModal login={login} open={isOpen} setOpen={setOpen} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
