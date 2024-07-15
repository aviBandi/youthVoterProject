import React from 'react';

const Register = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <button>
            <a href="https://mnvotes.sos.mn.gov/VoterRegistration/index" target="_blank">
                <div className="flex items-center justify-center gap-x-6">
                    <div className="rounded-md border-2 border-blue-600 bg-blue-600 px-3.5 py-10 sm:4xl md:text-7xl font-semibold text-white shadow-sm hover:bg-white hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all">
                        Register to Vote <span aria-hidden="true">→</span>
                    </div>
                </div>
            </a>
        </button>
    </div>
  )
}

export default Register;
