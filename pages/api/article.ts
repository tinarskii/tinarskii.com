import { getArticleBySlug } from "../../scripts/utils";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const article = getArticleBySlug(req.query.slug as string);

  res.status(200).json(article);
}
