import sharp from "sharp";

await sharp("src/assets/NaxaraLabslogo.png")
  .resize({ width: 512, height: 512, fit: "inside" })
  .webp({ quality: 82, effort: 6 })
  .toFile("public/naxara-labs-logo.webp");

await sharp("public/favicon.png")
  .resize({ width: 256, height: 256, fit: "inside" })
  .webp({ quality: 82, effort: 6 })
  .toFile("public/naxara-labs-icon.webp");