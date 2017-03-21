import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import WelcomeContainer from './welcome/welcome_container';
import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import QuizNavContainer from './header/quiz_nav_container';
import QuizCardsContainer from './quizzes/quiz_cards_container';
import QuestionCardsContainer from './questions/question_cards_container';
import ResultsContainer from './results/results_container';
import QuizIndexContainer from './quizzes/quiz_index_container';
import QuizContainer from './quiz/quiz_container';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/quizzes');
    }
  };

  const _redirectIfLoggedOut = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={WelcomeContainer} />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/index" component={QuizIndexContainer} />
          <Route path="/quizzes" component={QuizCardsContainer} onEnter={_redirectIfLoggedOut} />
          <Route path="/quiz/:quizId" component={QuizNavContainer} onEnter={_redirectIfLoggedOut} />
          <Route path="/quiz/:quizId/view" component={QuizContainer} onEnter={_redirectIfLoggedOut} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
