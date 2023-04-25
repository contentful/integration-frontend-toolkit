import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export const styles = {
    root: css({
        position: 'relative',
    }),
    heading: css({
        '&&': {
            fontSize: tokens.fontSizeM,
            fontWeight: tokens.fontWeightMedium,
            marginBottom: tokens.spacingS
        }
    }),
    searchBox: css({
        marginBottom: tokens.spacingM
    }),
    controls: css({
        marginBottom: tokens.spacingM
    }),
    searchResults: css({
        overflowY: 'scroll',
        padding: `0 ${tokens.spacingXs}`,
        boxSizing: 'border-box'
    }),
    actions: css({
        marginTop: tokens.spacingM,
        'button:first-child': {
            marginRight: tokens.spacingM
        }
    })
};
