import { Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";

export interface CustomRequest<
  Q extends ParamsDictionary = {},
  P extends ParamsDictionary = {},
  B = {},
> extends Request {
  query: Q;
  body: B;
  params: P;
}

export interface RequestBody<B = {}> extends Request {
  body: B;
}

export interface QueryParams<Q extends ParamsDictionary = {}> extends Request {
  query: Q;
}

export interface PathVariable<P extends ParamsDictionary = {}> extends Request {
  params: P;
}

export interface RequestBodyPath<P extends ParamsDictionary = {}, B = {}>
  extends Request {
  body: B;
  params: P;
}
