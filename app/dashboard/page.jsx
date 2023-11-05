import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../_lib/auth';
const page = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>page</div>
  )
}

export default page