import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home.view';
import NotFound404 from './views/NotFound404.view';
import EditorsListView from './views/EditorsList.view';
import PostCreateView from './views/PostCreate.view';
import EditorProfileView from './views/EditorProfile.view';
import { useEffect } from 'react';
import info from '../core/utils/info';

export default function App() {
  useEffect(() => {
    window.onunhandledrejection = function (error: PromiseRejectionEvent) {
      console.log(error);
      info({
        title: error.reason.response?.data.title || 'Erro',
        description: error.reason.response?.data.detail || error.reason.message
      });
    }
  }, []);

  return <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/editores" exact component={EditorsListView} />
      <Route path="/editores/:id" exact component={EditorProfileView} />
      <Route path="/posts/criar" exact component={PostCreateView} />
      <Route component={NotFound404} />
    </Switch>
  </BrowserRouter>
}
