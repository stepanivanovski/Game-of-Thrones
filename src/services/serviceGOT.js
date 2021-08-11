export default class serviceGOT {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    console.log(res);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllBooks() {
    const res = await this.getResource(`/books/`);

    return res.map(book => this._transformBook(book));
  }
  
  async getBook(id) {
    const book = await this.getResource(`/books/${id}/`);
    return this._transformBook(book);
  }
  
  async getAllCharacters() {
    const res = await this.getResource(`/characters?page=5&pageSize=10`);

    return res.map(char => this._transformCharacter(char));
  }
  
  async getCharacter(id) {
    const char = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(char);
  }
  
  async getAllHouses() {
    const res = await this.getResource(`/houses/`);

    return res.map(house => this._transformHouse(house));
  }
  
  async getHouse(id) {
    const house = await this.getResource(`/house/${id}`);
    return this._transformHouse(house);
  }

  checkEmptyStr(value) {
    return (value === "") ? "no data :)" : value
  }

  _transformCharacter(char) {
    return {
      name: this.checkEmptyStr(char.name),
      gender: this.checkEmptyStr(char.gender),
      born: this.checkEmptyStr(char.born),
      died: this.checkEmptyStr(char.died),
      culture: this.checkEmptyStr(char.culture),
    }
  }

  _transformHouse(house) {
    return {
      name: this.checkEmptyStr(house.name),
      region: this.checkEmptyStr(house.region),
      words: this.checkEmptyStr(house.words),
      titles: this.checkEmptyStr(house.titles),
      overlord: this.checkEmptyStr(house.overlord),
      ancestralWeapons: this.checkEmptyStr(house.ancestralWeapons)
    }
  }

  _transformBook(book) {
    return {
      name: this.checkEmptyStr(book.name),
      numberOfPages: this.checkEmptyStr(book.numberOfPages),
      publiser: this.checkEmptyStr(book.publiser),
      released: this.checkEmptyStr(book.released) 
    }
  }
}