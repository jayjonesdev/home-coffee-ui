import type { UserOrder } from './types';
import { atomWithReset } from 'jotai/utils';

const userOrderDefaultState: UserOrder = {
	name: '',
	drink: '',
	options: {},
	cart: [],
};

export const userOrder = atomWithReset(userOrderDefaultState);
