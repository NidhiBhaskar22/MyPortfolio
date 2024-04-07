
import course from "../assets/img/course.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Courseworks = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="Coursework" id="Courseworks" style={{ marginBottom: '30px' }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="Coursework-bx wow zoomIn">
                        <h2 style={{ marginBottom: '30px' }}>Courseworks</h2>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme Coursework-slider">
                            <div className="item">
                                <img src={course} alt="Image" />
                                <h5>Data Structure and Algorithm</h5>
                            </div>
                            <div className="item">
                                <img src={course} alt="Image" />
                                <h5>Object Oriented Programming</h5>
                            </div>
                            <div className="item">
                                <img src={course} alt="Image" />
                                <h5>Database Management System</h5>
                            </div>
                            <div className="item">
                                <img src={course} alt="Image" />
                                <h5>Operating Systems</h5>
                            </div>
                            <div className="item">
                                <img src={course} alt="Image" />
                                <h5>Frontend Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}