import { Tag, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { colors } from '@/styles';

import * as Styled from './MockContent.styles';

export const MockContent = () => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Styled.Text $color={colors.gray}>
        <Sparkles strokeWidth={1} size={16} color={colors.gray} /> {t('mock.cms')}
      </Styled.Text>
      <Styled.Text>
        <Sparkles strokeWidth={1} size={16} color={colors.warning} /> {t('mock.text')}
      </Styled.Text>
      <Styled.Text>
        <Tag strokeWidth={1} size={16} color={colors.warning} /> {t('mock.tags')}
      </Styled.Text>
    </Styled.Wrapper>
  );
};
