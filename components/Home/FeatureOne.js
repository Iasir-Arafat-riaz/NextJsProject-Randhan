import React from 'react';


const FeatureOne = () => {
    return (
        <section className="feature-one">
            <div className="container">
                <div className="feature-one__inner">
                    <ul className="list-unstyled feature-one__list">
                        <li className="feature-one__single wow fadeInUp" data-wow-delay="100ms">
                            <div className="feature-one__icon">
                                <span className="icon-budget"></span>
                            </div>
                            <h3 className="feature-one__title "><a href="about.html">You Estimate <br/> Load Size</a></h3>
                        </li>
                        <li className="feature-one__single wow fadeInUp" data-wow-delay="200ms">
                            <div className="feature-one__icon">
                                <span className="icon-calendar"></span>
                            </div>
                            <h3 className="feature-one__title "><a href="about.html">You Choose <br/> a Time</a></h3>
                        </li>
                        <li className="feature-one__single wow fadeInUp" data-wow-delay="300ms">
                            <div className="feature-one__icon">
                                <span className="icon-garbage"></span>
                            </div>
                            <h3 className="feature-one__title "><a href="about.html">We Pick <br/> & Clean up</a></h3>
                        </li>
                        <li className="feature-one__single wow fadeInUp" data-wow-delay="400ms">
                            <div className="feature-one__icon">
                                <span className="icon-garbage-truck"></span>
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