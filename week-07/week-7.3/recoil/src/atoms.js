import { atom, selector } from 'recoil';

export const networkAtom = atom({
    key: 'networkAtom',
    default: 104
})

export const jobsAtom = atom({
    key: 'jobskAtom',
    default: 1
})

export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 10
})

export const messagesAtom = atom({
    key: 'messagesAtom',
    default: 2
})

export const totalNotificationSelector = selector({
    key: 'totalNotificationSelector',
    get: ({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagesAtomCount = get(messagesAtom);
        return networkAtomCount + jobsAtomCount + notificationAtomCount + messagesAtomCount;
    }
})

