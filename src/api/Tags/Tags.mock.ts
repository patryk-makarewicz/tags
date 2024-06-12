import { request } from '../request';
import { TagsDTO } from './Tags.model';

export const getTagsListMock = () => {
  return request<TagsDTO>({
    records: [
      {
        id: 'recOOCGhyxR83tpnt',
        createdTime: '2021-11-03T11:06:10.000Z',
        fields: {
          availableTags: 'Jogi',
        },
      },
      {
        id: 'recOOCGhyxR83ynpt',
        createdTime: '2021-11-04T11:07:10.000Z',
        fields: {
          availableTags: 'User',
        },
      },
      {
        id: 'recOOCGhyxR83yaat',
        createdTime: '2021-11-05T11:07:10.000Z',
        fields: {
          availableTags: 'Jan',
        },
      },
    ],
  });
};
