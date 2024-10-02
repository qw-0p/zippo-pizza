'use client';

import React from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';

interface Props {
	title: string;
	className?: string;
	items: any[];
	categoryId: number;
	listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	listClassName,
	categoryId,
	className
}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4
	});

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, title, intersection?.isIntersecting])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{
					items
						.map((product) => (
							<ProductCard
								key={product.id}
								id={product.id}
								name={product.name}
								price={product.price}
								imageUrl={product.imageUrl}
							/>
						))
				}
			</div>
		</div>
	);
};