import { atom } from 'jotai';
import type { UserOrder } from './types';

const userOrderDefaultState: UserOrder = {
	name: '',
	drink: '',
	options: {},
	cart: [],
};

export const userOrder = atom(userOrderDefaultState);
