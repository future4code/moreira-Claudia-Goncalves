import express from 'express';
import cors from 'cors';
import { users } from './data';


const app = express();

app.use(express.json());
app.use(cors());

// ENDPOINTS

// getAllPlaylists
app.get("/playlists", (req, res) => {
    const allUsers = users;

    const playlists = allUsers.map((user) => {
        return user.playlists;
    });

    const resultPlaylists = playlists.flat(1) // flat(profundidade da busca)
    // [1,[2,3], 4] -> flat(1) -> [1,2,3,4]

    res.status(200).send(resultPlaylists);
});

// getPlaylistTracks
app.get("/tracks", (req, res) => {

    const playlists = users.map((user) => {
        return user.playlists;
    }).flat(1);

    const tracks = playlists.map((playlist) => {
        return playlist.tracks
    }).flat(1);

    res.status(200).send(tracks);
})

// deletePlaylistsByUserId
app.delete("/playlists/:userId", (req, res) => {
    const userId = req.params.userId;

    const usersUpdated = users.map((user) => {
        if (user.id === userId) {
            return { ...user, playlists: [] }
        } else {
            return user
        }
    });

    res.send(usersUpdated);
})

// deleteTracksByPlaylistId
app.delete("/tracks/:playlistId", (req, res) => {
    const playlistId = req.params.playlistId;

    const usersUpdated = users.map((user) => {

    })





    res.send(usersUpdated);
})


app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});