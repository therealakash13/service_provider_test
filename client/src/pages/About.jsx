import { useAuth } from "../store/auth";

export const About = () => {
    const { user } = useAuth();  
    return <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                       <p>Welcome { user.username }</p>
                       <h1>Why Choose Us</h1>
                       <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>
                       <p>Customization: We understand that every buisness is unique. That's why we create solutions that are tailored to your specific needs and goals.</p>
                       <p>Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address your IT concerns.</p>
                       <p>Affordability: We offer competitive pricing without compromising on the quality of our services.</p>
                       <p>Reliability: count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.</p>
                       <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Contact Us</button>
                            </a>
                            <a href="/service">
                                <button className="btn secondary-btn">Learn More</button>
                            </a>
                        </div> 
                    </div>

                    <div className="hero-image">
                        <img 
                            src="/images/about.png" 
                            alt="About Us."
                            width="500"
                            height="500"
                        />
                    </div>
                </div>
            </section>

            <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>Companies Registered</p>
                </div>

                <div className="div1">
                    <h2>150+</h2>
                    <p>Projects Done</p>
                </div>

                <div className="div1">
                    <h2>250+</h2>
                    <p>Happy Clients</p>
                </div>

                <div className="div1">
                    <h2>650K+</h2>
                    <p>Youtube Subscribers</p>
                </div>
            </div>
          </section>
        </main>
    </>
};