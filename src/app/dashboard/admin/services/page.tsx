import { getAllEmailLogs, getAllWhatsAppLogs } from '@/app/actions/admin';
import EmailLogTable from '@/components/blocks/admin/EmailTable';
import WhatsAppLogTable from '@/components/blocks/admin/WhatsAppTable';
import React from 'react'

async function page() {

   const emails = await getAllEmailLogs();
    const whatsapp = await getAllWhatsAppLogs();
  return (
     <div className="total-emails-whatsapp ">
        <p>Emails</p>
        <EmailLogTable emails={emails} />
        <p>WhatsApp</p>
        <WhatsAppLogTable whatsapp={whatsapp} />
      </div>
  )
}

export default page