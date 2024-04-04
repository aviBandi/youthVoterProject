import React from 'react';
import NavOther from '../components/navOther';
import Footer from '../components/footer';
import { TeamMembers } from '../data';
const Team = () => {

  return (
    <div className='bg-blue-50 overflow-auto '>
      <NavOther />
      <div className="container my-24 mx-auto px-8 lg:px-0 max-w-4xl">
        <section className="mb-32 ">
          <div className='my-32 '>
            <div className='flex items-center'>
              <h2 className="text-3xl font-bold text-blue-500">
                Meet the Team
              </h2>
              <hr className="h-0.5 mt-2 rounded-2xl font-bold bg-black flex-1 ml-4"></hr>

            </div>
            <h3 className='mt-7 text-gray-700 font-semibold text-lg'>
              Meet the team behind The Youth Voter Project. We are a group of passionate individuals who are dedicated to connecting youth to democracy.
            </h3>
          </div>

          <div className="grid gap-x-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-x-12">
            {TeamMembers.map((member, index) => (
              <div key={index} className="w-128 pb-32">
                <div className="block h-full rounded-lgbg rounded-xl bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">
                      <img
                        src={member.imageLink}
                        className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-bold text-blue-300">{member.name}</h5>
                    <p className="mb-6 text-white">{member.title}</p>
                    <ul className="mx-auto flex list-inside justify-left">
                      <a href={member.linkedinLink} className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-red-400"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>

                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
};

export default Team;


