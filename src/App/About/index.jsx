import React from 'react'
import './About.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const About = () => {
  return (
    <div className="p-3" style={{backgroundColor:'lightgray'}} > 
    <Header />
            <h1 className="pt-5 fw-bold">About US</h1>
            <div  className="row p-5">
            <div className="col-lg-6 my-5">
                <img className='rounded-3 img-fluid' src="https://img.freepik.com/free-photo/shot-high-rise-tall-building_181624-2214.jpg" alt="" />
            </div> 
            <div className="col-lg-6 my-5">
                <h2>Who We are ?</h2>
                <p> Established in 2023, Golden Management is full-service residential and commercial property management company servicing Nairobi, Kenya with an unwavering dedication toward the optimization of each property under management. With offices in Nairobi and Mombasa, Golden Management is able to meticulously manage client’s investments thoroughout all parts of Kenya ensuring each is operating at its highest and best use.

Diversifying further, Golden Management’s multidisciplinary team is unmatched in the industry. With both an in-house legal department and CPA’s on staff, our operation is able to avoid legal/tax issues at the outset and optimize revenue streams to their full potential. In the event legal issues do occur, our team can provide legal guidance and limit liability efficiently.


</p>
            </div>
            </div> 

            <div className="row p-5 ">
                <div className="col-lg-6 my-5">
                    <h2>People</h2>
                    <p> 
                    We believe intellectual capital is paramount to achieve superior results for our clients. Through diversity, professionalism and expertise, we have assembled some of the finest licensed property managers, leasing agents and support staff in the industry. Our people provide a solid foundation of intellectual capital on which to draw and are skilled at problem solving both on an individual basis and as a group. They are by far our most valuable asset. By harnessing this collective experience, we uncover solutions and implement strategies - designed to maximize returns on your investment.</p>
                </div>
                <div className="col-lg-6 my-5">
                     <img className='rounded-3 img-fluid' src="https://img.freepik.com/free-photo/modern-tall-glass-buildings-downtown_181624-47596.jpg" alt="" />
                </div>
            </div>
            <section id="team" class="team-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="site-heading text-center">
                        <h2>Our <span>Team</span></h2>
                        <h4>Meet our awesome and expert team members</h4>
                    </div>
                </div>
            </div>
                <div class="row team-items">
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Caleb Mokaya</h4>
                                    <p>
                                    Phd Holder with specialist on Property Management.
                                    </p>
                                    <div class="social">
                                        <ul>
                                            <li class="twitter">
                                                <a href="icon"><i class="fab fa-twitter"></i></a>
                                            </li>
                                            <li class="pinterest">
                                                <a href="icon"><i class="fab fa-pinterest"></i></a>
                                            </li>
                                            <li class="instagram">
                                                <a href="icon"><i class="fab fa-instagram"></i></a>
                                            </li>
                                            <li class="vimeo">
                                                <a href="icon"><i class="fab fa-vimeo-v"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="icon"><i class="fas fa-envelope-open"></i></a>
                                </span>
                                <h4>Caleb Mokaya</h4>
                                <span>Principal / Co-founder</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Lorem Ipsum</h4>
                                    <p>
                                          kING.
                                    </p>
                                    <div class="social">
                                        <ul>
                                            <li class="twitter">
                                                <a href="icon"><i class="fab fa-twitter"></i></a>
                                            </li>
                                            <li class="pinterest">
                                                <a href="icon"><i class="fab fa-pinterest"></i></a>
                                            </li>
                                            <li class="instagram">
                                                <a href="icon"><i class="fab fa-instagram"></i></a>
                                            </li>
                                            <li class="vimeo">
                                                <a href="icon"><i class="fab fa-vimeo-v"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="icon"><i class="fas fa-envelope-open"></i></a>
                                </span>
                                <h4>Lorem Ipsum</h4>
                                <span>App Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Lorem Ipsum</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <div class="social">
                                        <ul>
                                            <li class="twitter">
                                                <a href="icon"><i class="fab fa-twitter"></i></a>
                                            </li>
                                            <li class="pinterest">
                                                <a href="icon"><i class="fab fa-pinterest"></i></a>
                                            </li>
                                            <li class="instagram">
                                                <a href="icon"><i class="fab fa-instagram"></i></a>
                                            </li>
                                            <li class="vimeo">
                                                <a href="icon"><i class="fab fa-vimeo-v"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="icon"><i class="fas fa-envelope-open"></i></a>
                                </span>
                                <h4>Lorem Ipsum</h4>
                                <span>Web designer</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    <Footer />
        </div>
        
  )
}

export default About