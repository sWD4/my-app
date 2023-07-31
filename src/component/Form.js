import React, { useState } from 'react'

function Form() {

    const [name,setname] = useState()
    const [email,setemail] = useState()
    const [password,setpassword] = useState()
    const [cpassword,setcpassword] = useState()
    function getData(e){
        // alert('hello')
        e.preventDefault()
        console.log(name,email,password,cpassword)
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <form onSubmit={getData}>
                            <div className='mb-3'>
                                <label>Name</label>
                                <input onChange={(e)=>setname(e.target.value)} type="text" className='form-control' placeholder='name' />
                            </div>

                            <div className='mb-3'>
                                <label>Email</label>
                                <input onChange={(e)=>setemail(e.target.value)} type="email" className='form-control' placeholder='email' />
                            </div>
                            <div className='mb-3'>
                                <label>Password</label>
                                <input onChange={(e)=>setpassword(e.target.value)} type="password" className='form-control' placeholder='password' />
                            </div>
                            <div className='mb-3'>
                                <label>Confirm Password</label>
                                <input onChange={(e)=>setcpassword(e.target.value)} type="password" className='form-control' placeholder='cpassword' />
                            </div>

                            <button type='submit' className='btn btn-primary'>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form