import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {RootState, AppDispatch} from "./store";
import {fetchPosts} from "./reducers/postsSlice";

const Posts: React.FC = () => {
	const {items, loading, error} = useSelector((state: RootState) => state.posts);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;

    const blogStyle: {fontSize: string; color: string} = {
        fontSize: "2em",
        color: "green"
    }

	return (
		<section>
			<h1 style={blogStyle}>Blog:</h1>

			<div>
				{items.map((post) => (
					<div key={post.id} style={{marginBottom: "5%"}}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Posts;
