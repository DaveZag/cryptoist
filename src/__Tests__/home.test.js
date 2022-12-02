import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Home from '../Pages/Home';

describe('Tests for the Home page', () => {
  it('Should render the Home page properly', () => {
    const pageView = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(pageView).toMatchSnapshot();
  });
});
