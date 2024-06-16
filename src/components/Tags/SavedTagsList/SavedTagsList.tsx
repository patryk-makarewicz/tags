import { useTranslation } from 'react-i18next';

import { TagsModel } from '../../../api/Tags';
import { Tag } from '../../../components';
import * as Styled from './SavedTagsList.styles';

type SavedTagsListProps = {
  savedTags: TagsModel[];
  onDelete: ({ id }: { id: string }) => void;
  isSavedTagsError: boolean;
  isDeleteTagLoading: boolean;
  deleteTagIds: readonly string[];
};
export const SavedTagsList = ({
  savedTags,
  onDelete,
  isSavedTagsError,
  isDeleteTagLoading,
  deleteTagIds,
}: SavedTagsListProps) => {
  const { t } = useTranslation();

  if (isSavedTagsError) {
    return (
      <Styled.Container>
        <Styled.Text>{t('messages.failed')}</Styled.Text>
      </Styled.Container>
    );
  }

  if (savedTags?.length === 0) {
    return (
      <Styled.Container>
        <Styled.Text>{t('tags.noTags')}</Styled.Text>
      </Styled.Container>
    );
  }

  return (
    <Styled.List>
      {savedTags.map((tag) => (
        <Tag
          key={tag.id}
          tag={tag}
          onDelete={() => onDelete({ id: tag.id })}
          isDeleteTagLoading={isDeleteTagLoading}
          deleteTagIds={deleteTagIds}
        />
      ))}
    </Styled.List>
  );
};
