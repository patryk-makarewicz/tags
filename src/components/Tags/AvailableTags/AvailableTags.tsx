import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { SearchInputTag, TagsModel } from '@/api/Tags';
import { Button, Input, Label, Spinner } from '@/components';

import * as Styled from './AvailableTags.styles';

type AvailableTagsProps = {
  savedTags: TagsModel[];
  searchTags: TagsModel[];
  searchWatch: string;
  register: UseFormRegister<SearchInputTag>;
  isSearchTagsLoading: boolean;
  isSaveTagsLoading: boolean;
};

export const AvailableTags = ({
  savedTags,
  searchTags,
  searchWatch,
  register,
  isSearchTagsLoading,
  isSaveTagsLoading,
}: AvailableTagsProps) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      {searchWatch?.length > 0 && (
        <Styled.Container>
          {isSearchTagsLoading ? (
            <Spinner width="24px" height="24px" />
          ) : (
            <>
              <Styled.List>
                {searchTags.map((tag) => {
                  const selectedTag = savedTags.some((saved) => saved.fields.name === tag.fields.name);

                  return (
                    <Styled.Item key={tag.id}>
                      <Input
                        type="checkbox"
                        value={tag.fields.name}
                        disabled={selectedTag}
                        width="13px"
                        {...register('query')}
                      />
                      <Label>{tag.fields.name}</Label>
                    </Styled.Item>
                  );
                })}
              </Styled.List>
              <Button type="submit" disabled={isSaveTagsLoading} loading={isSaveTagsLoading}>
                {t('tags.save')}
              </Button>
            </>
          )}
        </Styled.Container>
      )}
    </Styled.Wrapper>
  );
};
