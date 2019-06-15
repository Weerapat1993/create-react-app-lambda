import React from 'react';
import { startReportingRuntimeErrors } from 'react-error-overlay';

export default class ErrorBoundary extends React.Component {
  state = { error: false }
  componentDidCatch() {
    // Nothing to do here: `react-error-overlay` take care of everything for us.

    // By doing a `setState` we prevent React to unmount the children. This allow us to see the
    // broken component under the error overlay.
    startReportingRuntimeErrors({});

    this.setState({});
  }

  render() {
    return this.props.children;
  }
}