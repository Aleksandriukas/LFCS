import { createSafeContext, useSafeContext } from '@sirse-dev/safe-context';

type LFCSContextType = {
    admin: boolean;
    setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LFCSContext = createSafeContext<LFCSContextType>();

export const useLFCSContext = () => useSafeContext(LFCSContext);
