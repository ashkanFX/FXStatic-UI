export class UseResDto {
  userId: number;
  userName: string;
  email: string;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  credentialsExpiryDate: string;
  accountExpiryDate: string;
  twoFactorSecret: string;
  signUpMethod: string;
  role: {
    roleId: number;
    roleName: string;
  }
  createdDate: string;
  updatedDate: string;
  twoFactorEnabled: boolean;
}
