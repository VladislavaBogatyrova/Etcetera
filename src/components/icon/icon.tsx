import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { registerCustomIconType } from 'react-native-elements'
import icoMoonConfig from '../../assets/icons/selection.json'

export const Icon= createIconSetFromIcoMoon(icoMoonConfig)
 registerCustomIconType('icomoon', Icon)