export type ChatRoom = {
  id: String;
  Users: User[];
  lastMessage: Message;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
  email: String;
  relation: String;
};

export type Message = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
};

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
  ListOfChats: undefined;
};

export type MainTabParamList = {
  Messages: undefined;
  Videos: undefined;
  Schedule: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export interface logInAction {
  readonly type: "ON_LOGIN";
  payload: null;
}

export interface ErrorAction {
  readonly type: "ON_ERROR";
  payload: null;
}

export interface userModel {
  first: string;
  last: string;
  subscription: string;
  token: string;
}

export type userAction = logInAction | ErrorAction;
