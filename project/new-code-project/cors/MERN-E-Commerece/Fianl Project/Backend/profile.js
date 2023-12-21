const express = require("express");
const app = express();
const router = express.Router();
const multer = require("multer");
const cors = require("cors");
const fs = require("fs").promises; // Use fs.promises for async file operations
const cloudinary = require("cloudinary").v2;

app.use(express.json());
app.use(cors());

cloudinary.config({
  cloud_name: "dufsehkf4",
  api_key: "554795323894712",
  api_secret: "Xc-6TBs6LxgUXMcSYxU0nm55pHo",
  secure: true,
});

const storage = multer.diskStorage({
  destination: function (req, file, callBack) {
    callBack(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const upload = multer({ storage: storage });

router.post("/file", upload.single("avatar"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const { url, secure_url } = result;
    // Save the URL or other details in the database
    // For example, you could use a database library like Mongoose for MongoDB
    // const savedData = await YourDatabaseModel.create({ url, secure_url });
    
    // Delete the uploaded file from the server
    await fs.unlink(req.file.path);

    res.json({
      message: "file uploaded",
      // Additional data if needed, e.g., savedData
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(router);

app.listen(8080, () => {
  console.log("Server started to receive files on port 8080");
});
