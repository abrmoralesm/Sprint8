import { ENDPOINTSAPI } from "../../lib/constants/endPointsAPI";
import { useFetchAPIItem } from "../../lib/hooks/useFetchAPIItem";
import { Container } from "./ConfigStarshipStyled";
import Message from "../common/Message";
import EnvLink from "../common/EnvLink";
import ListPilots from "../ListPilots/ListPilots";
import ListFilms from "../ListFilms/ListFilms";

const ConfigStarship = ({ starshipId }) => {
  const urlItem = ENDPOINTSAPI.starships + starshipId + "/";
  const urlItemImg = ENDPOINTSAPI.starshipImg + starshipId + ".jpg";

  const { datasItem, loadingItem, errorItem, imgItem, loadingImg, errorImg } =
    useFetchAPIItem(urlItem, urlItemImg);

  return (
    <>
      {loadingImg && <Message text={"loading image..."} />}
      {loadingItem && <Message text={"loading data..."} />}
      {errorItem && <Message text={"Error loading data:"} error={errorItem} />}
      {datasItem && imgItem && !loadingItem && !errorItem && (
        <Container>
          <div className='container-image-starship'>
            <img className='image-starship' src={imgItem} alt='starship-img' />
            {errorImg && <p className='missatge'>No Image available...</p>}
          </div>
          <ul className='llista-detalls-nau'>
            <h2 className='name-starship'>{datasItem.name}</h2>
            <div className='bloc-llista-detalls-nau'>
              <li>
                <span>Model:</span> <span>{datasItem.model}</span>
              </li>
              <li>
                <span>Manufacturer:</span> <span>{datasItem.manufacturer}</span>
              </li>
              <li>
                <span>Class:</span> <span>{datasItem.starship_class}</span>
              </li>
              <li>
                <span>Cost:</span>
                <span>{datasItem.cost_in_credits} credits</span>
              </li>
              <li>
                <span>Speed:</span>
                <span>{datasItem.max_atmosphering_speed} km/h</span>
              </li>
              <li>
                <span>Hyperdrive Rating:</span>
                <span>{datasItem.hyperdrive_rating}</span>
              </li>
              <li>
                <span>MGLT:</span> <span>{datasItem.MGLT}</span>
              </li>
              <li>
                <span>Length:</span> <span>{datasItem.length}m</span>
              </li>
              <li>
                <span>Minimum Crew:</span> <span>{datasItem.crew}</span>
              </li>
              <li>
                <span>Passengers:</span> <span>{datasItem.passengers}</span>
              </li>
              <li>
                <span>Cargo Caliacity:</span>
                <span>{datasItem.cargo_capacity} metric tons</span>
              </li>
              <li>
                <span>Consumables:</span> <span>{datasItem.consumables}</span>
              </li>
            </div>
          </ul>
          <ListPilots urlPilots={datasItem.pilots} />
          <ListFilms urlFilms={datasItem.films} />
          <EnvLink to='/starships'>
            <button className='boto'>starships</button>
          </EnvLink>
        </Container>
      )}
    </>
  );
};

export default ConfigStarship;
