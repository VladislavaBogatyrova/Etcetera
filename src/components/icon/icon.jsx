import { createIconSetFromIcoMoon } from '@components/icon/node_modules/react-native-vector-icons'
import { registerCustomIconType } from '@components/icon/node_modules/react-native-elements'
import icoMoonConfig from '../../../assets/icons/selection.json'

export const Icon = createIconSetFromIcoMoon(icoMoonConfig)
registerCustomIconType('icomoon', Icon)


