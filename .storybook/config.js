import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'
import { themes } from '@storybook/theming';
import { configure as enzymeConfigure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import errorBoundaryDecorator from '../config/addons/error-boundary-addon/decorator';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/config/theme';
import { ApolloProvider } from 'react-apollo';
import { client } from '../src'
import 'antd/dist/antd.less'
import './test'

// Enzyme Config
enzymeConfigure({ adapter: new Adapter() });

// Option defaults.
addParameters({
  options: {
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom'
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#333' },
    // Override the default light theme
    light: { ...themes.normal, appBg: '#fff' }
  }
});


addDecorator(errorBoundaryDecorator); // Should be one of the decorator you add

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  // require('glob-loader!./stories.pattern')
}

setDefaults({
  header: false, // Toggles display of header with component name and description
  source: false,
});

addDecorator((story) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      {story()}
    </ThemeProvider>
  </ApolloProvider>
))

configure(loadStories, module);

setOptions({
  name: 'STORYBOOK',
  sidebarAnimations: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
})
