import { userModel, userAction } from "../../types";
import { userInfo } from "os";

type userState = {
  user: userModel;
  error: string | undefined;
};

const initialState = {
  user: {} as userModel,
  error: undefined
};

const UserReducer = (state: userState = initialState, action: userAction) => {
  switch (action.type) {
    case "ON_LOGIN":
      return {
        ...state,
        user: action.payload
      };

    case "ON_ERROR":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export { UserReducer };
