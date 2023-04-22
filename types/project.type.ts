export type ProjectImageType = {
  asset: {
    _ref: string,
    _type: string
  },
  _key: string,
  _type: 'image'
}

export type ProjectType = {
  images: ProjectImageType[],
  _createdAt: string,
  _rev: string,
  _type: string,
  _id: string,
  title: string,
  _updatedAt: string
};