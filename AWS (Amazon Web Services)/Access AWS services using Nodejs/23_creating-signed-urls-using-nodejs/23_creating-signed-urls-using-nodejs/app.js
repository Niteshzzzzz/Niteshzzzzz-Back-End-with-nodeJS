import { getSignedS3Url } from "./urlSigner.js";

const signedUrl = getSignedS3Url({
  bucketName: "nodejs-bucket-n1",
  objectKey: "ccc.jpeg",
  method: 'GET',
  // contentType: 'image/png'
});

console.log(signedUrl);
