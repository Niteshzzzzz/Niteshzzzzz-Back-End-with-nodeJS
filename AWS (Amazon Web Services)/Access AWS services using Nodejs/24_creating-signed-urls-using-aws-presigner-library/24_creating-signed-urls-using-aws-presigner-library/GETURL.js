import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({ profile: "storageApp" });

const command = new GetObjectCommand({
  Bucket: "nodejs-bucket-n1",
  Key: "ccc.jpeg",
});

const url = await getSignedUrl(s3Client, command, {
  expiresIn: 3600,
});

console.log(url);
