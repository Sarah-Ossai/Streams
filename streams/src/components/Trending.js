import './Trending.css'
import React from 'react'
import NavHeader from './NavHeader'
import PlayCircleOutline from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Contact from './Contact';
import Footer from './Footer';

function Trending() {
  return (
    <div className='wrapper'>
    <NavHeader/>
    <div className='trending'>
        <div className='trendingimage'>
          <img src='https://guardian.ng/wp-content/uploads/2020/12/Omah-Lay-e1607879118262.jpg' alt='banner'/>
          <div className='body_infoText'>
          <strong>WHAT'S NEW?</strong>
          <h2 className='desktop'>Check Out The Trending Songs</h2>
          <h2 className='mobile'>Check Out The Trending Songs</h2>
         </div>         
            </div>
            <div className='playall'>
              
            <PlayCircleOutline  className='play_icon' fontSize='large'/>
            <h3>PLAY ALL</h3>
            </div>
            <div class='songs'> 
                  
               <ol className='songList steps'>
              <div className='song_flex head'>
                    <h6>TITLE</h6 >
                    <h4 className='artist-move'>ARTIST</h4>
                    <AccessTimeIcon />
                    <PlayCircleOutline className='hide-this'/>
                  </div>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/2p94zemn' alt='' className='titleImage'/>
                    <p>Bandana</p>
                    </div>
                    <div className='artist'>
                    <p>Fireboy DML ft Asake</p>
                    </div>
                    <div className='duration'>
                    <p>2:58</p>
                    </div>
                    <div className='play'>
                    <PlayCircleOutline clasName='play'/>
                    </div>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/92hfwka4' alt='' className='titleImage'/>
                    <p>Terminator</p>
                    </div>
                    <div className='artist'>
                    <p>Asake</p>
                    </div>
                    <div className='duration'>
                    <p>2:35</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/4t8umfm8' alt='' className='titleImage'/>
                    <p>Common Person</p>
                    </div>
                    <div className='artist'>
                    <p>Burna Boy</p>
                    </div>
                    <div className='duration'>
                    <p>3:30</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/bdn55vys' alt='' className='titleImage'/>
                    <p>Girlfriend</p>
                    </div>
                    <div className='artist'>
                    <p>Ruger</p>
                    </div>
                    <div className='duration'>
                    <p>3:16</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/2rmf5r49' alt='' className='titleImage'/>
                    <p>Machala</p>
                    </div>
                    <div className='artist'>
                    <p>Caterefe ft Berri-Tiga</p>
                    </div>
                    <div className='duration'>
                    <p>2:34</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/2nmmxp8v' alt='' className='titleImage'/>
                    <p>Overloading</p>
                    </div>
                    <div className='artist'>
                    <p>Mavins</p>
                    </div>
                    <div className='duration'>
                    <p>3:25</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/re2edk3n' alt='' className='titleImage'/>
                    <p>Electricity</p>
                    </div>
                    <div className='artist'>
                    <p>Pheelz ft Davido</p>
                    </div>
                    <div className='duration'>
                    <p>2:12</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/4t8umfm8' alt='' className='titleImage'/>
                    <p>For My Hand</p>
                    </div>
                    <div className='artist'>
                    <p>Burna Boy ft Ed Sheeran</p>
                    </div>
                    <div className='duration'>
                    <p>2:35</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/4t8umfm8' alt='' className='titleImage'/>
                    <p>It's Plenty</p>
                    </div>
                    <div className='artist'>
                    <p>Burna Boy</p>
                    </div>
                    <div className='duration'>
                    <p>3:37</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/2p9dxrhy' alt='' className='titleImage'/>
                    <p>Buga</p>
                    </div>
                    <div className='artist'>
                    <p>Kiss Daniel ft Tekno</p>
                    </div>
                    <div className='duration'>
                    <p>3:03</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
             
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/5au926vr' alt='' className='titleImage'/>
                    <p>Many Ways</p>
                    </div>
                    <div className='artist'>
                    <p>BNXN</p>
                    </div>
                    <div className='duration'>
                    <p>3:47</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/mj6tuzv2' alt='' className='titleImage'/>
                    <p>Peace Be Unto You</p>
                    </div>
                    <div className='artist'>
                    <p>Asake</p>
                    </div>
                    <div className='duration'>
                    <p>2:33</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
             
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/49cy56yw' alt='' className='titleImage'/>
                    <p>Ijo</p>
                    </div>
                    <div className='artist'>
                    <p>Crayon</p>
                    </div>
                    <div className='duration'>
                    <p>3:06</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
            <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/yckp6cuf' alt='' className='titleImage'/>
                    <p>KU LO SA</p>
                    </div>
                    <div className='artist'>
                    <p>Oxlade</p>
                    </div>
                    <div className='duration'>
                    <p>2:27</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/2p8afd4b' alt='' className='titleImage'/>
                    <p>Certified Loner</p>
                    </div>
                    <div className='artist'>
                    <p>Mayorkun</p>
                    </div>
                    <div className='duration'>
                    <p>2:45</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/ekay94zt' alt='' className='titleImage'/>
                    <p>Ashawo</p>
                    </div>
                    <div className='artist'>
                    <p>Fireboy DML</p>
                    </div>
                    <div className='duration'>
                    <p>3:03</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/bdmfa9bb' alt='' className='titleImage'/>
                    <p>I'm a mess</p>
                    </div>
                    <div className='artist'>
                    <p>Omah Lay</p>
                    </div>
                    <div className='duration'>
                    <p>2:33</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/2s7vz3zf' alt='' className='titleImage'/>
                    <p>Calm Down</p>
                    </div>
                    <div className='artist'>
                    <p>Rema</p>
                    </div>
                    <div className='duration'>
                    <p>3:39</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/3j2jhe4f' alt='' className='titleImage'/>
                    <p>We Outside</p>
                    </div>
                    <div className='artist'>
                    <p>Olamide</p>
                    </div>
                    <div className='duration'>
                    <p>2:35</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/bdctujdh' alt='' className='titleImage'/>
                    <p>Adulthood Anthem</p>
                    </div>
                    <div className='artist'>
                    <p>Ladé</p>
                    </div>
                    <div className='duration'>
                    <p>2:44</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/msmr3r75' alt='' className='titleImage'/>
                    <p>Last Last</p>
                    </div>
                    <div className='artist'>
                    <p>Burna Boy</p>
                    </div>
                    <div className='duration'>
                    <p>2:52</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/4t8umfm8' alt='' className='titleImage'/>
                    <p>Different Size</p>
                    </div>
                    <div className='artist'>
                    <p>Burna Boy ft Victony</p>
                    </div>
                    <div className='duration'>
                    <p>2:30</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/22cdyyh6' alt='' className='titleImage'/>
                    <p>PALAZZO</p>
                    </div>
                    <div className='artist'>
                    <p> SPINALL ft Asake</p>
                    </div>
                    <div className='duration'>
                    <p>3:06</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/5n8nh4zr' alt='' className='titleImage'/>
                    <p>New Born Fela</p>
                    </div>
                    <div className='artist'>
                    <p>Bella Shmurda</p>
                    </div>
                    <div className='duration'>
                    <p>2:09</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/4t8umfm8' alt='' className='titleImage'/>
                    <p>Jagele</p>
                    </div>
                    <div className='artist'>
                    <p>Burna Boy</p>
                    </div>
                    <div className='duration'>
                    <p>3:02</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/ekay94zt' alt='' className='titleImage'/>
                    <p>Bandana</p>
                    </div>
                    <div className='artist'>
                    <p>Fireboy DML ft Asake</p>
                    </div>
                    <div className='duration'>
                    <p>2:58</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/2fp56b6p' alt='' className='titleImage'/>
                    <p>Dada</p>
                    </div>
                    <div className='artist'>
                    <p>Young John</p>
                    </div>
                    <div className='duration'>
                    <p>2:57</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/5fbv28c3' alt='' className='titleImage'/>
                    <p>Finesse</p>
                    </div>
                    <div className='artist'>
                    <p>Buju</p>
                    </div>
                    <div className='duration'>
                    <p>2:31</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/mrytes5b' alt='' className='titleImage'/>
                    <p>Kolomental</p>
                    </div>
                    <div className='artist'>
                    <p>Victony</p>
                    </div>
                    <div className='duration'>
                    <p>3:17</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
                <li>
                <div className='song_flex '>
                  <div className='title-icon'>
                    <img src='https://tinyurl.com/bdk55tf8' alt='' className='titleImage'/>
                    <p>Woman</p>
                    </div>
                    <div className='artist'>
                    <p>Omah Lay</p>
                    </div>
                    <div className='duration'>
                    <p>2:48</p>
                    </div>
                    <PlayCircleOutline className='play'/>
                  </div>
                </li>
              </ol>
              </div> 
              
    </div>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Trending

        

