const db = require('./db')
const Album = require('./album')
const Artist = require('./artist')
const Song = require('./song')

//There is a one-many relationship between Albums and Songs
//A Song belongs to an Album and an Album has many Songs
Song.belongsTo(Album)
Album.hasMany(Song)

//There is a one-many relationship between Artists and Songs
//A Song belongs to an Artist and an Artist has many Songs
Song.belongsTo(Artist)
Artist.hasMany(Song)

//There is a one-many relationship between Artists and Albums
//An Album belongs to an Artist and an Artist has many Albums
Album.belongsTo(Artist)
Artist.hasMany(Album)

module.exports = {
  db,
  Album,
  Artist,
  Song
}
