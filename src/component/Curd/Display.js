import React from 'react'
import { Link } from 'react-router-dom'
function Display() {
  return (
    <div className='container-fluid'>
        <table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <tr>
                       <td>1</td>
                       <td>shubham</td>
                       <td>shubham@gmail.com</td>
                       <td>shubham1234</td>
                       <td>
                        <Link>view</Link>
                        <Link>edit</Link>
                        <Link>delete</Link>
                       </td>

                    </tr>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default Display