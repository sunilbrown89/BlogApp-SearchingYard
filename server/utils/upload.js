import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';


// import pkg from 'dotenv';
// const {DB_USERNAME,DB_PASSWORD} = pkg;
const storage = new GridFsStorage({
    url: `mongodb+srv://sunilsahu:sunil123@cluster0.u8z0f.mongodb.net/blogYarding?retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 