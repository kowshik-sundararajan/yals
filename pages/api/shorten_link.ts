import { connectToDatabase } from "./_connecter";

export default async (req, res) => {
  const db = await connectToDatabase();

  if (req.body !== "" && req.body.link !== undefined && req.body.link !== "") {
    const entry = await db
      .db("links_db")
      .collection("links_collection")
      .insertOne({ link: req.body.link });

    return res.status(201).json({
      short_link: `${process.env.VERCEL_URL}/r/${entry.insertedId}`,
    });
  }

  return res
    .status(409)
    .json({ error: "no_link_found", error_description: "No link found" });
};
