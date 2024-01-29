import React from 'react'

const AuthLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="flex items-center justify-center h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 via-sky-600 to-sky-800">
      {children}
    </div>
  );
}

export default AuthLayout