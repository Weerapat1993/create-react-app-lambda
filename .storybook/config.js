import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options'
import { setDefaults } from '@storybook/addon-info'
import errorBoundaryDecorator from '../config/addons/error-boundary-addon/decorator';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/config/theme';


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
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);

setOptions({
  name: 'Core UI',
  addonPanelInRight: true,
  sidebarAnimations: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
})
