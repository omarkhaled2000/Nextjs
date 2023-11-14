import { notFound } from 'next/navigation'
import React from 'react'
//dynamic params false makes page go to error page if id is not found from staticparams
// export const dynamicParams=false;

//default is true

export const dynamicParams=true

export async function generateStaticParams(){
  const res = await fetch('http://localhost:4000/tickets/')
  const tickets = await res.json()

  return tickets.map((ticket)=>({id:ticket.id}))
}

async function getTicket(id){
 //next object is to update the res variable every 30 seconds as next normally caches fetch
 //it can also be set to 0 so the data is never cached
const res = await fetch(' http://localhost:4000/tickets/' + id,{next:{
 revalidate:30
}})
if(!res.ok){
  notFound()
}

return res.json()
}


export default async function TicketDetails({params}) {
 const ticket = await getTicket(params.id)
  return (
    <main>
     <nav>
      <h2>Ticket Details</h2>
     </nav>
     <div className='card'>
         <h3>{ticket.title}</h3>
         <small>Created by {ticket.user_email}</small>
         <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
       {ticket.priority}
      </div>
     </div>
    </main>
  )
}
