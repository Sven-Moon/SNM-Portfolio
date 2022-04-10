import {
  Interest,
  InterestModal,
  INTERESTS,
} from "../js/components/interest.js";
import activateDropdowns from "./components/dropdown.js"; // translateXMenuIn as x,
// import { translateXMenuIn } from "./components/dropdown.js";

new Interest("development", INTERESTS);
new Interest("tinkering", INTERESTS);
new Interest("travel", INTERESTS);
new Interest("gaming", INTERESTS);

activateDropdowns();
