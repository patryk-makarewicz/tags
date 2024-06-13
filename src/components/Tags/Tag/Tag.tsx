import { TagsModel } from '../../../api/Tags';

type TagProps = {
  tag: TagsModel;
  onDelete: (id: string) => void;
};
export const Tag = ({ tag, onDelete }: TagProps) => {
  return (
    <li>
      {tag.fields.name} <button onClick={() => onDelete(tag.id)}>X</button>
    </li>
  );
};
