import S3 from "react-aws-s3";

const config = {
  bucketName: process.env.S3_BUCKET_NAME,
  dirName: process.env.S3_DIR_NAME,
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_ACESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  s3Url: process.env.S3_URL,
};

const ReactS3Client = new S3(config);

export default ReactS3Client;
