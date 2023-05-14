import { ENDPOINTSAPI } from "../../lib/constants/endPointsAPI";
import { useFetchAPIItem } from "../../lib/hooks/useFetchAPIItem";
import { getItemId } from "../../lib/utils/getItemId";
import { Contenidor } from "./DetallsPeliStyled";
import Missatge from "../common/Missatge";

const DetallsPeli = ({ urlPeli }) => {
  const peliId = getItemId(urlPeli);
  const urlPeliImg = ENDPOINTSAPI.pelisImg + peliId + ".jpg";

  const { dadesItem, loadingItem, errorItem, imgItem, loadingImg, errorImg } =
    useFetchAPIItem(urlPeli, urlPeliImg);
  const year = () => dadesItem.release_date.slice(0, 4);

  return (
    <>
      {loadingImg && <Missatge text={"loading image..."} />}
      {loadingItem && <Missatge text={"loading data..."} />}
      {errorItem && <Missatge text={"Error loading data:"} error={errorItem} />}
      {dadesItem && imgItem && !loadingItem && !errorItem && (
        <Contenidor>
          <div className='contenidor-nom-peli'>
            {dadesItem.title && (
              <p className='nom-peli'>
                {dadesItem.title} ({year()})
              </p>
            )}
            <p className='nom-peli'>
              <span className='episodi'>Episode:&nbsp;</span>
              {dadesItem.episode_id}
            </p>
          </div>
          <div className='contenidor-imatge-peli'>
            <img className='imatge-peli' src={imgItem} alt='peli-img' />
            {errorImg && <p>No Image available...</p>}
          </div>
          <ul className='llista-detalls-pelis'>
            <div className='bloc-llista-detalls-pelis'>
              <li>
                <span>Director:</span> <span>{dadesItem.director}</span>
              </li>
              <li>
                <span>Producer/s:</span> <span>{dadesItem.producer}</span>
              </li>
              <li>
                <span>Release date:</span> <span>{dadesItem.release_date}</span>
              </li>
              <li>
                <span>Synopsis:</span>
              </li>
              <li>
                <p className='sinopsi'>{dadesItem.opening_crawl}</p>
              </li>
            </div>
          </ul>
        </Contenidor>
      )}
    </>
  );
};

export default DetallsPeli;
