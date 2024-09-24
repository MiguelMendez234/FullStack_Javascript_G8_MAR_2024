import { Artist, Song } from "../models/index.js"

export class SongController {

    getSong = async (req, res) => {
        try {
            const songs = await Song.findAll({
                attributes: ['id', 'title'],
                include: 
                    { 
                        model: Artist,
                        attributes: ['name', 'genre'] 
                    }
            });
            res.status(200).json(songs);
          } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: error.message });
          }
    }

    getSongById = async (req, res) => {
        res.json({ songID: '123'})
    }

    createSong = async (req, res) => {
        try {

            const { title, duration, releaseYear, artistId } = req.body;
            
            const artist = await Artist.findByPk(artistId);

            if ( !artist ) return res
            .status(400)
            .json({ error: `artist with id: ${artistId} doesn't exist`})


            if (!title || !duration || !releaseYear) {
              return res.status(404).json({ message: `some field is missing` });
            }

            const song = await Song.create(req.body);
  
            res.status(201).json(song);
          } catch (err) {
            console.log(err.message);
            return res.status(500).json({ message: 'Internal Server Error'});
          }
    }

}