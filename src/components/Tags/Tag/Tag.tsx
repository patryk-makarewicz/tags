import { X } from 'lucide-react';

import { TagsModel } from '../../../api/Tags';
import { Button } from '../../Button';
import * as Styled from './Tag.styles';

type TagProps = {
  tag: TagsModel;
  onDelete: (id: string) => void;
};
export const Tag = ({ tag, onDelete }: TagProps) => {
  return (
    <Styled.Item>
      {tag.fields.name}{' '}
      <Button icon onClick={() => onDelete(tag.id)}>
        <X strokeWidth={1} size={16} />
      </Button>
    </Styled.Item>
  );
};
