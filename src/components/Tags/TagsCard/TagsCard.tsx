import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Button } from '../../Button';
import * as Styled from './TagsCard.styles';

export const TagsCard = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Styled.Header>
        <h4>{t('tags.header')}</h4>
        <Button icon onClick={() => console.log('Click button close tags card')}>
          <X strokeWidth={2} size={20} />
        </Button>
      </Styled.Header>
      {children}
    </Styled.Wrapper>
  );
};
