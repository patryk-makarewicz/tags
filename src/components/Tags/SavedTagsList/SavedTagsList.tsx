import { TagsModel } from '../../../api/Tags';
import { Tag } from '../Tag';

type SavedTagsListProps = {
  savedTags: TagsModel[];
  onDelete: ({ id }: { id: string }) => void;
};
export const SavedTagsList = ({ savedTags, onDelete }: SavedTagsListProps) => (
  <ul>{savedTags?.map((tag) => <Tag key={tag.id} tag={tag} onDelete={() => onDelete({ id: tag.id })} />)}</ul>
);
