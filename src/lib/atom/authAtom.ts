import {atom} from 'jotai';
import { atomWithStorage } from 'jotai/utils'
import { UserToken, UserType } from '../types';

const tokenAtom = atomWithStorage<UserToken | null>('access_token' , null)
const userAtom = atom<UserType | null>(null)
export {
    tokenAtom,
    userAtom
}