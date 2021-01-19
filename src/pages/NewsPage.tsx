import React from 'react';
import { RouteComponentProps } from 'react-router';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

interface MatchParams {
    category: string;
}

const NewsPage: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
    const category = match.params.category || 'all';

    return (
        <>
            <Categories />
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;
