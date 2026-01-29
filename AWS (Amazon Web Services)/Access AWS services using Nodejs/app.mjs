import {S3Client, CreateBucketCommand, DeletePublicAccessBlockCommand, PutPublicAccessBlockCommand, PutBucketPolicyCommand, ListObjectsV2Command, HeadObjectCommand, GetObjectCommand, PutObjectCommand} from '@aws-sdk/client-s3';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const s3Client = new S3Client({
    // credentials: 'storageApp',
    profile: 'storageApp'
});

// const command = new CreateBucketCommand({
//   Bucket: "nodejs-bucket-n1",
// });

// const command = new DeletePublicAccessBlockCommand({
//   Bucket: "nodejs-bucket-n1",
// });

// const command = new PutPublicAccessBlockCommand({
//   Bucket: "nodejs-bucket-n1",
//   PublicAccessBlockConfiguration: {
//     BlockPublicAcls: false,
//     IgnorePublicAcls: false,
//     BlockPublicPolicy: false,
//     RestrictPublicBuckets: false,
//   },
// });

const policy = {
  Version: "2012-10-17",
  Statement: [
    {
      Sid: "PublicReadGetObject",
      Effect: "Allow",
      Principal: "*",
      Action: "s3:GetObject",
      Resource: "arn:aws:s3:::nodejs-bucket-n1/*",
    },
  ],
};

// const command = new PutBucketPolicyCommand({
//   Bucket: "nodejs-bucket-n1",
//   Policy: JSON.stringify(policy),
// });

// const command = new ListObjectsV2Command({
//   Bucket: "nodejs-bucket-n1",
// //   Prefix: "optional/path/",
// });

// const command = new HeadObjectCommand({
//   Bucket: "nodejs-bucket-n1",
//   Key: "ccc.jpeg",
// });

// const res = await s3Client.send(command);

// console.log(res)

// const command = new GetObjectCommand({
//   Bucket: "nodejs-bucket-n1",
//   Key: "ccc.jpeg",
// });
// await pipeline(response.Body, createWriteStream('cc.jpeg'));

const readStream = createReadStream('app.mjs')

const command = new PutObjectCommand({
  Bucket: "nodejs-bucket-n1",
  Key: "upload/aap.js",
  Body: readStream,
  ContentType: "text/javascript",
});

const response = await s3Client.send(command);
console.log('file uploaded.')