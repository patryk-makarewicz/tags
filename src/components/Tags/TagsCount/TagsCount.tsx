import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { colors } from '../../../styles';
import { Divider } from '../../Divider';
import * as Styled from './TagsCount.styles';

export const TagsCount = ({ count }: { count: number }) => {
  const { t } = useTranslation();

  return (
    <>
      <Divider />
      <div>{count}</div>
      <Styled.Text $color={colors.gray}>
        <Info strokeWidth={1} size={28} color={colors.gray} /> {t('tags.info')}
      </Styled.Text>
    </>
  );
};
