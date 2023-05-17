/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
const MovieList = ({ allEntry, setAllEntry }) => {
    
    const deleteItem = (index) => {
        let arr = [...allEntry];
        arr.splice(index,1);
        setAllEntry(arr);
      }
    return (
        <div className='container'>
            <div className="header">
                <h1 className='text-white'>Movie Lists</h1>
                <Link to="/movie-form" className='btn btn-primary'>Add Movie</Link>
            </div>
           { allEntry.length > 0 && <div className="row  mt-4">
                {
                allEntry?.map((element,index) => {
                  
                    return (
                       
                        <div className="col-lg-4" key={element.id} >
                            <div className="movie-card p-4">
                                <div className="position-relative mb-3">
                                    <img src="/assets/images/movie.jpg" className='w-100' alt="" />
                                    <button className='del-icon' onClick={() => deleteItem(index)
                                        
                                    }   >
                                        <span className="iconify" data-icon="material-symbols:delete-rounded"></span>
                                    </button>
                                </div>
                                <div className="movie-body ">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className='text-white'>
                                            Movie Name:
                                        </h5>
                                        <h5 className="text-white">{element.name}</h5>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className='text-white'>
                                            Movie Genre:
                                        </h5>
                                        <h5 className="text-danger">{element.genre}</h5>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h5 className='text-white'>
                                            Releasing Year:
                                        </h5>
                                        <h5 className='text-white'>
                                            {element.year}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>}

            {
                allEntry.length <= 0  &&
                    <div className="h-vh">
                        <h1 className='text-white'>No Films</h1>
                    </div>
            
            }
        </div>
    )
}

export default MovieList