import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { colors } from '../../../styles';
import { Divider } from '../../Divider';
import * as Styled from './TagsCount.styles';

export const TagsCount = ({ count }: { count: number }) => {
  const { t } = useTranslation();

  const Rectangles = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Styled.Rectangle
        key={index}
        $backgroundColor={index < count ? (count < 4 ? colors.warning : colors.green) : colors.gray}
      />
    ));
  };

  return (
    <>
      <Divider />
      <Styled.Container>
        {count <= 3 && (
          <Styled.RectangleText $color={colors.warning}>{t('tags.infoTagsNumberLess')}</Styled.RectangleText>
        )}
        {count >= 4 && (
          <Styled.RectangleText $color={colors.green}>{t('tags.infoTagsNumberGood')}</Styled.RectangleText>
        )}
        <Rectangles />
      </Styled.Container>
      <Styled.Text>
        <Info strokeWidth={1} size={28} color={colors.gray} />{' '}
        {count < 5 ? t('tags.info', { number: 5 - count }) : t('tags.infoGood')}
      </Styled.Text>
    </>
  );
};
