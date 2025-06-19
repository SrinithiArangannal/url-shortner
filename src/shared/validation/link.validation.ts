import * as yup from "yup";

export const linkSchema = yup.object({
  link: yup.string().required(),
});

export type LinkSchemaType = yup.InferType<typeof linkSchema>;
