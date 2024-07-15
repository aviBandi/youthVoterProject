import React from 'react';

import { db, doc, setDoc, firebase } from '../firebase';
import { getDoc, updateDoc } from 'firebase/firestore';

import NavHome from '../components/navHome';

import "../firebase";

const Register = () => {

    const incrementNumber = async () => {


        try {
            const docRef = doc(db, 'clicks', 'clicks');
            const value = await getDoc(docRef);
            const totalClicks = value.data();
            console.log(totalClicks.totalClicks);
            await updateDoc(docRef, {
                totalClicks: totalClicks.totalClicks + 1
            });
            console.log('Document successfully updated!');
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };


    return (
        <div className='overflow-auto h-full bg-gray-800'>
            <NavHome />

            <div className='flex items-center justify-center h-screen'>
                <button onClick={incrementNumber} >
                    <a href="https://mnvotes.sos.mn.gov/VoterRegistration/index" target="_blank">
                        <div className="flex items-center justify-center gap-x-6">
                            <div className="rounded-xl border-2 border-red-500 bg-blue-600 px-3.5 py-10 text-3xl md:text-7xl font-semibold text-white shadow-sm hover:bg-white hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all">
                                Register to Vote <span aria-hidden="true">→</span>
                            </div>
                        </div>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Register;
