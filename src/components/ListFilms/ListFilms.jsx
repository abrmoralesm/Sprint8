import InfoFilm from "../InfoFilm/InfoFilm";
import { Container } from "./ListFilmsStyled";

const ListFilms = ({ urlFilms }) => (
  <Container>
    <h2 className='title-film'>Movies</h2>
    {urlFilms &&
      (urlFilms.length === 0 ? (
        <p className='missatge'>no movies available...</p>
      ) : (
        <ul className='list-films'>
          {urlFilms.map((urlFilm, index) => (
            <InfoFilm key={index} urlFilm={urlFilm} />
          ))}
        </ul>
      ))}
  </Container>
);

export default ListFilms;
