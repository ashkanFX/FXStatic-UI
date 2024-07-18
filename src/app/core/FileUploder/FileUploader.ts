// export class FileUploader {
//   public size: number;
//   public type: string;
//   public name: string;
//   public disabled: boolean;
//   public formController: boolean;
// }
export class PersonElement extends HTMLElement {
  private _name: string = '';
  private _age: number = 0;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['name', 'age'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case 'name':
        this._name = newValue;
        break;
      case 'age':
        this._age = Number(newValue);
        break;
    }
    this.render();
  }

  private render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <div>
          <p>Name: ${this._name}</p>
          <p>Age: ${this._age}</p>
        </div>
      `;
    }
  }

  set name(value: string) {
    this.setAttribute('name', value);
  }

  get name() {
    return this.getAttribute('name') || '';
  }

  set age(value: number) {
    this.setAttribute('age', value.toString());
  }

  get age() {
    return Number(this.getAttribute('age'));
  }
}
