import React from 'react'
import Title from '../components/Title'
import { useSyncExternalStore, useDebugValue } from 'react';

export default function HooksUseDebugValue({ title }) {
    const isOnline = useOnlineStatus();
    return (
        <>
            <Title title={title} />
            <div>{isOnline ? 'online' : 'disconnected'}</div>
        </>
    )
}

export function useOnlineStatus() {
    const isOnline = useSyncExternalStore(subscribe, () => navigator.onLine, () => true);
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return isOnline;
}

function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}