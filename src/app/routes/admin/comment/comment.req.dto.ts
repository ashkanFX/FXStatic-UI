export class CommentReqDto {
  comment: String
  postId: number

  constructor() {
    this.comment = null
    this.postId = null
  }
}
