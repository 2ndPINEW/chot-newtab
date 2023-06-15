import * as z from 'zod';

// https://zenn.dev/yumemi_inc/articles/2022-02-13-ts-type-safe-request
// zodに渡せる型に変換する型
export type toZod<T extends Record<string, any>> = {
  [K in keyof T]-?: z.ZodType<T[K]>;
};
