import AuthenticateReducer from "./Authenticate/Authenticate.slice";
import PriseDeServiceReducer from "./PriseDeService/PriseDeService.slice";
import GradesReducer from "./Grades/Grades.slice";
import ChefAccusationReducer from "./ChefAccusation/ChefAccusation.slice";
import AgentsReducer from "./Agents/Agent.slice";
import UserReducer from "./Users/User.slice";
import CivilReducer from "./Civil/Civil.slice";
import RapportIncidentReducer from "./RapportIncident/RapportIncident.slice";
import RapportDeputyTrainyReducer from "./RapportRookie/RapportRookie.slice";
import PlainteReducer from "./Plaintes/Plaintes.slice";
import ForgottenPasswordReducer from "./ForgottenPassword/ForgottenPassword.slice";
import SaisieReducer from "./Saisie/Saisie.slice";
import DemandeComptabiliteReducer from "./DemandeComptabilite/DemandeComptabilite.slice";

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
  RapportDeputyTrainyReducer,
  PlainteReducer,
  ForgottenPasswordReducer,
  SaisieReducer,
  DemandeComptabiliteReducer,
};

export default RootReducers;
