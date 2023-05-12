import { endPointsAPI } from "../../lib/constants/endPointsAPI";
import { useFetchAPIItem } from "../../lib/hooks/useFetchAPIItem";
import Missatge from "../common/Missatge";
import { Contenidor } from "./DetallsStyled";

const Detalls = ({ starshipId }) => {
  const urlItem = endPointsAPI.starships + starshipId + "/";
  const urlItemImg = endPointsAPI.starshipImg + starshipId + ".jpg";
  console.log(urlItem, urlItemImg);

  const { dadesItem, loadingItem, errorItem, imgItem, loadingImg, errorImg } =
    useFetchAPIItem(urlItem, urlItemImg);

  return (
    <>
      {loadingImg && <Missatge text={"loading image..."} />}
      {loadingItem && <Missatge text={"loading data..."} />}
      {errorItem && <Missatge text={"Error loading data:"} error={errorItem} />}
      {dadesItem && imgItem && !loadingItem && !errorItem && (
        <Contenidor>
          <div>
            <img src={imgItem} alt='starship-img' />
            {errorImg && <p>No Image available...</p>}
          </div>
          <ul>
            <h2>{dadesItem.name}</h2>
            <div>
              <li>
                <span>Model:</span> <span>{dadesItem.model}</span>
              </li>
              <li>
                <span>Manufacturer:</span> <span>{dadesItem.manufacturer}</span>
              </li>
              <li>
                <span>Class:</span> <span>{dadesItem.starship_class}</span>
              </li>
              <li>
                <span>Cost:</span>{" "}
                <span>{dadesItem.cost_in_credits} credits</span>
              </li>
              <li>
                <span>Speed:</span>{" "}
                <span>{dadesItem.max_atmosphering_speed} km/h</span>
              </li>
              <li>
                <span>Hyperdrive Rating:</span>{" "}
                <span>{dadesItem.hyperdrive_rating}</span>
              </li>
              <li>
                <span>MGLT:</span> <span>{dadesItem.MGLT}</span>
              </li>
              <li>
                <span>Length:</span> <span>{dadesItem.length}m</span>
              </li>
              <li>
                <span>Minimum Crew:</span> <span>{dadesItem.crew}</span>
              </li>
              <li>
                <span>Passengers:</span> <span>{dadesItem.passengers}</span>
              </li>
              <li>
                <span>Cargo Caliacity:</span>{" "}
                <span>{dadesItem.cargo_capacity} metric tons</span>
              </li>
              <li>
                <span>Consumables:</span> <span>{dadesItem.consumables}</span>
              </li>
            </div>
          </ul>
        </Contenidor>
      )}
    </>
  );
};

export default Detalls;
