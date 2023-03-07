export class Negociacao {

    constructor(
        public  _data:Date,
        public readonly _quantidade:number,
        public readonly _valor:number) {
    }
    get Data(): Date {
        return this._data;
    }
    get volume() : number{
        const Data = new Date(this._data.getTime());
        return this._quantidade * this._valor;
    }
}