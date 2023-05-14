import { ENDPOINTSAPI } from "../../lib/constants/endPointsAPI";
import { useFetchAPIItem } from "../../lib/hooks/useFetchAPIItem";
import { getItemId } from "../../lib/utils/getItemId";
import { Container } from "./InfoFilmStyled";
import Message from "../common/Message";

const InfoFilm = ({ urlFilm }) => {
  const filmId = getItemId(urlFilm);
  const urlFilmImg = ENDPOINTSAPI.filmsImg + filmId + ".jpg";

  const { datasItem, loadingItem, errorItem, imgItem, loadingImg, errorImg } =
    useFetchAPIItem(urlFilm, urlFilmImg);
  const year = () => datasItem.release_date.slice(0, 4);

  return (
    <>
      {loadingImg && <Message text={"loading image..."} />}
      {loadingItem && <Message text={"loading data..."} />}
      {errorItem && <Message text={"Error loading data:"} error={errorItem} />}
      {datasItem && imgItem && !loadingItem && !errorItem && (
        <Container>
          <div className='container-nom-peli'>
            {datasItem.title && (
              <p className='nom-peli'>
                {datasItem.title} ({year()})
              </p>
            )}
            <p className='nom-peli'>
              <span className='episode'>Episode:&nbsp;</span>
              {datasItem.episode_id}
            </p>
          </div>
          <div className='container-image-film'>
            <img className='image-film' src={imgItem} alt='film-img' />
            {errorImg && <p>No Image available...</p>}
          </div>
          <ul className='llista-detalls-pelis'>
            <div className='bloc-llista-detalls-pelis'>
              <li>
                <span>Director:</span> <span>{datasItem.director}</span>
              </li>
              <li>
                <span>Producer/s:</span> <span>{datasItem.producer}</span>
              </li>
              <li>
                <span>Release date:</span> <span>{datasItem.release_date}</span>
              </li>
              <li>
                <span>Synopsis:</span>
              </li>
              <li>
                <p className='sinopsi'>{datasItem.opening_crawl}</p>
              </li>
            </div>
          </ul>
        </Container>
      )}
    </>
  );
};

export default InfoFilm;
