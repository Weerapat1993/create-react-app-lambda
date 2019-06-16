import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { Button } from 'antd';
import { Background } from '../../src/components/Background';
import figmaDecorator from 'storybook-addon-figma'

// Options
const typeOptions = {
  Default: '',
  Primary: 'primary',
  Dashed: 'dashed',
  Danger: 'danger',
  Link: 'link',
};
const shapeOptions = {
  Default: '',
  Circle: 'circle',
  'Circle Outline': 'circle-outline',
  Round: 'round',
};
const sizeOptions = {
  Small: 'small',
  Default: 'default',
  Large: 'large',
};

const stories = storiesOf('Ant Design|Button', module);
  // Addons
  stories
    .addDecorator(withKnobs)
    .addDecorator(figmaDecorator({
      url: 'https://www.figma.com/file/LbcvMJxDtshDmYtdyfJfkA72/Button-Primary'
    }))
    .addParameters({
      backgrounds: [
        { name: 'White', value: '#fff' },
        { name: 'facebook', value: '#3b5998' },
      ],
      options: {
        panelPosition: 'right',
      }
    })
  stories
    .add('example', () => (
      <Background padding="10px" align="center">
        <Button 
          type={select('Type', typeOptions, 'primary')}
          shape={select('Shape', shapeOptions, '')}
          size={select('Size', sizeOptions, 'default')}
          icon={text('Icon', 'search')}
          loading={boolean('Loading', false)}
          ghost={boolean('Ghost', false)}
          block={boolean('Block', false)}
          disabled={boolean('Disabled', false)}
        >
          {text('Message', 'Button')}
        </Button>
      </Background>
    ));
