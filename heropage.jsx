 
import './HeroPage.css'; 
import album from './assets/album.png';
import muse from './assets/muse.jpg'
import closer from './assets/closer.png'
 


const HeroPage = () => {
    return (
        <div className="hero">
            <div className="retangulo">
            <div className='slider'>

                <div className='sliders'>
                    <input type="radio" name='radio-btn' id='radio1' />
                    <input type="radio" name='radio-btn' id='radio2' />
                    <input type="radio" name='radio-btn' id='radio3' />

                    <div className="slide first">
                        <img src={muse} />
                    </div>
                    <div className="slide first">
                        <img src={album} />
                    </div>
                    <div className="slide first">
                        <img src={closer} />
                    </div>

             <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
             </div>

                </div>

            <div className="manual-navigation">
                <label htmlFor="radio1" className='manual-btn'></label>
                <label htmlFor="radio2" className='manual-btn'></label>
                <label htmlFor="radio3" className='manual-btn'></label>
            </div>

            </div>
 
           
            
            </div>
        </div>
    );
}

export default HeroPage;
