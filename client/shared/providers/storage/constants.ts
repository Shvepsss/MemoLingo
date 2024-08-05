import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({ id: 'memolingo-storage' });
export const STORAGE_KEY = 'store';
