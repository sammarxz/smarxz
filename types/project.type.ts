export type ProjectImageType = {
  asset: {
    _ref: string,
    _type: string
  },
  _key: string,
  _type: 'image'
}

export type ProjectsType = {
  images: ProjectImageType[],
  _createdAt: string,
  _rev: string,
  _type: string,
  _id: string,
  title: string,
  _updatedAt: string
}[];