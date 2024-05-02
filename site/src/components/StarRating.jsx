import React from 'react';
import '../styles/StarRating.css'; // Importa o estilo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0 // Inicialmente, nenhuma estrela está selecionada
    };
  }

  handleStarClick = (index) => {
    const { rating } = this.state;
    // If the clicked star is already selected, set the rating to 0 (deselect it)
    // Otherwise, select the clicked star
    const newRating = index === rating ? 0 : index + 1;
    console.log("Clicked Star Index:", index);
    console.log("New Rating:", newRating);
    this.setState({ rating: newRating });
  }

  render() {
    const { rating } = this.state;

    return (
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={`star ${index < rating ? "filled" : ""}`}
            onClick={() => this.handleStarClick(index)}
            size="2x" // Defina o tamanho do ícone aqui (2x = duas vezes o tamanho padrão)
          />
        ))}
      </div>
    );
  }
}

export default StarRating;