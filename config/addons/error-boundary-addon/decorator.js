import React from 'react';
import ErrorBoundary from './Preview/ErrorBoundary';

export default (storyFn) => <ErrorBoundary>{storyFn()}</ErrorBoundary>