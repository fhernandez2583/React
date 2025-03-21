class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(checkedOut) {
      this._isCheckedOut = checkedOut;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      let ratingsSum = this.ratings.reduce(
        (currentSum, rating) => currentSum + rating);
      return ratingsSum / this.ratings.length;
    }
  
    addRating(value) {
      this.ratings.push(value);
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }

    get movieCast() {
        return this._movieCast
    }
  }
  
  class CD extends Media {
    constructor(artist, title, playTime, songTitles) {
      super(title);
      this._artist = artist;
      this._playTime = playTime;
      this._songTitles = [];
    }
  
    get artist() {
      return this._artist;
    }
  
    get playTime() {
      return this._playTime;
    }
  
    get songTitles() {
      return this._songTitles;
    }
  }
  
  //Book addition
  const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  //Movie addition
  const speed = new Movie('Jan d Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  //CD addition
  const backInBlack = new CD ('AC/DC', 'Back in Black', 9, ['Hells Bells', 'Back in Black']);
  backInBlack.toggleCheckOutStatus();
  console.log(backInBlack.isCheckedOut);
  backInBlack.addRating(5);
  backInBlack.addRating(4);
  backInBlack.addRating(5);
  console.log(backInBlack.getAverageRating());