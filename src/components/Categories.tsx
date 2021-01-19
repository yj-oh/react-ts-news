import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Category } from '../types/type';

const categories: Category[] = [
	{
		name: 'all',
		text: '전체',
	},
	{
		name: 'business',
		text: '비즈니스',
	},
	{
		name: 'health',
		text: '건강',
	},
	{
		name: 'science',
		text: '과학',
	},
	{
		name: 'technology',
		text: '기술',
	},
];

const CategoriesBlock = styled.div`
	display: flex;
	justify-content: center;
	padding: 1.5rem 1rem 1rem 1rem;
	width: calc(100% - 2rem);
	margin: 0 auto;
	background-color: rgb(245, 245, 245);
`;

const CategoryItem = styled(NavLink)`
	padding: 5px 10px;
	min-width: 12%;
	font-size: 1.02rem;
	text-align: center;
	color: #868686;
	background: #ffffff;
	border-radius: 20px;
	text-decoration: none;
	cursor: pointer;

	&.active {
		font-weight: bold;
		color: #ff4343;
		&:hover {
			color: #ff4343;
		}
	}

	& + & {
		margin-left: 0.6rem;
	}
`;

const Categories = () => {
	return (
		<CategoriesBlock>
			{categories.map((c) => (
				<CategoryItem
					key={c.name}
					activeClassName='active'
					exact={c.name === 'all'}
					to={c.name === 'all' ? '/' : `${c.name}`}
				>
					{c.text}
				</CategoryItem>
			))}
		</CategoriesBlock>
	);
};

export default Categories;
