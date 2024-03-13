import { useAtom, useSetAtom, useAtomValue } from 'jotai'
import { tokenAtom, userAtom } from '../atom'
const useAuth = () => {
    const [user] = useAtom(userAtom)
    const [token] = useAtom(tokenAtom);
    const auth = !!user;

    return {
        auth,
    }
}

export {useAuth}