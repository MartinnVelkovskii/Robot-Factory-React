class Robot {
    private _name: string;
    private _color: string;
    private _type: any;
    private _phrase: string;
    private _option1 : boolean;
    private _option2 : boolean;
    private _option3 : boolean;
    private _createdDate: number;
  
    constructor(
      name: string,
      type: any,
      color: string,
      phrase: string,
      option1 : boolean,
      option2 : boolean,
      option3 : boolean,
      ceatedDate: number
    ) {
      this._name = name;
      this._color = color;
      this._type = type;
      this._phrase = phrase;
      this._option1 = option1;
      this._option2 = option2;
      this._option3 = option3;
      this._createdDate = ceatedDate;
    }
  
    get name(): string {
      return this._name;
    }
  
    get color(): string {
      return this._color;
    }
    get type(): any {
      return this._type;
    }
    get phrase(): string {
      return this._phrase;
    }
    get option1(): any {
      return this._option1;
    }
    get option2(): any {
        return this._option2;
    }
    get option3(): any {
        return this._option3;
    }
    get createdDate(): number {
      return this._createdDate;
    }
}

export default Robot;