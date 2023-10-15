// import React from 'react';
// import ReactDOM from 'react-dom/client';



// app.js
class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            text: ''
        }
    }


    inputValue = (e) => {
        this.setState({
            text: e.target.value
        })
        // console.log(e.target.value);
    }

    // ecouter la validation du formulaire
    ajoutTache = (e) => {
       e.preventDefault();
        if (this.state.text !== " ") {
            const newItem = {
                text: this.state.text,
                id: Date.now()
            }
            this.setState(state => ({
                items: state.items.concat(newItem),
                text: ''
            }))
        }
    }

    // gestion des eveneents sur les bouttons
    edit = () => {
      console.log("succes");
    }


    render() {
        return (
            <div className="container pt-5 text-light">
                <div className="row">
                    <div className="col-6 mx-auto bg-dark p-3">
                        <h3 className="text-primary ">Todo-list</h3>
                        <form onSubmit={this.ajoutTache} className="input-group">
                            <input onChange={this.inputValue} type="text" className="form-control"  placeholder="ajouter une tache" value={this.state.text}></input>
                            <button className="btn btn-primary"> Ajouter </button>
                        </form>
                        <Listetache items={this.state.items} />
                    </div>
                </div>
            </div>
        );   
    }
}
    class Listetache extends React.Component {
        render() {
            return (
                <ul className="list-group mt-4">
                    {this.props.items.map(tache => (
                        <li key={tache.id} className="list-group-item mb-3 d-flex justify-content-between">
                        {tache.text}
                        <div className="btn-group">
                            <button onClick={this.edit} type="button" className="btn btn-warning ">Modifier</button>
                            <button onClick={this.delete} type="button" className="btn btn-danger mx-1">supprimer</button>
                        </div>
                        </li>
                    ))}
                </ul>
            )
        } 
    }
ReactDOM.render(<Todo />, document.getElementById('root'));

