"use strict";

export const isArray = (subject) => {
  const isArray = subject.constructor === Array;
  return isArray;
};

export const isObject = (subject) => {
  const isObject = typeof subject === "object";
  return isObject;
};
