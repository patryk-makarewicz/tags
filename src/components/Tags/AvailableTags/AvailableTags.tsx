import { UseFormRegister } from 'react-hook-form';

import { SearchInputTag, TagsModel } from '../../../api/Tags';
import { Button, Input, Label } from '../../../components';
import * as Styled from './AvailableTags.styles';

type AvailableTagsProps = {
  savedTags: TagsModel[];
  searchTags: TagsModel[];
  searchWatch: string;
  register: UseFormRegister<SearchInputTag>;
};

export const AvailableTags = ({ savedTags, searchTags, searchWatch, register }: AvailableTagsProps) => {
  return (
    <Styled.Wrapper>
      {searchWatch?.length > 0 && (
        <>
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
          <Button type="submit">Zapisz</Button>
        </>
      )}
    </Styled.Wrapper>
  );
};
