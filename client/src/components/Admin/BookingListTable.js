import React from 'react'
import { Container, Table } from 'react-bootstrap'
import '../style.css'

const BookingListTable = ({ data }) => {
    return (
        <Container className='p-3 TableList'>
            <Table bordered size="sm" className='text-white'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Model <i className='fa-solid fa-car'></i></th>
                        <th>BookingDate <i className="fa-solid fa-calendar-days"></i></th>
                        <th>BookingTime <i className="fa-solid fa-clock"></i></th>
                        <th>Amount <i className="fa-solid fa-indian-rupee-sign"></i></th>
                        <th>Minutes <i className="fa-solid fa-hourglass-start"></i></th>
                        <th>username <i className="fa-solid fa-user"></i></th>
                        <th>Email <i className="fa-solid fa-calendar-days"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((data, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{data.car.name}</td>
                            <td>{(data.createdAt).substr(0, 10)}</td>
                            <td>{(new Date(data.createdAt).toLocaleString()).substr(11, 8)}</td>
                            <td>{data.totalAmount}</td>
                            <td>{data.totalMins}</td>
                            <td>{data.user.username}</td>
                            <td>{data.user.email}</td>
                        </tr>))}
                </tbody>
            </Table>
        </Container>
    )
}

export default BookingListTable
