//This is imitation of administration service

const adminCode = 'test1234';

export const checkAdmin = (code: string) => {
    return code === adminCode;
};
