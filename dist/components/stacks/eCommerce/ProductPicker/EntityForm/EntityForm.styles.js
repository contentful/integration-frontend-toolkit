import o from '@contentful/f36-tokens';
import { css as i } from '@emotion/css';
const s = {
  root: i({ position: 'relative' }),
  heading: i({
    '&&': { fontSize: o.fontSizeM, fontWeight: o.fontWeightMedium, marginBottom: o.spacingS },
  }),
  searchBox: i({ marginBottom: o.spacingM }),
  controls: i({ marginBottom: o.spacingM }),
  searchResults: i({ overflowY: 'scroll', padding: `0 ${o.spacingXs}`, boxSizing: 'border-box' }),
  actions: i({ marginTop: o.spacingM, 'button:first-child': { marginRight: o.spacingM } }),
};
export { s as styles };
