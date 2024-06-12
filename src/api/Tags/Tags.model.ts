export type TagsModel = {
  id: string;
  createdTime: string;
  fields: {
    availableTags: string;
  };
};

export type TagsDTO = {
  records: TagsModel[];
};
