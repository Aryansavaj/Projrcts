import { MetaData } from "./meta";

type FeatureData = {
  id: number;
  imageUrl: string;
  title: string;
  desc: string;
};

type ExpertiseData = {
  id: number;
  imageUrl: string;
  titleBlack: string;
  titleBlue: string;
  subtitle: string;
  lists: { id: number; name: string }[];
  isImageLeft: boolean;
};

type StartSellingList = {
  id: number;
  list: string;
};

type CheckifiedUnivList = {
  id: number;
  list: string;
};

type BenefitData = {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
};

type TestimonyData = {
  id: number;
  imageUrl: string;
  name: string;
  job: string;
  message: string;
};

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  button: string;
};

export type HomeData = {
  metaData: MetaData;

  heroBlackTitle: string;
  heroBlueTitle: string;
  heroSubtitle: string;
  heroButton: string;
  heroJoinText: string;
  heroInteractiveText: string;
  heroOutstandingText: string;

  knowledgeText: string;

  platformBlackTitle: string;
  platformBlueTitle: string;
  platformSubtitle: string;
  featureData: FeatureData[];
  expertiseData: ExpertiseData[];

  startSellingBlackTittle: string;
  startSellingBlueTittle: string;
  startSellingSubtitle: string;
  startSellingList: StartSellingList[];
  startSellingButton: string;

  checkifiedUnivTitle: string;
  checkifiedUnivListTDesc: string;
  checkifiedUnivList: CheckifiedUnivList[];
  checkifiedUnivButton: string;

  benefitBlackTitle: string;
  benefitBlueTitle: string;
  benefitData: BenefitData[];

  testimonyBlackTitle: string;
  testimonyBlueTitle: string;
  testimonyData: TestimonyData[];

  contactBlackTitle: string;
  contactBlueTitle: string;
  contactSubtitle: string;
  contactForm: ContactForm;
};

export type SignInData = {
  title: string;
  email: string;
  password: string;
  rememberMe: string;
  forgotPassword: string;
  signInWith: string;
  noAccount: string;
};

export type SignUpData = {
  pageTitle: string;
  title: string;
  free: string;
  trial: string;
  email: string;
  fullname: string;
  password: string;
  buttonSubmit: string;
  signUpWith: string;
  haveAccount: string;
  bySign: string;
  privacy: string;
  terms: string;
};
