import { Button } from '@/components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PasswordChange: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 px-5 py-2 border border-border rounded-rad">
      <div className="py-3 border-b border-border">
        <h1 className="font-bold text-xl">Security</h1>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-muted">Password</p>
          <p>********</p>
        </div>
        <div>
          <Button
            variant='default'
            size='lg'
            onClick={() => navigate('/auth/resetpassword')}
            className='text-white'
          >
            Change Password
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PasswordChange