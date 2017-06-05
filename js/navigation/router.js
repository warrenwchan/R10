import { createRouter } from '@expo/ex-navigation';

//Scenes to set up route for
import NavigationLayout from './NavigationLayout';
import About from './../scenes/About';
import Schedule from './../scenes/Schedule';
import Session from './../scenes/Session';
import Faves from './../scenes/Faves';

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
  session: () => Session,
  faves: () => Faves
}));

export default Router;
