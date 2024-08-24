export class LoginResDto {
  constructor(private email: string, private password: string) {
  }
}

export class RegisterDto {
  constructor(private role: string, private email: string, private firstName: string, private password: string) {
  }

}
