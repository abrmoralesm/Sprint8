import { ENDPOINTSAPI } from "../../lib/constants/endPointsAPI";
import { useFetchAPIItem } from "../../lib/hooks/useFetchAPIItem";
import { getItemId } from "../../lib/utils/getItemId";
import { Container } from "./InfoPilotsStyled";
import Message from "../common/Message";

const InfoPilots = ({ urlPilot }) => {
  const pilotId = getItemId(urlPilot);
  const urlPilotImg = ENDPOINTSAPI.pilotsImg + pilotId + ".jpg";

  const { dadesItem, loadingItem, errorItem, imgItem, loadingImg, errorImg } =
    useFetchAPIItem(urlPilot, urlPilotImg);

  return (
    <>
      {loadingImg && <Message text={"loading image..."} />}
      {loadingItem && <Message text={"loading data..."} />}
      {errorItem && <Message text={"Error loading data:"} error={errorItem} />}
      {dadesItem && imgItem && !loadingItem && !errorItem && (
        <Container>
          <p className='nom-pilot'>{dadesItem.name}</p>
          <div className='container-imatge-pilot'>
            <img className='imatge-pilot' src={imgItem} alt='pilot-img' />
            {errorImg && <p>No Image available...</p>}
          </div>
          <ul className='llista-detalls-pilots'>
            <div className='bloc-llista-detalls-pilots'>
              <li>
                <span>Height:</span> <span>{dadesItem.height}</span>
              </li>
              <li>
                <span>Mass:</span> <span>{dadesItem.mass}</span>
              </li>
              <li>
                <span>Gender:</span> <span>{dadesItem.gender}</span>
              </li>
              <li>
                <span>Year of Birth:</span> <span>{dadesItem.birth_year}</span>
              </li>
            </div>
          </ul>
        </Container>
      )}
    </>
  );
};

export default InfoPilots;
