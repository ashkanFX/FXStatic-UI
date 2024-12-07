export class UserResDto {
  userId: number;
  userName: string;
  email: string;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  twoFactorEnabled: false;
  twoFactorSecret: null;
  credentialsExpiryDate: string;
  accountExpiryDate: string;
  signUpMethod: string;
  createdDate: string;
  updatedDate: string;
  constructor() {}
}
export class CurrentUserResDto {
  id: number
  username: string
  email: string
  accountNonLocked:boolean
  accountNonExpired: boolean
  credentialsNonExpired: boolean
  enabled:boolean
  credentialsExpiryDate: string
  accountExpiryDate: string
  roles: string[]
  twoFactorEnabled: boolean
}
