import Quill from 'quill';

// 👇 اینو اضافه کن
const BlockEmbed = Quill.import('blots/block/embed') as any;

export class CustomBox extends BlockEmbed {
  static blotName = 'customBox';
  static tagName = 'div';
  static className = 'my-box';

  static create(value: string): any {
    const node = super.create();
    node.innerHTML = value;
    return node;
  }

  static value(node: any): any {
    return node.innerHTML;
  }
}


