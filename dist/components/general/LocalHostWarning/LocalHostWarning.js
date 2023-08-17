import { jsx as e, jsxs as t } from '../../../_virtual/jsx-runtime.js';
import { Flex as r, Note as i, Paragraph as o, TextLink as n } from '@contentful/f36-components';
const a = () =>
  e(r, {
    marginTop: 'spacingXl',
    justifyContent: 'center',
    children: t(i, {
      title: 'App running outside of Contentful',
      style: { maxWidth: '800px' },
      children: [
        t(o, {
          children: [
            'Contentful Apps need to run inside the Contentful web app to function properly. Install the app into a space and render your app into one of the',
            ' ',
            e(n, {
              href: 'https://www.contentful.com/developers/docs/extensibility/ui-extensions/sdk-reference/#locations',
              children: 'available locations',
            }),
            '.',
          ],
        }),
        e('br', {}),
        t(o, {
          children: [
            'Follow',
            ' ',
            e(n, {
              href: 'https://www.contentful.com/developers/docs/extensibility/app-framework/tutorial/#embed-your-app-in-the-contentful-web-app',
              children: 'our guide',
            }),
            ' ',
            'to get started or',
            ' ',
            e(n, {
              href: 'https://app.contentful.com/deeplink?link=apps',
              children: 'open Contentful',
            }),
            ' ',
            'to manage your app.',
          ],
        }),
      ],
    }),
  });
export { a as default };
