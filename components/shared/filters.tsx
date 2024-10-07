'use client'
import React from 'react';
import { cn } from '@/lib/utils';
import { Title, FilterCheckbox, RangeSlider } from './index';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading, onAddId, selectedIds } = useFilterIngredients();

	const items = ingredients.map((ingredient) => ({ text: ingredient.name, value: String(ingredient.id) }))

	return (
		<div className={cn(className)}>
			<Title text="Filters" size="sm" className='mb-5 font-bold' />

			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Can to take" value="1" />
				<FilterCheckbox text="New" value="2" />
			</div>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Price value:</p>
				<div className="flex gap-3 mb-5">
					<Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
					<Input type='number' placeholder='1000' min={100} max={1000} />
				</div>

				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			<CheckboxFiltersGroup
				title="Ingredients"
				className='mt-5'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selectedIds={selectedIds}
				name='ingredients'
			/>


		</div>
	);
};