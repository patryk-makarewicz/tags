import axios from 'axios';

import { BASE_URL, headers, useAPImocks } from '../config';
import { getTagsListMock } from './Tags.mock';
import { TagsDTO } from './Tags.model';

export const getTagsList = () =>
  useAPImocks
    ? getTagsListMock()
    : axios.get<TagsDTO>(`${BASE_URL}/tags?view=list`, { headers }).then(({ data }) => data);

export const getSearchTags = (query: string) =>
  useAPImocks
    ? getTagsListMock()
    : axios
        .get<TagsDTO>(`${BASE_URL}/tags?view=list&filterByFormula=SEARCH('${query}', {availableTags})`, { headers })
        .then(({ data }) => data);
