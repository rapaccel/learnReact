import Places from './Places.jsx';

import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../Http.js';
import { useFetch } from '../hooks/useFetch.js';

async function fethSortedPlaces(places) {
  const placesAvailable = await fetchAvailablePlaces();
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(placesAvailable, position.coords.latitude, position.coords.longitude);
      resolve(sortedPlaces);
    });
  });
}
export default function AvailablePlaces({ onSelectPlace }) {


  const { isFetching, error, fetchData: places } = useFetch(fethSortedPlaces, []);



  if (error) {
    return <Error title="Failed to fetch places" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={places}
      loadingText="Loading places..."
      isLoading={isFetching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
