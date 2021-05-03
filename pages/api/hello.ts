import { connectToDatabase } from "./_connecter";

export default async (req, res) => {
  await connectToDatabase();

  res.status(200).json({ name: "John Doe" });
};
