import { X } from 'lucide-react';

import { TagsModel } from '../../../api/Tags';
import { Button, Spinner } from '../../../components';
import * as Styled from './Tag.styles';

type TagProps = {
  tag: TagsModel;
  onDelete: (id: string) => void;
  isDeleteTagLoading: boolean;
  deleteTagIds: readonly string[];
};
export const Tag = ({ tag, onDelete, isDeleteTagLoading, deleteTagIds }: TagProps) => {
  return (
    <Styled.Item>
      {tag.fields.name}
      <Button icon onClick={() => onDelete(tag.id)} disabled={isDeleteTagLoading}>
        {deleteTagIds.includes(tag.id) ? <Spinner width="14px" height="14px" /> : <X strokeWidth={1} size={16} />}
      </Button>
    </Styled.Item>
  );
};
