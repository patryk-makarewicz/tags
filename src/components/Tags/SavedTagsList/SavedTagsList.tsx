import { useTranslation } from 'react-i18next';

import { TagsModel } from '../../../api/Tags';
import { Spinner, Tag } from '../../../components';
import * as Styled from './SavedTagsList.styles';

type SavedTagsListProps = {
  savedTags: TagsModel[];
  onDelete: ({ id }: { id: string }) => void;
  isSavedTagsLoading: boolean;
  isSavedTagsError: boolean;
};
export const SavedTagsList = ({ savedTags, onDelete, isSavedTagsLoading, isSavedTagsError }: SavedTagsListProps) => {
  const { t } = useTranslation();

  if (isSavedTagsLoading) {
    return (
      <Styled.Container>
        <Spinner width="20px" height="20px" />
      </Styled.Container>
    );
  }

  if (isSavedTagsError) {
    return (
      <Styled.Container>
        <Styled.Text>{t('messages.failed')}</Styled.Text>
      </Styled.Container>
    );
  }

  return (
    <Styled.List>
      {savedTags?.map((tag) => <Tag key={tag.id} tag={tag} onDelete={() => onDelete({ id: tag.id })} />)}
    </Styled.List>
  );
};
