import { uploadFile, deleteFile } from "react-s3";

const config = {
  bucketName: process.env.S3_BUCKET_NAME,
  dirName: process.env.S3_DIR_NAME,
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
};

export const UploadFile = (file) => uploadFile(file, config);

export const DeleteFile = (file) => deleteFile(file, config);
