"use strict";

import { string } from "neornd";

// ランダムなノートIDを発行
export const generateRandomNID = () => {
  return string(10, {
    lowercase: true,
    uppercase: true,
    number: true,
    symbol: false,
  });
};
