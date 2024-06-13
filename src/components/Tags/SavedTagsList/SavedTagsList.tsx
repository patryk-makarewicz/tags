import { TagsModel } from '../../../api/Tags';
import { Tag } from '../Tag';
import * as Styled from './SavedTagsList.styles';

type SavedTagsListProps = {
  savedTags: TagsModel[];
  onDelete: ({ id }: { id: string }) => void;
};
export const SavedTagsList = ({ savedTags, onDelete }: SavedTagsListProps) => (
  <Styled.List>
    {savedTags?.map((tag) => <Tag key={tag.id} tag={tag} onDelete={() => onDelete({ id: tag.id })} />)}
  </Styled.List>
);
