import { getArticlesByAuthor } from "../../scripts/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const article = getArticlesByAuthor(req.query.author_id as string);
  console.log(article);

  res.status(200).json(article);
}
