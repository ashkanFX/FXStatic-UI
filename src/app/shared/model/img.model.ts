import {ImgIconEnum} from "../enums/imgIcon.enum";

export class ImgModel {
  constructor(src: ImgIconEnum, width: number, height: number, alt: string | null = null) {
     this.makeImgTag(src, width, height, alt)
  }

  _imageTag: HTMLImageElement = document.createElement("img")

  private makeImgTag(src: ImgIconEnum, width: number, height: number, alt: null | string) : void {
    this._imageTag.setAttribute('src', src)
    if (typeof alt === "string") {
      this._imageTag.setAttribute('alt', alt);
    }
    this._imageTag.setAttribute('height', String(height));
    this._imageTag.setAttribute('width', String(width));
  }
}
