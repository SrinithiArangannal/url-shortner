import { LinkProcesses } from "@/services/url.service";
import { RequestBody } from "@/shared/utils/customRequest";
import { LinkSchemaType } from "@/shared/validation/link.validation";
import { Response } from "express";

export const getUrlHandler = async (
  req: RequestBody<LinkSchemaType>,
  res: Response
) => {
  const result = await LinkProcesses.getShortenedUrl(req.body?.link);
  res.status(200).json({ url: result });
};
