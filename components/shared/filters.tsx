'use client'
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Title, FilterCheckbox, RangeSlider } from './index';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface Props {
	className?: string;
}

interface PriceProps {
	priceFrom: number;
	priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients();
	const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))
	const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))

	const [{ priceFrom, priceTo }, setPrice] = React.useState<PriceProps>({ priceFrom: 0, priceTo: 500 })

	const items = ingredients.map((ingredient) => ({ text: ingredient.name, value: String(ingredient.id) }))

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice((prev) => ({ ...prev, [name]: value > 500 ? 500 : value }))
	}

	useEffect(() => {
		console.log(
			{
				pizzaTypes, sizes, ingredients, selectedIngredients,
				prices: { priceFrom, priceTo }
			}
		);

	}, [priceFrom, priceTo, pizzaTypes, sizes, ingredients, selectedIngredients])

	return (
		<div className={cn(className)}>
			<Title text="Filters" size="sm" className='mb-5 font-bold' />

			<CheckboxFiltersGroup
				title="Pizza type"
				className='mt-5'
				values={pizzaTypes}
				items={[
					{ text: 'Thin dough', value: '1' },
					{ text: 'Normal dough', value: '2' },
				]}
				onClickCheckbox={togglePizzaTypes}
				name='pizzaTypes'
			/>

			<CheckboxFiltersGroup
				title="Pizza sizes"
				className='mt-5'
				values={sizes}
				items={[
					{ text: '20 cm.', value: '20' },
					{ text: '30 cm.', value: '30' },
					{ text: '40 cm.', value: '40' },
				]}
				onClickCheckbox={toggleSizes}
				name='sizes'
			/>

			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Price value:</p>
				<div className="flex gap-3 mb-5">
					<Input type='number' placeholder='0' min={0} max={499} value={String(priceFrom)} onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} />
					<Input type='number' placeholder='500' min={100} max={500} value={String(priceTo)} onChange={(e) => updatePrice('priceTo', Number(e.target.value))} />
				</div>

				<RangeSlider
					min={0}
					max={500}
					step={5}
					value={[priceFrom, priceTo]}
					onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })} />
			</div>

			<CheckboxFiltersGroup
				title="Ingredients"
				className='mt-5'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				values={selectedIngredients}
				name='ingredients'
			/>


		</div>
	);
};