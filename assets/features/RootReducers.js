import AuthenticateReducer from "./Authenticate/Authenticate.slice";
import PriseDeServiceReducer from "./PriseDeService/PriseDeService.slice";
import GradesReducer from "./Grades/Grades.slice";

const RootReducers = {
  AuthenticateReducer,
  //UserReducer,
  //ErrorsReducer,
  PriseDeServiceReducer,
  GradesReducer,
};

export default RootReducers;
