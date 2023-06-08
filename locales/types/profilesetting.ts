import { MetaData } from "./meta"

type ProfileForm = {
  firstName: string
  lastName: string
  streetaddress: string
  zipcodeNumber:string
  city:string
  country:string
  button: string
}

type SupportData = {
  id: number
  imageUrl: string
  title: string
  subtitle: string
  action: string
}

export type ProfileData = {
  metaData: MetaData

  contactBlackTitle: string
  contactBlueTitle: string
  contactSubtitle: string

  formBlackTitle: string
  formBlueTitle: string
  formSubtitle: string
  profileForm: ProfileForm

  supportData: SupportData[]
}
