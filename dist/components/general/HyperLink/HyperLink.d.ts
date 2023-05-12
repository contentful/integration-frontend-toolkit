import { MouseEventHandler } from 'react';
import { TextLinkProps } from '@contentful/f36-components';
interface Props {
  body: string;
  substring: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  hyperLinkHref?: string;
  icon?: JSX.Element;
  alignIcon?: TextLinkProps['alignIcon'];
}
declare const HyperLink: (props: Props) => JSX.Element;
export default HyperLink;
//# sourceMappingURL=HyperLink.d.ts.map
