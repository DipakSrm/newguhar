import { Client, Databases } from "appwrite";
import { Post, HomePost } from "@/utils/TypeInterfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { DB_ID, ECO_ID, ENDPOINT, PROJ_ID } from "@/utils/sharedConst";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const param = req.query.id;
  console.log(param);
  try {
    const client = new Client();
    const databases = new Databases(client);

    client
      .setEndpoint(`${ENDPOINT}`) // Your API Endpoint
      .setProject(`${PROJ_ID}`); // Your project ID
    const promise = databases.getDocument(`${DB_ID}`, `${ECO_ID}`, `${param}`);

    const response = await promise;

    // Assuming the response is an array of objects

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
export default handler;
