import React from 'react';
import { HiOutlineCalculator } from 'react-icons/hi';
import { BiCalendar } from 'react-icons/bi';
import { GiNuclearWaste } from 'react-icons/gi';
import { RiRecycleLine } from 'react-icons/ri';


const FeatureOne = () => {
    return (
        <section className="feature-one">
            <div className="container">
                <div className="feature-one__inner">
                    <ul className="list-unstyled feature-one__list">
                        <li className="feature-one__single wow fadeInUp" data-wow-delay="100ms">
                            <div className="feature-one__icon">
                                <span className="icon-budget"><HiOutlineCalculator/></span>
                            </div>
                            <h3 className="feature-one__title "><a href="about.html">You Estimate <br/> Load Size</a></h3>
                        </li>
                        <li className="feature-one__single wow fadeInUp" data-wow-delay="200ms">
                            <div className="feature-one__icon">
                                <span className="icon-calendar"><BiCalendar/></span>
                            </div>
                            <h3 className="feature-one__title "><a href="about.html">You Choose <br/> A Time</a></h3>
                        </li>
                        <li className="feature-one__single wow fadeInUp" data-wow-delay="300ms">
                            <div className="feature-one__icon">
                                <span className="icon-garbage"><GiNuclearWaste/></span>
                            </div>
                            <h3 className="feature-one__title "><a href="about.html">We Pick <br/> & Clean up</a></h3>
                        </li>
                        <li className="feature-one__single wow fadeInUp" data-wow-delay="400ms">
                            <div className="feature-one__icon">
                                <span className="icon-garbage-truck"><RiRecycleLine/></span>
                            </div>
                            <h3 className="feature-one__title "><a href="about.html">We Responsibily <br/> dispose</a></h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FeatureOne;