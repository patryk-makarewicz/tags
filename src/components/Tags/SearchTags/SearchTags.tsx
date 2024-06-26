import { Search, X } from 'lucide-react';
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { SearchInputTag } from '@/api/Tags';
import { Button, Input } from '@/components';

import * as Styled from './SearchTags.styles';

type SearchTagsProps = {
  register: UseFormRegister<SearchInputTag>;
  onHandleResetForm: () => void;
  searchWatch: string;
};

export const SearchTags = ({ register, onHandleResetForm, searchWatch }: SearchTagsProps) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Search strokeWidth={2} size={20} />
      <Input defaultValue="" placeholder={t('tags.searchPlaceholder')} autoComplete="off" {...register('search')} />
      {searchWatch?.length > 0 && (
        <Button icon onClick={onHandleResetForm}>
          <X strokeWidth={1} size={16} />
        </Button>
      )}
    </Styled.Wrapper>
  );
};
