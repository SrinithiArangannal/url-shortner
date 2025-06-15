import * as yup from "yup";

const numberValidation = yup
  .number()
  .required()
  .transform((value, originalValue) =>
    typeof originalValue === "string" ? parseInt(originalValue) : value
  );

const envSchema = yup.object({
  PORT: numberValidation,
});

export default envSchema.validateSync(process.env, {
  abortEarly: false,
  stripUnknown: true,
});
