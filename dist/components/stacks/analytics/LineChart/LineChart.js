import { jsx as r } from '../../../../_virtual/jsx-runtime.js';
import {
  Chart as o,
  CategoryScale as p,
  LinearScale as b,
  PointElement as g,
  LineElement as u,
  Title as y,
  Tooltip as C,
} from 'chart.js';
import { Line as L } from 'react-chartjs-2';
import t from '@contentful/f36-tokens';
import { parseRemToPxInt as e } from '../../../../helpers/ParseStylingToken/ParseStylingToken.js';
import { styles as S } from './LineChart.styles.js';
const h = 'Analytics line chart';
o.register(p, b, g, u, y, C);
const a = e(t.fontSizeS);
o.defaults.font.size = a;
o.defaults.font.family = t.fontStackPrimary;
o.defaults.font.weight = t.fontWeightMedium.toString();
o.defaults.borderColor = t.gray200;
o.defaults.datasets.line.borderColor = t.colorPrimary;
const A = 1.2,
  x = (l) => {
    const { dataValues: i, xAxisLabels: n, tooltipMetricLabel: c, accessibilityLabel: s } = l,
      d = { labels: n, datasets: [{ data: i }] },
      f = {
        responsive: !0,
        scales: {
          y: { beginAtZero: !0, suggestedMax: Math.max(...i) * A, ticks: { precision: 0 } },
        },
        plugins: {
          tooltip: {
            backgroundColor: t.gray900,
            bodyColor: t.colorWhite,
            padding: e(t.spacingXs),
            titleMarginBottom: e(t.spacing2Xs),
            titleFont: { size: a },
            bodyFont: { size: a, weight: '700' },
            displayColors: !1,
            callbacks: { beforeBody: () => c },
          },
        },
      },
      m = { 'aria-label': s };
    return r('div', {
      className: S.root,
      children: r(L, { data: d, options: f, fallbackContent: s, ...m }),
    });
  };
x.defaultProps = { accessibilityLabel: h };
export { x as default };
