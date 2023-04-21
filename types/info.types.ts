export type dataItem = {
  content: string,
  tag: string,
  props?: {}
}

export type textItem = {
  text: dataItem[]
}

export type dataType = textItem[]