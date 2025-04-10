import { ImgIconEnum } from "../enums/imgIcon.enum";

export class ImgModel {
  _imageTag?: HTMLImageElement;

  constructor(src: ImgIconEnum, width: number, height: number, alt: string | null = null) {
    if (typeof document !== 'undefined') {
      this._imageTag = this.makeImgTag(src, width, height, alt);
    }
  }

  private makeImgTag(src: ImgIconEnum, width: number, height: number, alt: null | string): HTMLImageElement {
    const img = document.createElement("img");
    img.setAttribute('src', src);
    if (typeof alt === "string") {
      img.setAttribute('alt', alt);
    }
    img.setAttribute('height', String(height));
    img.setAttribute('width', String(width));
    return img;
  }
}
