export class singUpReqDto {
  public username: string
  public email: string
  public password: string
  public role: string[]

  constructor(private role: string, private email: string, private firstName: string, private password: string) {
  }
}
