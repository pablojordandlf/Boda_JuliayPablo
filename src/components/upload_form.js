import React from 'react';
import { projectFirestore } from "../firebase/config";

class Art_upload extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            artist: "",
            available: false,
            description: "",
            description_short: "",
            dimensions: "",
            id: "",
            price: 0,
            price6M: 0,
            price12M: 0,
            price24M: 0,
            url: "",
        };
    }
    
    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    
    addArt = e => {
        const id = projectFirestore.collection('cuadros').doc().id
        console.log("ID: ", id)
        e.preventDefault();
        const userRef = projectFirestore.collection("cuadros").doc(id).set({
            name: this.state.name,
            artist: this.state.artist,
            available: this.state.available,
            description: this.state.description,
            description_short: this.state.description_short,
            dimensions: this.state.dimensions,
            id: id,
            price: this.state.price,
            price6M: this.state.price6M,
            price12M: this.state.price12M,
            price24M: this.state.price24M,
            url: this.state.url,
        });  

        this.setState({
            name: "",
            artist: "",
            available: false,
            description: "",
            description_short: "",
            dimensions: "",
            id: "",
            price: 0,
            price6M: 0,
            price12M: 0,
            price24M: 0,
            url: "",
        });
      };
    
    render() {
        return (
            <form onSubmit={this.addArt}>
                <text>Carga de Cuadros:</text>
                <br />
                <br />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={this.updateInput}
                    value={this.state.name}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="artist"
                    placeholder="Artist"
                    onChange={this.updateInput}
                    value={this.state.artist}
                />
                <br />
                <br />
                <input
                    type="boolean"
                    name="available"
                    placeholder="Available"
                    onChange={this.updateInput}
                    value={this.state.available}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={this.updateInput}
                    value={this.state.description}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="description_short"
                    placeholder="Description_short"
                    onChange={this.updateInput}
                    value={this.state.description_short}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="dimensions"
                    placeholder="Dimensions"
                    onChange={this.updateInput}
                    value={this.state.dimensions}
                />
                <br />
                <br />
                
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    onChange={this.updateInput}
                    value={this.state.price}
                />
                <br />
                <br />
                <input
                    type="number"
                    name="price6M"
                    placeholder="Price 6M"
                    onChange={this.updateInput}
                    value={this.state.price6M}
                />
                <br />
                <br />
                <input
                    type="number"
                    name="price12M"
                    placeholder="Price 12M"
                    onChange={this.updateInput}
                    value={this.state.price12M}
                />
                <br />
                <br />
                <input
                    type="number"
                    name="price24M"
                    placeholder="Price 24M"
                    onChange={this.updateInput}
                    value={this.state.price24M}
                />
                <br />
                <br />
                <input
                    type="text"
                    name="url"
                    placeholder="Url"
                    onChange={this.updateInput}
                    value={this.state.url}
                />
                <br />
                <br />

                <button type="submit">Submit</button>
            </form>
            );
        }
    }
export default Art_upload;