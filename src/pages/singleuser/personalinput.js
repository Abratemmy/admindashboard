import React from 'react';
import {BiMessageSquareAdd} from "react-icons/bi";

function Personalinput() {
  return (
    <div className='settings'>
        <form>
            <div className="row">
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='fieldinput-container'>
                        <label>Other Name </label>
                        <div className='fieldinput'>
                            <BiMessageSquareAdd className='icon' />
                            <input type="text" className='input' />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='fieldinput-container'>
                        <label>Gender </label>
                        <div className='fieldinput'>
                            <BiMessageSquareAdd className='icon' />
                            <input type="text" className='input' />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='fieldinput-container'>
                        <label>Nationality</label>
                        <div className='fieldinput'>
                            <BiMessageSquareAdd className='icon' />
                            <input type="text" className='input' />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='fieldinput-container'>
                        <label>Date of Birth </label>
                        <div className='fieldinput'>
                            <BiMessageSquareAdd className='icon' />
                            <input type="text" className='input' />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='fieldinput-container'>
                        <label>State Of Origin </label>
                        <div className='fieldinput'>
                            <BiMessageSquareAdd className='icon' />
                            <input type="text" className='input' />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className='fieldinput-container'>
                        <label>City / Town </label>
                        <div className='fieldinput'>
                            <BiMessageSquareAdd className='icon' />
                            <input type="text" className='input' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Personalinput