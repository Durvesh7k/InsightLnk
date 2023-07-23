import grid from 'gridfs-stream';
import mongoose from 'mongoose';


const conn = mongoose.connection;
let gfs, gridfsBucket;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    })
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs')
})




const url = "https://insightlnk.onrender.com"


export const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).json("File not found")
    }

    const imageUrl = `${url}/file/${req.file.filename}`;

    res.status(200).json(imageUrl);
}

export const getImage = async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });

        const readstream = gridfsBucket.openDownloadStream(file._id);
        readstream.pipe(response);
    } catch (err) {
        response.status(500).json({ message: "error in uploading file" });
    }
}