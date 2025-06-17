import * as yup from "yup";
import { NodeEnv } from "@/shared/enums/nodeEnv.enum";

const numberValidation = yup
  .number()
  .required()
  .transform((value, originalValue) =>
    typeof originalValue === "string" ? parseInt(originalValue) : value
  );

const nodeEnvValidation = yup.string().required().oneOf(Object.values(NodeEnv));

const stringValidation = yup.string().required();

const envSchema = yup.object({
  PORT: numberValidation,
  NODE_ENV: nodeEnvValidation,
  LOG_LEVEL: stringValidation,
});

export default envSchema.validateSync(process.env, {
  abortEarly: false,
  stripUnknown: true,
});
