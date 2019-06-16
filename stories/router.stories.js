import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Route, Link } from 'react-router-dom';

import StoryRouter from 'storybook-react-router';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Article = ({ match }) => (
  <div>
    <h2>Article: {match.params.id}</h2>
  </div>
);

Article.propTypes = {
  match: PropTypes.object.isRequired,
};

const ComponentLinks = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/articles/1">First Article</Link>
      </li>
      <li>
        <Link to="/articles/2">Second Article</Link>
      </li>
    </ul>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/articles/:id" component={Article} />
  </div>
);

const STORY_NAME = 'Linked stories'

storiesOf(STORY_NAME, module)
  .addDecorator(
    StoryRouter({
      '/about': linkTo(STORY_NAME, 'about'),
      '/articles/*': linkTo(STORY_NAME, 'article'),
    })
  )
  .add('home', () => <ComponentLinks />);

storiesOf(STORY_NAME, module)
  .addDecorator(
    StoryRouter(
      {
        '/': linkTo(STORY_NAME, 'home'),
        '/articles/*': linkTo(STORY_NAME, 'article'),
      },
      { initialEntries: ['/about'] }
    )
  )
  .add('about', () => <ComponentLinks />);

storiesOf(STORY_NAME, module)
  .addDecorator(
    StoryRouter(
      {
        '/': linkTo(STORY_NAME, 'home'),
        '/about': linkTo(STORY_NAME, 'about'),
      },
      { initialEntries: ['/articles/1'] }
    )
  )
  .add('article', () => <ComponentLinks />);