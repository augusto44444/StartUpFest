import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class TodoList extends Component {

    renderStartup() {
        const { allStartups } = this.props.startups;
        const defaultUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAMFBMVEXp7vG6vsHq7/Lk6ezGys3h5unJztHZ3eC2ur3e4+bCxsnQ1NfU2Nu9wcTN0dTt8vWIWkUTAAABW0lEQVRoge2YwbKDMAhFExI11cb8/9+W+JxGrbUswLe5Z+VMMzkDg4B1DgAAAAAAAAAAAAAAcAMkQt9bQifBaaup9zIeumaaklDsO10z39gLiHxMU0zB+1h+l1YJyUd18XLhdeW2c9piekzPrtwuJhdr+UxfrzaLePH69NVsJKZufafy/kc6nNMXD+nkXaW59QxzcdgE2af8NluJw+od292lttK32ayqn0vIqeW2zGmbe7OqLsPIDy3RnOfdbDBsIC4E2ngPs8FO7Hbztt+OrBqzpXij3o/oWmGmYu6bw5LW42rAZttUc99kM/Ufq0EOphGP1TGUk1XIVFzGP0k8WYUMxeTGT98N4muvZcTxymsnbtMJ4n8WezNxGK6xWwR+faMaiOuniQBtsXOZbxTADWZWFa/bloSgGzFNWaTNyh/mPJZ42xJg8S+IpLj0rQAAAAAAAAAAAAAAgBNe/TAObeFWc3cAAAAASUVORK5CYII='

        return (
            <>
                {
                    allStartups.map((startup, i) => (
                        <div key={i}>
                            <img src={startup.imageUrl ? startup.imageUrl : defaultUrl} alt="Logo da startup" style={{ width: 250 }} />
                            <h2>{startup.name}</h2>
                            <p>{startup.description}</p>
                        </div>
                    ))
                }
            </>
        )
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.startups.loading ? <h2>Carregando...</h2> : this.renderStartup()}
            </div>
        );
    }
}

const StartupQuery = gql`
query {
    allStartups{
      name,
      imageUrl,
      description,
      Segment{
        id,
        name
      }
    }
  }
`;



export default graphql(StartupQuery, { name: 'startups' })(TodoList);