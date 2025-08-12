import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: "dsgjpo8pf",
  api_key: "513423468355945",
  api_secret: "Zo2WOVckI4WnS2Zj_ZVFBXmqW5k",
});

export default cloudinary;

