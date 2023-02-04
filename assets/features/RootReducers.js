import AuthenticateReducer from "./Authenticate/Authenticate.slice";
import PriseDeServiceReducer from "./PriseDeService/PriseDeService.slice";
import GradesReducer from "./Grades/Grades.slice";
import ChefAccusationReducer from "./ChefAccusation/ChefAccusation.slice";
import AgentsReducer from "./Agents/Agent.slice";
import UserReducer from "./Users/User.slice";

const RootReducers = {
  AuthenticateReducer,
  UserReducer,
  //ErrorsReducer,
  AgentsReducer,
  PriseDeServiceReducer,
  GradesReducer,
  ChefAccusationReducer,
};

export default RootReducers;
