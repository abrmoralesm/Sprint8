import { ENDPOINTSAPI } from "../../lib/constants/endPointsAPI";
import { Contenidor } from "./WellcomeStyled";
import EnvLink from "../common/EnvLink";

const Wellcome = () => (
  <Contenidor>
    <div>
      <h1>Welcome to the Star Wars Website: A Journey Through the Galaxy</h1>
      <h2>
        Greetings, Star Wars fans! We are thrilled to have you visit our Star
        Wars website and embark on this journey through the galaxy
      </h2>
      <div className='imatge-nau'>
        <img src={ENDPOINTSAPI.starshipBenvinguda} alt='starship benvinguda' />{" "}
        Log
      </div>
      <p>
        Starships are space vehicles that can carry people and cargo between
        planets. They come in many different sizes and shapes, including small
        fighters and large cruisers. Some well-known starships in the series are
        the Millennium Falcon and Imperial Star Destroyers.
      </p>
      <p>
        We hope you enjoy your time on our website and we look forward to your
        future visits. May the Force be with you always!
      </p>
    </div>
    <EnvLink to='/starships' className='link'>
      <button>starships</button>
    </EnvLink>
  </Contenidor>
);

export default Wellcome;
