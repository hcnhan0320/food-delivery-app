import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const setWidth = (h) => (width / 100) * h;

const setHeight = (h) => (height / 100) * h;

export default { setHeight, setWidth };
