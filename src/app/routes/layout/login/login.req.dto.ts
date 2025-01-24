export class singUpReqDto {
  constructor(private email: string, private username: string, private password: string) {
  }
}

export class SingInReqDto {
  constructor(private username: string, private password: string) {
  }
}
