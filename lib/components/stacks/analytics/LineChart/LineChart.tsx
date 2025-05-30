// third party imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import tokens from '@contentful/f36-tokens';

// local imports
import { parseRemToPxInt } from '../../../helpers/ParseStylingToken/ParseStylingToken';
import { styles } from './LineChart.styles';

const ACCESSIBILITY_LABEL = 'Analytics line chart';

export interface Props {
  dataValues: number[];
  xAxisLabels: string[];
  tooltipMetricLabel?: string;
  accessibilityLabel?: string;
}

const Y_AXIS_SCALAR = 1.2;

const LineChart = (props: Props) => {
  const { dataValues, xAxisLabels, tooltipMetricLabel, accessibilityLabel } = props;

  const defaultFontSize = parseRemToPxInt(tokens.fontSizeS);
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);
  ChartJS.defaults.font.size = defaultFontSize;
  ChartJS.defaults.font.family = tokens.fontStackPrimary;
  ChartJS.defaults.font.weight = tokens.fontWeightMedium;
  ChartJS.defaults.borderColor = tokens.gray200;
  ChartJS.defaults.datasets.line.borderColor = tokens.colorPrimary;

  const data: ChartData<'line'> = {
    labels: xAxisLabels,
    datasets: [
      {
        data: dataValues,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: Math.max(...dataValues) * Y_AXIS_SCALAR,
        ticks: {
          precision: 0,
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: tokens.gray900,
        bodyColor: tokens.colorWhite,
        padding: parseRemToPxInt(tokens.spacingXs),
        titleMarginBottom: parseRemToPxInt(tokens.spacing2Xs),
        titleFont: {
          size: defaultFontSize,
        },
        bodyFont: {
          size: defaultFontSize,
          // TO:DO once font weight is added to F36, replace with token
          weight: 700,
        },
        displayColors: false,
        callbacks: {
          beforeBody: () => tooltipMetricLabel,
        },
      },
    },
  };

  const chartProps = {
    'aria-label': accessibilityLabel,
  };

  return (
    <div className={styles.root}>
      <Line data={data} options={options} fallbackContent={accessibilityLabel} {...chartProps} />
    </div>
  );
};

LineChart.defaultProps = {
  accessibilityLabel: ACCESSIBILITY_LABEL,
};

export default LineChart;
