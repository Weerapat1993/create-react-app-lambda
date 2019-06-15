import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import { specs } from 'storybook-addon-specifications'
import { testsText, testsEmoji } from './__tests__/Button.test'

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => {
    const story = (
      <Button onClick={action('Hello World')}>
        Hello World
      </Button>
    )
    specs(() => testsText(story));
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
    specs(() => testsEmoji(story));
    return story;
  })
