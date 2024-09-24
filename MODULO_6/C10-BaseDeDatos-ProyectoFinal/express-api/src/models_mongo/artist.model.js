import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ArtistSchema = new Schema({
  name: String,
  genre: String,
  songs: [
    { 
        title: { type: String },
        duration: { type: Number },
        releaseYear: { type: Number },

    }
  ],
  date: { type: Date, default: Date.now },

});


export const ArtistModel = model('Artist', ArtistSchema);