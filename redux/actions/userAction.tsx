export interface userModel {
  first: string;
  last: string;
  subscription: string;
  token: string;
}

export interface logInAction {
  readonly type: "ON_LOGIN";
  payload: null;
}

export interface ErrorAction {
  readonly type: "ON_ERROR";
  payload: null;
}

export type userAction = logInAction | ErrorAction;
