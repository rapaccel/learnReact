export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    return resData.places;
}
export async function updateUser(places){
    const response= await fetch('http://localhost:3000/user-places',{
        method:'PUT',
        body:JSON.stringify({places}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const resData=await response.json();
    if(!response.ok){
        throw new Error('Something went wrong!');
    }
    return resData.messgae;
}

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();
    if (!response.ok) {
        throw new Error('Something went wrong!');
    }
    return resData.places;
}