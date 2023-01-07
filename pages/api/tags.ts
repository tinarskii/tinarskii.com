import { getArticlesByTag } from "../../scripts/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const article = getArticlesByTag(req.query.tag as string);

  res.status(200).json(article);
}
