import React, { Component } from 'react';
import './src/css/Contact.css'; 
class Contact extends Component {
    render() {
        return (
            <div className="beta-home-contactMain">
                <div className="beta-home-contactus">
                    <h1 className="beta-home-top">Contact</h1>
                    <table className="beta-home-contact-table">
                        <tbody>
                            <tr>
                                <td>Suyash Singh </td>
                                <td>: +91-8417954805</td> 
                            </tr>
                            <tr >
                                <td>(Convener)  </td>
                                <td>&nbsp;&nbsp; suyash.thomso@gmail.com</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>

                            <tr>
                                <td>Abhishek Kumar  </td>
                                <td>: +91-7409247817 </td>
                            </tr>
                            <tr>
                                <td>(Co-Convener)   </td>
                                <td>&nbsp;&nbsp; abhishek98.thomso@gmail.com</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr>
                                <td>Samarth Gubrele </td>
                                <td>: +91-8349146260 </td>
                            </tr>
                            <tr>
                                <td>(Co-Convener)   </td>
                                <td>&nbsp;&nbsp; samarth.thomso@gmail.com</td>
                            </tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr>
                                <td>Shubham Jaiswal </td>
                                <td>: +91-9693482762 </td>
                            </tr>
                            <tr>
                                <td>(Public Relations)</td>
                                <td>&nbsp;&nbsp; shubham.thomso@gmail.com</td>
                            </tr>
                        </tbody> 
                    </table>
                </div>
                <div className="beta-home-address" style={{ lineHeight: '2.5em' }}>
                    <h1 className="beta-home-top">Address</h1>
                    Thomso Office<br/>
                    Multi Activity trueCenter,<br/>
                    Indian Institute of Technology, Roorkee<br/>
                <div className="email"> <h1>Email </h1>
                    thomso@iitr.ac.in
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;
