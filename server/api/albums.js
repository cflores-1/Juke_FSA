const router = require('express').Router()
const {Album, Artist, Song} = require('../db')

//GET /API/ALBUMS
router.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [Artist]
    })
    res.json(albums)
  } catch (err) { next(err) }
})

//GET /API/ALBUMS/:ALBUMID
router.get('/:albumId', async (req, res, next) => {
  try {
    //Using 'include' (aka eager loading) line 19
    const album = await Album.findByPk(req.params.albumId, {
      include: [Artist, {model: Song, include: [Artist]}]
    })
    res.json(album)
  } catch (err) { next(err) }
})

module.exports = router
