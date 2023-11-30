import "./genre-select.style.scss";
import PropTypes from "prop-types";

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
	return (
		<>
			{genres.map((genre, index) => {
				return (
					<button
						key={index}
						data-testid={genre}
						onClick={() => onSelect(genre)}
						style={{
							backgroundColor:
								genre === selectedGenre
									? "DodgerBlue"
									: "rgb(39, 37, 37)",
						}}
						className="genre-selected-button"
					>
						{genre.toUpperCase()}
					</button>
				);
			})}

			{/* {genres.map((genre, index) => {
				return (
					<Link
						key={index}
						style={{
							backgroundColor:
								genre === selectedGenre
									? "DodgerBlue"
									: "rgb(39, 37, 37)",
						}}
						className="genre-selected-button"
						to={{ pathname: "/", search: `?genre=${genre}` }}
					>
						{genre.toUpperCase()}
					</Link>
				);
			})} */}
		</>
	);
};

export default GenreSelect;

GenreSelect.propTypes = {
	genres: PropTypes.array.isRequired,
	selectedGenre: PropTypes.string,
	onSelect: PropTypes.func.isRequired,
};
