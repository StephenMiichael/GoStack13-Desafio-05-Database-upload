import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFodler = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFodler,

  storage: multer.diskStorage({
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const filename = `${fileHash}-${file.originalname}`;

      return callback(null, filename);
    },
  }),
};
