import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"


const MovieForm = ({ allEntry, setAllEntry }) => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [year, setYear] = useState("")
    // const [allEntry, setAllEntry] = useState([])



    const submitForm = (e) => {
        e.preventDefault(0)
        if (name.length > 0 && genre.length > 0 && year.length > 0) {
            const newEntry = { id: new Date().getTime().toString(), name: name, genre: genre, year: year };
            let arr = [...allEntry];
            arr.push(newEntry);
            setAllEntry(arr);
            navigate("/")
        } else {
            console.log("error")

        }
    }

    return (
        <div className="form-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <form onSubmit={submitForm}>
                            <div className="row ">
                                <div className="col-lg-12 mb-3">
                                    <div className="d-flex justify-content-center align-items-center gap-4">
                                        <div className="upload-img">
                                            <img src="/assets/images/movie.jpg" alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label>Movie Name</label>
                                    <div className="input-box">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label>Movie Genre</label>
                                    <div className="input-box">
                                        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <label>Release Year</label>
                                    <div className="input-box" value={year} onChange={(e) => setYear(e.target.value)}>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-3">
                                    <button type="submit" className="btn btn-success w-100">
                                        Add Movie
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieForm