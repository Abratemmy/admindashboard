import React,{useState, useEffect} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Newsidebar from '../../components/newSidebar/newsidebar';
import "./singleuser.css";
import { NavLink, useParams } from 'react-router-dom';
import person from "../../assets/person.jpg"
import {BiMessageSquareAdd} from "react-icons/bi";
import {BsArrowLeft} from "react-icons/bs"
import Personalinput from './personalinput';

function Singleuser() {
    const {id} = useParams();
    const [singleuser, setSingleuser] = useState([]);

    useEffect(()=>{
        const getTemplate = async () => {
            let response = await fetch(`https://wp.mynewdawn/${id}`);
            response= await response.json();
            console.log(response)
            setSingleuser(response);
        }
        getTemplate();
   }, [id])


    //    tabs class
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) =>{
        setToggleState(index);
    }

  return (
    <div className='single'>
        <Newsidebar />
        <div className='singleContainer'>
            <Navbar />
            <div className='top'>
                <div className='upper'>
                    <div className='left'>
                        <img src={person} alt="" />
                        <div className='text'><p>Hamid Clinton</p><span>Approved KYc</span></div>
                    </div>
                    <div className='right'>
                        <NavLink to="/users" className="navlink"><BsArrowLeft /> <span>Back to the previous pages</span></NavLink>
                        <button>change avatar</button>
                    </div>
                </div>

                <div className='middle'>
                    <div className='row  gy-4'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="singledisplay">
                            <BiMessageSquareAdd className="icon" />
                            <div className='singlecontent'>
                                <div className='title'>First Name</div>
                                <div className='text'>Hamid</div>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="singledisplay">
                            <BiMessageSquareAdd className="icon" />
                            <div className='singlecontent'>
                                <div className='title'>Last Name</div>
                                <div className='text'>Clinton</div>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="singledisplay">
                            <BiMessageSquareAdd className="icon" />
                            <div className='singlecontent'>
                                <div className='title'>Email Address</div>
                                <div className='text'>hamid04@gmail.com</div>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="singledisplay">
                            <BiMessageSquareAdd className="icon" />
                            <div className='singlecontent'>
                                <div className='title'>Mobile Number</div>
                                <div className='text'>+2347590040434</div>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="singledisplay">
                            <BiMessageSquareAdd className="icon" />
                            <div className='singlecontent'>
                                <div className='title'>Account Type</div>
                                <div className='text'>Individual Applicant</div>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="singledisplay">
                            <BiMessageSquareAdd className="icon" />
                            <div className='singlecontent'>
                                <div className='title'>Date</div>
                                <div className='text'>30th october 2022</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom'>
                <div className='title'>KYC Settings</div>

                <div className="bloc-tabs">
                    <div className={toggleState ===1 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}>Personal Details</div>
                    <div className={toggleState ===2 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}>Minor Details</div>
                    <div className={toggleState ===3 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(3)}>Means of Identification</div>
                    <div className={toggleState ===4 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(4)}>Next of Kin</div>
                    <div className={toggleState ===5 ?"tabs active-tabs" : "tabs"} onClick={()=>toggleTab(5)}>Bank Account Details</div>
                </div>

                <div className="content-tabs">
                    <div className={toggleState ===1 ?"content active-content" : "content"}>
                        <Personalinput />
                    </div>

                    <div className={toggleState === 2 ?"content active-content" : "content"}>
                    <Personalinput />
                    </div>
                    <div className={toggleState === 3 ?"content active-content" : "content"}>
                    <Personalinput />
                    </div>
                    <div className={toggleState === 4 ?"content active-content" : "content"}>
                    <Personalinput />
                    </div>
                    <div className={toggleState === 5 ?"content active-content" : "content"}>
                    <Personalinput />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Singleuser