import { UseFormRegister } from 'react-hook-form';

import { SearchInputTag, TagsModel } from '../../../api/Tags';
import { Button, Input, Label } from '../../../components';

type AvailableTagsProps = {
  savedTags: TagsModel[];
  searchTags: TagsModel[];
  searchWatch: string;
  register: UseFormRegister<SearchInputTag>;
};

export const AvailableTags = ({ savedTags, searchTags, searchWatch, register }: AvailableTagsProps) => {
  return (
    <div>
      {searchWatch?.length > 0 && (
        <div>
          <h4>Tags list to select:</h4>
          {searchTags.map((tag) => {
            const selectedTag = savedTags.some((saved) => saved.fields.name === tag.fields.name);

            return (
              <div key={tag.id}>
                <Input type="checkbox" value={tag.fields.name} disabled={selectedTag} {...register('query')} />
                <Label>{tag.fields.name}</Label>
              </div>
            );
          })}
          <Button type="submit">Zapisz</Button>
        </div>
      )}
    </div>
  );
};
