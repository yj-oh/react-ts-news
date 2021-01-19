import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
	padding: 0.2rem 1rem 1rem 1rem;
	background-color: rgb(245, 245, 245);
	color: #3c3c3c;
	box-sizing: border-box;

	header > * {
		margin: 0.5rem;
	}
`;

type NewsListProps = {
	category: string;
};

function NewsList({ category }: NewsListProps) {
	const [datetime] = useState(new Date());
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const query = category === 'all' ? '' : `&category=${category}`;
				const response = await axios.get(
					`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=28878c40f7874160af9a7113f65623aa`,
				);
				setArticles(response.data.articles);
			} catch (e) {
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
	}, [category]);

	if (loading) {
		return <NewsListBlock>Loading...</NewsListBlock>;
	}
	if (!articles) return null;

	return (
		<NewsListBlock>
			<header>
				<h2>News</h2>
				<p>
					{datetime.toLocaleDateString() +
						'  ' +
						datetime.toLocaleTimeString()}
				</p>
			</header>
			{articles.map(
				(article: {
					url: string | null;
					title: string;
					description: string;
					urlToImage?: string | null;
				}) => (
					<NewsItem
						key={article.url}
						title={article.title}
						description={article.description}
						url={article.url}
						urlToImage={article.urlToImage}
					/>
				),
			)}
		</NewsListBlock>
	);
}

export default NewsList;
