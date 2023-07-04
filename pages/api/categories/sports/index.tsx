import { Client, Databases } from "appwrite";
import { Post, HomePost } from "@/utils/TypeInterfaces";
import { DB_ID, ENDPOINT, PROJ_ID, SPORTS_ID } from "@/utils/sharedConst";

const handler = async (req: string, res: HomePost) => {
  try {
    const client = new Client();
    const databases = new Databases(client);

    client
      .setEndpoint(`${ENDPOINT}`) // Your API Endpoint
      .setProject(`${PROJ_ID}`); // Your project ID
    const promise = databases.listDocuments(`${DB_ID}`, `${SPORTS_ID}`);

    const response = await promise;

    // Assuming the response is an array of objects
    const dataArray = response.documents.map((document) => {
      return {
        Author: document.Aurthor, // Corrected spelling of the property
        title: document.Title,
        createdon: document.$createdAt,
        content: document.Content,
        id: document.$id,
        image: document["Image"],
      };
    });

    const responseData: HomePost = {
      data: dataArray,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.log(error);
  }
};
export default handler;
