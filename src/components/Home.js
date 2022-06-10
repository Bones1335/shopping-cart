import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home">
      <h2>Buy My Stuff!</h2>  
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint omnis adipisci illo non recusandae, enim quos autem! Exercitationem, aperiam? Quod fugit velit porro provident distinctio laborum accusamus error. Dolor, ipsam, molestias assumenda ab repellat, harum cupiditate veritatis amet culpa corrupti accusamus. Amet facilis eum quam sunt laboriosam, odio optio quibusdam, repellendus iste praesentium iusto eaque, dolores laborum obcaecati aliquam provident excepturi aliquid. Quae, accusamus. Laboriosam, voluptatum repellat obcaecati porro incidunt quasi numquam tempora aperiam atque facere nulla iste quae! Facere accusantium repudiandae nobis dolores! Eveniet molestias perferendis sit mollitia. Deserunt ex quidem, optio id consectetur cupiditate neque nam voluptate quod!</p>
      <Link to="/shop">
        <button>View Shop</button>
      </Link>
    </div>
  )
}

export default Home;