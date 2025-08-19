import crypto from "crypto";
import { readFileSync } from "fs";

const fileData = readFileSync(
  "./test.txt"
);

const hash = crypto
  .createHash("sha256")
  .update(fileData)
  .digest("hex");

console.log(hash);

// console.log(
//   Buffer.from(
//     "pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4",
//     "base64url"
//   ).toString("hex")
// );
