import { useRef, useState, useCallback, useEffect } from 'react';
import Error from './components/Error.jsx';
import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { updateUser } from './Http.js';
import { fetchUserPlaces } from './Http.js';
import { useFetch } from './hooks/useFetch.js';
function App() {
  const selectedPlace = useRef();
 

  const [errorPlace, setErrorPlace] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const{isFetching,error,setFetchData:setUserPlaces,fetchData:userPlaces}=useFetch(fetchUserPlaces,[]);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    // await updateUserPlaces([selectedPlace, ...userPlaces]);

    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateUser([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorPlace({
        message: error.message || 'Failed to update places.',
      });
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try {
      await updateUser(userPlaces.filter((place) => place.id !== selectedPlace.current.id))
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorPlace({ message: error.message || 'Failed to update places.' });
    }


    setModalIsOpen(false);
  }, [userPlaces,setUserPlaces]);

  function handleError(){
    setErrorPlace(null);
  }
  return (
    <>
      <Modal open={errorPlace} onClose={handleError}>
        {errorPlace &&<Error title="Failed to update places" message={errorPlace.message}
        onConfirm={handleError} />}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && (
          <Error
            title="Failed to fetch places"
            message={error.message}
            onConfirm={() => setError(null)}
          />
        )}
        {!error&&<Places
        isLoading={isFetching}
        loadingText={"Loading your places..."}
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
