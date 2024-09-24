import { ArtistModel } from "../models_mongo/artist.model.js";


export class ArtistMongoController {

    getAllArtist = async (req, res) => {
        try {
            const artists = await ArtistModel.find();
            res.status(200).json(artists);
          } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: error.message });
          }
    }

    createArtist = async (req, res) => {
        try {
            const { name, genre } = req.body;
            
            if (!name || !genre) {
              return res.status(404).json({ message: `name or genre doesnt exist` });
            }

            const artist = await ArtistModel.create(req.body)
            
            res.status(201).json(artist);
          } catch (err) {
            console.log(err.message);
            return res.status(500).json({ message: 'Internal Server Error'});
          }
    };

    getArtisyById = async (req, res) => {

        try {
            const id = req.params.id;
            console.log(id);
            const artist = await ArtistModel.findById(id);
    
            if (!artist) return res.status(404).send({ message: 'Movie not found' });
            
            res.json(artist);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ message: 'Internal Server Error'});
        }
       
    }

    updateArtist = async (req, res) => {
        try {
            const id = req.params.id;

            const { name, genre } = req.body;
            
            if (!name || !genre) {
              return res.status(404).json({ message: `name or genre doesnt exist` });
            }

            const artist = await ArtistModel.findByIdAndUpdate(id, req.body, { new: true });
            res.status(201).json(artist);
          } catch (err) {
            console.log(err.message);
            return res.status(500).json({ message: 'Internal Server Error'});
          }
    };


}