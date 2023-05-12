import { Contenidor } from "./BenvingudaStyled";
import { useNavigate } from "react-router-dom";
import { endPointsAPI } from "../../lib/constants/endPointsAPI";

const VistaError = () => {
  const navega = useNavigate();
  return (
    <Contenidor>
      <div>
        <h1>
          "Welcome to the Star Wars Website: A Journey Through the Galaxy"
        </h1>
        <h2>
          "Greetings, Star Wars fans! We are thrilled to have you visit our Star
          Wars website and embark on this journey through the galaxy
        </h2>
        <div>
          <img
            src={endPointsAPI.starshipBenvinguda}
            alt='starship benvinguda'
          />
        </div>
        <p>
          Starships are space vehicles that can carry people and cargo between
          planets. They come in many different sizes and shapes, including small
          fighters and large cruisers. Some well-known starships in the series
          are the Millennium Falcon and Imperial Star Destroyers.
        </p>
        <p>
          We hope you enjoy your time on our website and we look forward to your
          future visits. May the Force be with you always!"
        </p>
      </div>
      <button onClick={() => navega(process.env.PUBLIC_URL + "/starships")}>
        Starships
      </button>
    </Contenidor>
  );
};

export default VistaError;
