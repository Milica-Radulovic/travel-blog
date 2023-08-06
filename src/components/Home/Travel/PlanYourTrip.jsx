import { Fade } from "react-awesome-reveal";
import "./PlanYourTripStyle.css";

const TripPlanningTips = () => {
  return (
    <div className="backGround">
      <Fade delay={1e2} cascade damping={1e-1} duration={3000}>
        <div className="travelTipsH2">
          <span className="travelTipsHeading">Planning Your Trip</span>
        </div>
      </Fade>
      <div className="planningWrapper">
        <h2 className="planning">
          Planning a trip can be exciting and sometimes overwhelming, but with
          the right approach, it can be a smooth and enjoyable process. Here are
          15 tips for planning a trip anywhere.
        </h2>
      </div>
      <div className="tipsListWrapper">
        <ol className="tipsList">
          <li>
            Decide on your destination: Consider your interests, budget, and
            time available to choose a destination that suits your preferences.
          </li>
          <li>
            Set a budget: Determine how much you're willing to spend on your
            trip, including accommodations, transportation, meals, activities,
            and souvenirs.
          </li>
          <li>
            Research the best time to visit: Look into the climate, peak tourist
            seasons, and any special events or festivals that may be happening
            at your chosen destination.
          </li>
          <li>
            Research visa requirements: Check if you need a visa to enter your
            destination country and ensure you have all the necessary
            documentation well in advance.
          </li>
          <li>
            Create a travel itinerary: Outline the places you want to visit and
            activities you'd like to experience. Consider the duration of your
            stay and allocate time accordingly.
          </li>
          <li>
            Find affordable flights: Compare flight prices using travel websites
            or apps to get the best deals. Be flexible with your travel dates to
            find cheaper options.
          </li>
          <li>
            Book accommodations: Research and book accommodations that fit your
            budget and preferences. Consider factors such as location,
            amenities, and customer reviews.
          </li>
          <li>
            Plan your transportation: Determine how you'll get around your
            destination, whether it's public transportation, renting a car, or
            using ride-sharing services. Research local transportation options
            in advance.
          </li>
          <li>
            Pack smart: Make a packing checklist based on the weather,
            activities, and duration of your trip. Pack essentials, including
            clothes, toiletries, medications, and any necessary travel
            documents.
          </li>
          <li>
            Check travel advisories and safety precautions: Stay updated on any
            travel advisories or safety concerns related to your destination.
            Register with your country's embassy or consulate if recommended.
          </li>
          <li>
            Purchase travel insurance: Consider getting travel insurance to
            protect yourself against unexpected events such as trip
            cancellations, medical emergencies, or lost baggage.
          </li>
          <li>
            Plan your activities: Research and book any tours, attractions, or
            activities in advance to secure availability and potentially save
            money. Leave room for spontaneous exploration too.
          </li>
          <li>
            Learn basic local phrases: Familiarize yourself with common
            greetings and phrases in the local language. It can enhance your
            travel experience and help you communicate with locals.
          </li>
          <li>
            Check your travel documents: Ensure your passport is valid for at
            least six months beyond your planned departure date. Make copies of
            important documents and store them separately.
          </li>
          <li>
            Inform your bank and mobile service provider: Let your bank know
            about your travel plans to avoid any issues with your cards. Check
            international roaming and data packages for your mobile phone.
          </li>
        </ol>
      </div>

      <p className="voyage">
        Remember to be flexible and open to unexpected experiences during your
        trip. Planning is essential, but leave room for spontaneity and enjoy
        the journey. Bon voyage!
      </p>
    </div>
  );
};

export default TripPlanningTips;
