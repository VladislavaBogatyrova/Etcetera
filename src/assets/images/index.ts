import { ImageSourcePropType } from 'react-native';

const Images: IHashMap<ImageSourcePropType> = {
  /* from native static assets */

  LOGIN_COVER: { uri: 'login_cover' },

  /* from js static assets */

  // Welcome
  RECTANGLE_BACK: require('./Rectangle_back.png'),
  LOGO_BACK_OFFICE: require('./logo_back_office.png'),
  LOGO_ETCETERA: require('./logo.png'),
  BG_TRIANGLES: require('./BG_Triangles.png'),
};
interface IHashMap<T> {
  [key: string]: T;
}

export default Images;
