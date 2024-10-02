'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
	className?: string;
}

//Mock data
const cats = [
	{ id: 1, name: 'Pizza' },
	{ id: 2, name: 'Combo' },
	{ id: 3, name: 'Snacks' },
	{ id: 4, name: 'Cocktails' },
	{ id: 5, name: 'Coffee' },
	{ id: 6, name: 'Drinks' },
	{ id: 7, name: 'Desserts' },];

export const Categories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId)

	return (
		<div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
			{
				cats.map((cat, index) => (
					<a key={index} href={`/#${cat.name}`} className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
						categoryActiveId === cat.id && 'bg-white shadow-md shadow-gray-200 text-primary'
					)}>
						<button>
							{cat.name}
						</button>
					</a>
				))
			}
		</div>
	);
};