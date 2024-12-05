import { Roles } from 'src/common/enums';

type Token = {
  token: string;
};

type User = {
  id: string;
  name: string;
  firstName: string;
  surname: string;
  email: string;
  idNumber: string;
  contactDetails: string;
  locationName: string;
  locationLat: number;
  locationLon: number;
  role: Roles[];
  participantNo: number;
  isOfficial: boolean;
  image: string;
  cellNumber: string | null;
  dob: string;
  userImage: string | null;
  membership_No: string;
  token: string;
  validTo: string;
};

type AuthState = {
  user: User | null;
  token: Token | null;
};

export type { User, Token, AuthState };
