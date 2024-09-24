import { Artist, Song } from '../models/index.js'


export class ArtistController {

    getAllArtist = async (req, res) => {
        try {
            const artists = await Artist.findAll();
            res.status(200).json(artists);
          } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: error.message });
          }
    }

    getArtisyById = async (req, res) => {

        try {
            const id = parseInt(req.params.id);
      
            const artist = await Artist.findByPk(id);
    
            if (!artist) return res.status(404).send({ message: 'Movie not found' });
            
            res.json(artist);
        } catch (error) {
            console.log(err.message);
            return res.status(500).json({ message: 'Internal Server Error'});
        }
       
    }

    getSongsByArtist = async (req, res) => {
        try {
            const artistId = parseInt(req.params.id);
            const songs = await Song.findAll({
                where: { artistId: artistId}
            });

            res.status(200).json(songs);

        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error'});
        }

    }

    createArtist = async (req, res) => {
        try {
            const { name, genre } = req.body;
            
            if (!name || !genre) {
              return res.status(404).json({ message: `name or genre doesnt exist` });
            }

            const artist = await Artist.create({
              name,
              genre
            });
  
            res.status(201).json(artist);
          } catch (err) {
            console.log(err.message);
            return res.status(500).json({ message: 'Internal Server Error'});
          }
    };

    updateArtist = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            console.log(id);
            const { name, genre } = req.body;
            
            if (!name || !genre) {
              return res.status(404).json({ message: `name or genre doesnt exist` });
            }

            const artist = await Artist.findOne({ where: { id } });

            artist.set({
                name,
                genre
            });

            await artist.save();
            res.status(201).json(artist);
          } catch (err) {
            console.log(err.message);
            return res.status(500).json({ message: 'Internal Server Error'});
          }
    };

}