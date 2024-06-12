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

export type SaveTagModel = {
  records: {
    fields: {
      name: string;
    };
  }[];
};

export type DeleteTagModel = {
  id: string;
};
