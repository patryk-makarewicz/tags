import { useTranslation } from 'react-i18next';

import * as Styled from './Footer.styles';

export const Footer = () => {
  const { t } = useTranslation();
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Styled.Footer>
      <Styled.Text>{t('footer.copyright', { year: year })}</Styled.Text>
    </Styled.Footer>
  );
};
