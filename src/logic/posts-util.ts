import testSimple from "./../posts/testSimple.json?raw";
import formalSystems from "./../posts/formalSystems.json?raw";
import { MarklowNode } from "marklow";

export enum PostNames {
  TEST_SIMPLE,
  FORMAL_SYSTEMS,
}

export const POSTS = {
  [PostNames.TEST_SIMPLE]: testSimple,
  [PostNames.FORMAL_SYSTEMS]: formalSystems,
};

export const getPost = (post: PostNames) => {
  return JSON.parse(POSTS[post]) as MarklowNode;
};
