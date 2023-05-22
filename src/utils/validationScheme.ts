import { z } from "zod";

export const validationScheme = z.object({
  name: z
    .string()
    .nonempty("名前は必須です")
    .min(4, "名前は4文字以上で入力してください"),
  email: z
    .string()
    .nonempty("emailは必須です")
    .email("emailの形式で正しく入力してください"),
  password: z
    .string()
    .nonempty("パスワードは必須です")
    .min(6, "パスワードは6文字以上で入力してください"),
});
