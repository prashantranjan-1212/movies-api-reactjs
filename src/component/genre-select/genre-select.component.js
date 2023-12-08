import "./genre-select.style.scss";
import PropTypes from "prop-types";

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
	return (
		<div className="genre-button">
			{genres.map((genre, index) => {
				return (
					<button
						className="genre-selected-button"
						key={index}
						data-testid={genre}
						onClick={() => onSelect(genre)}
						style={{
							backgroundColor:
								genre === selectedGenre
									? "DodgerBlue"
									: "rgb(39, 37, 37)",
						}}
					>
						{genre.toUpperCase()}
					</button>
				);
			})}
		</div>
	);
};

export default GenreSelect;

GenreSelect.propTypes = {
	genres: PropTypes.array.isRequired,
	selectedGenre: PropTypes.string,
	onSelect: PropTypes.func.isRequired,
};
