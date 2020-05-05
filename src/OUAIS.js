import React, {Component} from 'react'
import axios from 'axios';


class OUAIS extends Component{
    state = {
                "title": "",
                "poster": "",
                "comment": ""
            }

onChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value,
    });
}
submitForm = (e) => {
    e.preventDefault();

    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios.post(url, this.state)
    .then(res => res.data)
    .then(res => {
    alert(`OOOOOOOOH ${res.id} !`);
})
    .catch(e => {
    console.error(e);
    alert(`AAAAAAAAAAAAAAAHHHHHHHHHHHHHHH : ${e.message}`);
});

}

render() {
    return(

<div className="Form">

            <h1>MOVIE</h1>

    <form onSubmit={this.submitForm}>
            <fieldset>
            <legend>DJ KHALED</legend>
                <div className="form-data">
                    <label htmlFor="title">Title</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.lastname}
                    />
                </div>

                <div className="form-data">
                    <label htmlFor="url">Poster</label>
                    <input
                    type="url"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.firstname}
                    />
                </div>

                <div className="form-data">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                    type="text"
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.email}
                    />
                </div>
        <hr />
                <div className="form-data">
                    <input className="buttonstyle"type="submit" value="Envoyer" />
                </div>
            </fieldset>
    </form>
</div>
    )
}
}



export default OUAIS