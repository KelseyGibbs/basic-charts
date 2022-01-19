import React, { lazy, Suspense } from 'react';

const LazyBasicLineChart = lazy(() => import('./BasicLineChart'));

const BasicLineChart = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBasicLineChart {...props} />
  </Suspense>
);

export default BasicLineChart;
