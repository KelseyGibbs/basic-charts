import React, { FC } from 'react';
import styles from './BasicLineChart.module.scss';

interface BasicLineChartProps {}

const BasicLineChart: FC<BasicLineChartProps> = () => (
  <div className={styles.BasicLineChart} data-testid="BasicLineChart">
    BasicLineChart Component
  </div>
);

export default BasicLineChart;
