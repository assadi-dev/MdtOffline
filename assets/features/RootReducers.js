import AuthenticateReducer from "./Authenticate/Authenticate.slice";
import PriseDeServiceReducer from "./PriseDeService/PriseDeService.slice";
import GradesReducer from "./Grades/Grades.slice";
import ChefAccusationReducer from "./ChefAccusation/ChefAccusation.slice";
import AgentsReducer from "./Agents/Agent.slice";
import UserReducer from "./Users/User.slice";
import CivilReducer from "./Civil/Civil.slice";
import RapportIncidentReducer from "./RapportIncident/RapportIncident.slice";

const RootReducers = {
  AuthenticateReducer,
  UserReducer,
  //ErrorsReducer,
  CivilReducer,
  AgentsReducer,
  PriseDeServiceReducer,
  GradesReducer,
  ChefAccusationReducer,
  RapportIncidentReducer,
};

export default RootReducers;
