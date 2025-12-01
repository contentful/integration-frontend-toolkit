import { MouseEventHandler } from 'react';
import { TextLink, TextLinkProps } from '@contentful/f36-components';

interface Props {
  body: string;
  substring: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
  icon?: JSX.Element;
  alignIcon?: TextLinkProps['alignIcon'];
}

const HyperLink = (props: Props) => {
  const { body, substring, onClick = () => {}, href, icon, alignIcon } = props;
  const textLinkComponent = (index: number) => (
    <TextLink
      onClick={onClick}
      href={href}
      target="_blank"
      rel="noopener noreferer"
      key={`textLink-${index}`}
      icon={icon}
      alignIcon={alignIcon}>
      {substring}
    </TextLink>
  );

  const formatLink = () => {
    const bodyWithTextLink = body.split(substring).reduce((prev: any, current, i) => {
      if (!i) {
        return [current];
      }
      return prev.concat(textLinkComponent(i), current);
    }, []);
    return bodyWithTextLink as JSX.Element;
  };

  return formatLink();
};

export default HyperLink;
