class Song {
  constructor({ name, path, plays = 0 }) {
    this.name = name;
    this.path = path;
    this.plays = plays;
  }
}
module.exports = Song;
