import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import { withKnobs, text } from '@storybook/addon-knobs';
import { testsText, testsEmoji } from './__tests__/Button.test'

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => {
    const story = (
      <Button onClick={action('Hello World')}>
        {text('Message', 'Hello World')}
      </Button>
    )
    testsText(story);
    return story;
  })
  .add('with some emoji', () => {
    const story = (
      <Button onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    )
    testsEmoji(story);
    return story;
  })
