import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useDrinks from './useDrinks';

describe('useDrinks hook', () => {
    it('should return correct drinks', () => {
        const { result } = renderHook(() => useDrinks());

        expect(result.current.length).toEqual(3);
    });
});
