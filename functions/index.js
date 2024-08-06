const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const { Storage } = require("@google-cloud/storage");

admin.initializeApp();

const storage = new Storage();

exports.generateSitemap = functions.firestore
  .document("blogs/{blogId}")
  .onCreate(async (snap, context) => {
    const baseUrl = "https://yourwebsite.com";
    const sitemapUrl = `${baseUrl}/sitemap.xml`;

    const snapshot = await admin.firestore().collection("blogs").get();
    const links = snapshot.docs.map((doc) => ({
      url: `/blog/${doc.id}`,
      changefreq: "daily",
      priority: 0.8,
    }));

    const stream = new SitemapStream({ hostname: baseUrl });
    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    const bucket = storage.bucket("your-storage-bucket-name");
    const file = bucket.file("sitemap.xml");
    await file.save(xmlString, {
      metadata: {
        contentType: "application/xml",
      },
      public: true, // Ensure the file is publicly accessible
    });

    try {
      await axios.get(`http://www.google.com/ping?sitemap=${sitemapUrl}`);
    } catch (error) {
      console.error("Error pinging Google:", error);
    }
  });
