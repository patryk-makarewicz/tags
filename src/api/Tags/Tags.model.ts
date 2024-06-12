export type TagsModel = {
  id: string;
  createdTime: string;
  fields: {
    name: string;
  };
};

export type TagsDTO = {
  records: TagsModel[];
};
