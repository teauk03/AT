import { renderHook } from '@testing-library/react';
import { useSignUp } from '@/hooks/Auth/useSignUp';

describe('useSignUp Hook', () => {
    it('Verify useSignUp Hook Initialization', () => {
        const { result } = renderHook(() => useSignUp());

        // Check the initial state values
        expect(result.current.error).toBe(null);
        expect(result.current.isLoading).toBe(false);
        expect(result.current.signedUp).toBe(false);
        expect(typeof result.current.signup).toBe('function');
    });
});