import React from 'react'
//import emailjs from '@emailjs/browser';

import '../css/Contact.css';

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
link.integrity = 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==';
link.crossOrigin = 'anonymous';
link.referrerPolicy = 'no-referrer';

export const Contact = () => {
    //   const form = useRef();

    //   const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //       .sendForm('service_kh9uygv', 'template_8xgp5xa', form.current, {
    //         publicKey: 'jioONWoflXxxBwxuU',
    //       })
    //       .then(
    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };

    return (
        // <form className="container" >
        //   <div className="contact-box">
        //     <div className="right">
        //       <h1>Contact Form</h1>
        //       <label htmlFor="name">Username</label>
        //       <input type="text" name="from_name" id="name" className="field" placeholder="Enter your username" />
        //       <small className="error"></small>

        //       <label htmlFor="email">Email</label>
        //       <input type="email" name="from_email" id="email" className="field" placeholder="Enter your e-mail" />
        //       <small className="error"></small>

        //       <label htmlFor="subject">Subject</label>
        //       <input type="text" name="subject" id="subject" className="field" placeholder="Enter subject" />
        //       <small className="error"></small>

        //       <label htmlFor="message">Message</label>
        //       <textarea id="message" name="message" className="field" placeholder="Enter your message"></textarea>
        //       <small className="error"></small>

        //       <div className="center">
        //         <input id="btn" type="submit" name="contact" value="SEND MESSAGE" />
        //       </div>
        //     </div>

        //     <div className="left">
        //       <h1>Contact Info</h1>
        //       <ul>
        //         <li>Miroslav Kaštier</li>
        //         <li>kastierm45@gmail.com <br /> +421 904 021 045 <br /> <br /><br /><br /><br /></li>
        //         <li>Masarykova Univerzita <br /> Fakulta Informatiky</li>
        //         <li>Botanická 68A, 602 00 <br /> Královo Pole-Ponava, Brno</li>
        //       </ul>

        //       <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100008982675113"><img className="net fb" src="https://image.similarpng.com/very-thumbnail/2020/04/Beautiful-Facebook-logo-icon-social-media-png.png" alt="" /></a>
        //       <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/miroslavkastier/?hl=sk"><img className="net ig" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt="" /></a>
        //       <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/miroslav-ka%C5%A1tier-788a92310/"><img className="net" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" alt="" /></a>

        //     </div>
        //   </div>
        // </form>

        <div class="container">
            <div class="contact-box">
                <div class="left">
                    <h2>Contact Form</h2>
                    <p>Username</p>
                    <input type="text" class="field" placeholder="Enter your name" />
                    <p>E-mail</p>
                    <input type="email" class="field" placeholder="Enter your email" />
                    <p>Subject</p>
                    <input type="text" class="field" placeholder="Enter subject" />
                    <p>Username</p>
                    <textarea class="field area" placeholder="Enter message" ></textarea>
                    <button class="btn upload">
                        <span>
                            <i class="fa-solid fa-paperclip"></i>Add attachment
                        </span>
                        <input type="file" name="attachment" />
                    </button>
                    <button class="btn">Send</button>
                </div>

                <div class="right">
                    <h2>Contact Info</h2>
                    <ul>
                        <li>Miroslav Kaštier</li>
                        <li>kastierm45@gmail.com <br /> +421 904 021 045 </li>
                        <li>Masarykova Univerzita <br /> Fakulta Informatiky</li>
                        <li>Botanická 68A, 602 00 <br /> Královo Pole-Ponava, Brno</li>
                    </ul>

                    <div class="network">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100008982675113"><img className="net fb" src="https://image.similarpng.com/very-thumbnail/2020/04/Beautiful-Facebook-logo-icon-social-media-png.png" alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/miroslavkastier/?hl=sk"><img className="net ig" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt="" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/miroslav-ka%C5%A1tier-788a92310/"><img className="net" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};