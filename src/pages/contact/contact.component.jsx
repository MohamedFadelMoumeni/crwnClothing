import React from 'react';

import './contact.styles.css';

const Contact = () => (
    <div className="contact">
        <div className="card">
           <img src="https://scontent.frak1-2.fna.fbcdn.net/v/t1.0-9/127449344_721590528484665_744569611938252770_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE8hYPo73k2aYZPedmHH2JBwyKIHEAMH9jDIogcQAwf2Oj0dd6YgzmGuA7ehZ7VSyjsumBamX6Nbzk18B_LyF_E&_nc_ohc=5En7sE_exC8AX_tWAEl&_nc_ht=scontent.frak1-2.fna&oh=68aeeacb56d3d66b7f8ca15dbd632fa7&oe=5FEA7997" alt=""/>
            <div className="details">
            <h1>Mohamed Fadel Moumeni</h1>
            <p>My name is Mohamed Fadel Moumeni, I'm a Moroccan <strong>self thought </strong> software developer.<br></br>Front-end developer with primary focus on JS
</p>
              <span className="contact_title"> Contact me :  </span>
              <div className="list">
                 <h3 className="fcebook">Facebook : <a href="https://bit.ly/3lf9o0t" target="_blank">https://bit.ly/3lf9o0t</a></h3>
                 <h3 className="fcebook">LinkedIn : <a href="https://bit.ly/3qcPTt6" target="_blank">https://bit.ly/3qcPTt6</a></h3>
                 <h3 className="fcebook">Github : <a href="https://bit.ly/36jXTjO" target="_blank">https://bit.ly/36jXTjO</a></h3>
                 <h3 className="fcebook">Portfolio : <a href="https://bit.ly/33raD6m" target="_blank">https://bit.ly/33raD6m</a></h3>
              </div>
              <p className="last">For more projects please visit my Github .</p>

            </div>
        </div>
    </div>
)
export default Contact;