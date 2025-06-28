import { renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useSteps from './useSteps';

describe('useSteps hook', () => {
    it('should return correct number of steps', () => {
        const { result } = renderHook(() => useSteps());

        expect(result.current.length).toEqual(2);
        expect(result.current[0].name).toBe('Order');
        expect(result.current[1].name).toBe('Review');
        // expect(typeof result.current[1].component).toBe('ReactNode');
    });
});
