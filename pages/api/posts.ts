import { getArticles } from "../../scripts/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const article = getArticles();

  res.status(200).json(article);
}
