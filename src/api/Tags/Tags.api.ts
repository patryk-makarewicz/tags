import axios from 'axios';

import { BASE_URL, headers, useAPImocks } from '../config';
import { getTagsListMock } from './Tags.mock';
import { DeleteTagModel, SaveTagModel, TagsDTO } from './Tags.model';

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

export const getSavedTags = () =>
  useAPImocks
    ? getTagsListMock()
    : axios
        .get<TagsDTO>(
          `${BASE_URL}/savedTags?view=default&sort%5B0%5D%5Bfield%5D=create&sort%5B0%5D%5Bdirection%5D=desc`,
          { headers }
        )
        .then(({ data }) => data);

export const saveTags = (data: SaveTagModel) => {
  return axios.post<SaveTagModel>(`${BASE_URL}/savedTags`, data, { headers }).then(({ data }) => data);
};

export const deleteTag = ({ id }: DeleteTagModel) => {
  return axios.delete<DeleteTagModel>(`${BASE_URL}/savedTags/${id}`, { headers }).then(({ data }) => data);
};
