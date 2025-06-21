import { atom } from 'jotai';
import type { UserOrder } from './types';

const userOrderDefaultState: UserOrder = {
	name: '',
	drink: '',
	options: {},
};

export const userOrder = atom(userOrderDefaultState);
