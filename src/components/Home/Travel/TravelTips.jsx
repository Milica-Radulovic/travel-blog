import { Fade } from "react-awesome-reveal";
import "./TripsPlanningTips.css";

const TravelTips = () => {
  return (
    <div className="backGround">
      <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
        <div
          className="travelTips"
          style={{
            width: "100%",
            height: "20px",
            borderBottom: "0.2px solid #B4C7BF",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "40px",
              padding: "0 10px",
              backgroundColor: "#EDEADC",
              color: "#36565C",
            }}
          >
            Top Travel Tips
          </span>
        </div>
      </Fade>
      <div className="planningWrapper">
        <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
          <h2 className="planning">
            Embark on a journey of a lifetime with these 20 expert travel tips,
            curated by our seasoned globetrotters with over two decades of
            exploration under our belts. These invaluable insights will elevate
            your adventures and ensure memorable experiences as you explore the
            world.
          </h2>
        </Fade>
      </div>
      <ol className="tipsList">
        <li>
          Be Flexible with Plans: Embrace spontaneity and be open to changing
          itineraries for unexpected adventures.
        </li>
        <li>
          Pack Light: Travel with only the essentials to stay nimble and avoid
          unnecessary baggage fees.
        </li>
        <li>
          Research Local Customs: Learn about the culture and etiquette of your
          destination to show respect to locals.
        </li>
        <li>
          Invest in Quality Luggage: Durable and functional luggage will be your
          faithful travel companion.
        </li>
        <li>
          Carry a Portable Charger: Keep your devices charged for navigation and
          communication on the go.
        </li>
        <li>
          Use Packing Cubes: Organize your belongings efficiently and avoid a
          chaotic suitcase.
        </li>
        <li>
          Learn Basic Phrases: A few words in the local language can make a big
          difference in connecting with locals.
        </li>
        <li>
          Be Mindful of Your Health: Stay hydrated, get enough rest, and carry
          basic medications.
        </li>
        <li>
          Keep Digital Copies: Scan important documents and store them securely
          in the cloud.
        </li>
        <li>
          Embrace Public Transportation: Opt for local buses or trains to
          experience a destination like a local.
        </li>
        <li>
          Interact with Locals: Engaging with residents will provide invaluable
          insights and enrich your journey.
        </li>
        <li>
          Have Travel Insurance: Prepare for unforeseen events, accidents, or
          medical emergencies.
        </li>
        <li>
          Stay Connected with Wi-Fi: Research places with free Wi-Fi to save on
          data charges.
        </li>
        <li>
          Respect Wildlife and Nature: Admire animals from a distance and follow
          eco-friendly practices.
        </li>
        <li>
          Capture Memories in a Journal: Write down your experiences to cherish
          for years to come.
        </li>
        <li>
          Stay Street Smart: Keep your valuables secure and be cautious in
          crowded areas.
        </li>
        <li>
          Try Local Cuisine: Step out of your comfort zone and savor authentic
          flavors of the region.
        </li>
        <li>
          Travel Off-Season: Enjoy fewer crowds and lower prices while
          discovering hidden gems.
        </li>
        <li>
          Pack a Reusable Water Bottle: Reduce plastic waste and stay hydrated
          during your adventures.
        </li>
        <li>
          Leave No Trace: Respect the environment and leave destinations as
          beautiful as you found them.
        </li>
      </ol>

      <p className="voyage">
        As you set forth on your adventures armed with these expert travel tips,
        remember that the true essence of travel lies in embracing the unknown,
        immersing yourself in new cultures, and forging unforgettable
        connections with people and places. Each journey is a chapter in the
        incredible story of your life, and with a curious spirit and an open
        heart, the world becomes your canvas to paint with unforgettable
        memories. So, let wanderlust be your guide as you explore the wonders of
        our beautiful planet, leaving footprints of compassion, understanding,
        and awe in your wake. Bon voyage!
      </p>
    </div>
  );
};

export default TravelTips;
