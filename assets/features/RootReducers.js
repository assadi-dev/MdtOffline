import AuthenticateReducer from "./Authenticate/Authenticate.slice";
import PriseDeServiceReducer from "./PriseDeService/PriseDeService.slice";
import GradesReducer from "./Grades/Grades.slice";
import ChefAccusationReducer from "./ChefAccusation/ChefAccusation.slice";

const RootReducers = {
  AuthenticateReducer,
  //UserReducer,
  //ErrorsReducer,
  PriseDeServiceReducer,
  GradesReducer,
  ChefAccusationReducer,
};

export default RootReducers;
