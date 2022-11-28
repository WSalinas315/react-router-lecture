import { useParams } from 'react-router-dom';

export default function AnimalDetail(){
  // Params is looking for extra info from the URL like :id -> 89 in /#/animals/89
   const { id } = useParams(); 
   return (
   <>
      <h1>Animal Details</h1>
      <p>Details for animal with id of {id}</p>
   </>
  );
}