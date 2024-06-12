import axios from 'axios';

import { BASE_URL, headers, useAPImocks } from '../config';
import { getTagsListMock } from './Tags.mock';
import { TagsDTO } from './Tags.model';

export const getTagsList = () =>
  useAPImocks
    ? getTagsListMock()
    : axios.get<TagsDTO>(`${BASE_URL}/tags?view=default`, { headers }).then(({ data }) => data);

export const getSearchTags = (query: string) =>
  useAPImocks
    ? getTagsListMock()
    : axios
        .get<TagsDTO>(`${BASE_URL}/tags?view=default&filterByFormula=SEARCH('${query}', {name})`, { headers })
        .then(({ data }) => data);
