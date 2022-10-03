import "./Genre.css";
import React from "react";
import NavHeader from "./NavHeader";
import Contact from "./Contact";
import Footer from "./Footer";

const Genre = () => {
  return (
    <div className='wrapper'>
    <NavHeader/>
    <div className="genre">
     
      <div className="genre_body">
        <div className="genre_list">
          <div className="genre_list_item first_genre">
            <h2>Christain & Gospel</h2>
          </div>
          <div className="genre_list_item second_genre">
          <h2>Hip-Hop</h2>
          </div>
          <div className="genre_list_item third_genre">
          <h2>R&B / Soul</h2>
          </div>
        </div>

        <div className="genre_list">
          <div className="genre_list_item forth_genre">
          <h2>Afrobeats</h2>
          </div>
          <div className="genre_list_item fifth_genre">
          <h2>Jazz</h2>
          </div>
          <div className="genre_list_item sixth_genre">
          <h2>Reggae</h2>
          </div>
        </div>

        <div className="genre_list">
          <div className="genre_list_item seventh_genre">
          <h2>Highlife</h2>
          </div>
          <div className="genre_list_item eighteth_genre">
          <h2>Rock</h2>
          </div>
          <div className="genre_list_item nineth_genre">
          <h2>Fuji</h2>
          </div>
        </div>
      </div>
      
    </div>
    <Contact/>
    <Footer/>
    </div>
  );
};

export default Genre;
