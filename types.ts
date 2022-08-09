export type ResponseItem = {
  id: string,
  title: string,
  description: string,
  location: string,
  date: string,
  image: string,
  isFeatured: boolean
}

export type Response = ResponseItem[]