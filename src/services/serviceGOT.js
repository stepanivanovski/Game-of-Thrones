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

  getAllBooks = async () => {
    const res = await this.getResource(`/books/`);

    return res.map(book => this._transformBook(book));
  }
  
   getBook = async (id) => {
    const book = await this.getResource(`/books/${id}/`);
    return this._transformBook(book);
  }
  
   getAllCharacters = async () => {
    const res = await this.getResource(`/characters?page=5&pageSize=10`);

    return res.map(char => this._transformCharacter(char));
  }
  
  getCharacter = async (id) => {
    const char = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(char);
  }
  
  getAllHouses = async () => {
    const res = await this.getResource(`/houses/`);

    return res.map(house => this._transformHouse(house));
  }
  
  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformHouse(house);
  }

  checkEmptyStr = (value) => {
    if ( Array.isArray(value) ) {
      if (value[0].length === 0) {
        return "no data :)"
      }
    } else if (value.length === 0) {
      return "no data :)"
    } else {
      return value
    }
  }

  getId = (url) => {
    return url.match(/\d+$/)[0]
  }

  _transformCharacter(char) {
    return {
      name: this.checkEmptyStr(char.name),
      gender: this.checkEmptyStr(char.gender),
      born: this.checkEmptyStr(char.born),
      died: this.checkEmptyStr(char.died),
      culture: this.checkEmptyStr(char.culture),
      id: this.getId(char.url)
    }
  }

  _transformHouse(house) {
    console.log(house);
    return {
      name: this.checkEmptyStr(house.name),
      region: this.checkEmptyStr(house.region),
      words: this.checkEmptyStr(house.words),
      titles: this.checkEmptyStr(house.titles),
      overlord: this.checkEmptyStr(house.overlord),
      ancestralWeapons: this.checkEmptyStr(house.ancestralWeapons),
      id: this.getId(house.url)
    }
  }

  _transformBook(book) {
    return {
      name: this.checkEmptyStr(book.name),
      numberOfPages: this.checkEmptyStr(book.numberOfPages),
      publiser: this.checkEmptyStr(book.publisher),
      released: this.checkEmptyStr(book.released),
      id: this.getId(book.url)
    }
  }
}