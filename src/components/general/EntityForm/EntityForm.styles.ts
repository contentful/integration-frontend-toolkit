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
    searchResults: css({
        overflowY: 'scroll',
        padding: '0 15px',
        boxSizing: 'border-box'
    })
};
