export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get Data() {
        return this._data;
    }
    get volume() {
        const Data = new Date(this._data.getTime());
        return this._quantidade * this._valor;
    }
}
