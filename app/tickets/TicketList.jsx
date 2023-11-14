import Link from 'next/link'
import React from 'react'

async function getTickets(){
 //next object is to update the res variable every 30 seconds as next normally caches fetch
 //it can also be set to 0 so the data is never cached
const res = await fetch(' http://localhost:4000/tickets',{next:{
 revalidate:30
}})
const data= await res.json()
return data
}

export default async function TicketList(params){
  console.log(params)
  //have to add await
 const tickets = await getTickets()
 console.log()
  return (
   <>
   {tickets?.map((ticket)=>(
    <div key={ticket.id} className='card my-5'>
      <Link href={`/tickets/${ticket.id}`}>
      <h3>{ticket.title}</h3>
      <p>{ticket.body.slice(0,200)}...</p>
      <div className={`pill ${ticket.priority}`}>
       {ticket.priority}
      </div>
      </Link>
    </div>
   ))}
   {tickets.length===0 &&(
    <p className='text-center'>There are no tickets available right now</p>
   )}
   </>
  )
}
