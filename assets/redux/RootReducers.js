import { combineReducers } from "redux";
import UserReducer from "./reducers/User.reducer";
import ErrorsReducer from "./reducers/Errors.reducer";
import CivilReducer from "./reducers/Civil.reducer";
import Avertissements from "./reducers/Avertissements.reducer";
import RapporArrestationReducer from "./reducers/RapportArrestation";
import TrafficReducer from "./reducers/Traffic.reducer";
import DossierArrestationReducer from "./reducers/DossierArrestation.reducer";
import ConvocationReducer from "./reducers/Convocation.reducer";
import CelluleReducer from "./reducers/Cellule.reducer";
import AuthenticateReducer from "./reducers/Authenticate.reducer";
import AgentsReducer from "./reducers/Agents.reducer";
import PlainteReducer from "./reducers/Plainte.reducer";
import RapportIncidentReducer from "./reducers/RapportIncident.reducer";
import RapportDeputyTrainyReducer from "./reducers/RapportDeputyTrainy.reducer";
import PriseDeServiceReducer from "./reducers/PriseDeService.reducer";
import GradesReducer from "./reducers/Grades.reducer";

const RootReducers = combineReducers({
  UserReducer,
  ErrorsReducer,
  CivilReducer,
  Avertissements,
  RapporArrestationReducer,
  TrafficReducer,
  DossierArrestationReducer,
  ConvocationReducer,
  CelluleReducer,
  AuthenticateReducer,
  AgentsReducer,
  RapportDeputyTrainyReducer,
  PlainteReducer,
  RapportIncidentReducer,
  PriseDeServiceReducer,
  GradesReducer,
});

export default RootReducers;
