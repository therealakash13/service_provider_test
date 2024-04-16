export const Home = () => {
    return (
        <>
          <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-image">
                        <img 
                            src="/images/home.png" 
                            alt="Welcome to Homepage"
                            width="400"
                            height="500"
                        />
                    </div>
                    <div className="hero-content">
                       <p>We are world's best IT Company.</p>
                       <h1>Welcome to Akash</h1>
                       <p>Are you ready to take your buisness to the next level with cutting-edge IT solutions? Look no further! At Akash, we specialize in providing innivative IT services and solutions tailored to meet all your needs.</p>
                       <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Contact Us</button>
                            </a>
                            <a href="/service">
                                <button className="btn secondary-btn">Learn More</button>
                            </a>
                        </div> 
                    </div>
                </div>
            </section>
          </main>

          <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2>50+</h2>
                    <p>Registered Companies</p>
                </div>

                <div className="div1">
                    <h2>10,000+</h2>
                    <p>Happy Clients</p>
                </div>

                <div className="div1">
                    <h2>500+</h2>
                    <p>Well Experienced Devs</p>
                </div>

                <div className="div1">
                    <h2>24/7</h2>
                    <p>Service</p>
                </div>
            </div>
          </section>

          <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                       <p>We are here to help you.</p>
                       <h1>Get Started Today</h1>
                       <p>Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and lets discuss how we can help your buisness to boom in this digital age.</p>
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
                            src="/images/design.png" 
                            alt="We are here to help."
                            width="400"
                            height="500"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};