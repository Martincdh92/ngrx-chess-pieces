export interface CartState {
    items: number;
    totalAmount: number;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}