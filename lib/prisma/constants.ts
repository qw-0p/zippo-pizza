export const categories = [
	{ name: 'Pizza' },
	{ name: 'Combo' },
	{ name: 'Snacks' },
	{ name: 'Cocktails' },
	{ name: 'Coffee' },
	{ name: 'Drinks' },
	{ name: 'Desserts' },
]

const images = '../../public/images'

const ingredientPathImg = `${images}/ingredients`
export const _ingredients = [
	{
		name: 'Cheese rim',
		price: 2,
		imageUrl: `${ingredientPathImg}/cheese_rim.png`,
	},
	{
		name: 'Creamy mozzarella',
		price: 2,
		imageUrl: `${ingredientPathImg}/creamy_mozzarella.png`,
	},
	{
		name: 'Cheddar and Parmesan cheeses',
		price: 2,
		imageUrl: `${ingredientPathImg}/cheddar_and_parmesan.png`,
	},
	{
		name: 'Spicy jalapeño peppers',
		price: 1.5,
		imageUrl: `${ingredientPathImg}/spicy_jalapeno.png`,
	},
	{
		name: 'Tender chicken',
		price: 2,
		imageUrl: `${ingredientPathImg}/tender_chicken.png`,
	},
	{
		name: 'Mushrooms',
		price: 1.5,
		imageUrl: `${ingredientPathImg}/mushrooms.png`,
	},
	{
		name: 'Ham',
		price: 2,
		imageUrl: `${ingredientPathImg}/ham.png`,
	},
	{
		name: 'Spicy pepperoni',
		price: 2,
		imageUrl: `${ingredientPathImg}/spicy_pepperoni.png`,
	},
	{
		name: 'Spicy chorizo',
		price: 2,
		imageUrl: `${ingredientPathImg}/spicy_chorizo.png`,
	},
	{
		name: 'Pickles',
		price: 1.5,
		imageUrl: `${ingredientPathImg}/pickles.png`,
	},
	{
		name: 'Fresh tomatoes',
		price: 1.5,
		imageUrl: `${ingredientPathImg}/fresh_tomatoes.png`,
	},
	{
		name: 'Red onion',
		price: 1.5,
		imageUrl: `${ingredientPathImg}/red_onion.png`,
	},
	{
		name: 'Pineapples',
		price: 1.5,
		imageUrl: `${ingredientPathImg}/pineapples.png`,
	},
	{
		name: 'Italian herbs',
		price: 1,
		imageUrl: `${ingredientPathImg}/italian_herbs.png`,
	},
	{
		name: 'Sweet pepper',
		price: 1.5,
		imageUrl: `${ingredientPathImg}/sweet_pepper.png`,
	},
	{
		name: 'Brie cubes',
		price: 2,
		imageUrl: `${ingredientPathImg}/brie_cubes.png`,
	},
	{
		name: 'Meatballs',
		price: 2,
		imageUrl: `${ingredientPathImg}/meatballs.png`,
	},
].map((obj, index) => ({ id: index + 1, ...obj }))

const productPathImg = `${images}/product`
export const products = [
	{
		name: 'Omelette with ham and mushrooms',
		imageUrl: `${productPathImg}/omelette_with_ham_&_mushrooms.png`,
		categoryId: 2,
	},
	{
		name: 'Omelette with pepperoni',
		imageUrl: `${productPathImg}/omelette_with_pepperoni.png`,
		categoryId: 2,
	},
	{
		name: 'Coffee Latte',
		imageUrl: `${productPathImg}/coffee_latte.png`,
		categoryId: 2,
	},
	{
		name: 'Luncher with cheese and ham',
		imageUrl: `${productPathImg}/luncher_with_cheese_&_ham.png`,
		categoryId: 3,
	},
	{
		name: 'Chicken nuggets',
		imageUrl: `${productPathImg}/chicken_nuggets.png`,
		categoryId: 3,
	},
	{
		name: 'Potatoes from the oven with gravy 🌱',
		imageUrl: `${productPathImg}/potatoes_with_gravy.png`,
		categoryId: 3,
	},
	{
		name: 'Roll',
		imageUrl: `${productPathImg}/roll.png`,
		categoryId: 3,
	},
	{
		name: 'Spicy Roll 🌶️🌶️',
		imageUrl: `${productPathImg}/spicy_roll.png`,
		categoryId: 3,
	},
	{
		name: 'Banana milkshake',
		imageUrl: `${productPathImg}/banana_milkshake.png`,
		categoryId: 4,
	},
	{
		name: 'Caramel apple milkshake',
		imageUrl: `${productPathImg}/caramel_apple_milkshake.png`,
		categoryId: 4,
	},
	{
		name: 'Milkshake with Oreo',
		imageUrl: `${productPathImg}/milkshake_with_oreo.png`,
		categoryId: 4,
	},
	{
		name: 'Classic milkshake',
		imageUrl: `${productPathImg}/classic_milkshake.png`,
		categoryId: 4,
	},
	{
		name: 'Irish coffee',
		imageUrl: `${productPathImg}/irish_coffee.png`,
		categoryId: 5,
	},
	{
		name: 'Caramel latte',
		imageUrl: `${productPathImg}/caramel_latte.png`,
		categoryId: 5,
	},
	{
		name: 'Coconut latte',
		imageUrl: `${productPathImg}/coconut_latte.png`,
		categoryId: 5,
	},
	{
		name: 'Americano',
		imageUrl: `${productPathImg}/americano.png`,
		categoryId: 5,
	},
	{
		name: 'Latte',
		imageUrl: `${productPathImg}/latte.png`,
		categoryId: 5,
	},
]
