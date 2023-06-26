'use client';
import { DependencyList, useEffect } from 'react';


export function useAsyncEffect(effect: () => void, deps: DependencyList, clear?: () => void): void {
    useEffect(() => {
        effect();
        return clear?.();
    }, deps);
}
