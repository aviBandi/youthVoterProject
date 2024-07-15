import React from 'react';

import { db, doc, setDoc, firebase } from '../firebase';
import { getDoc, updateDoc } from 'firebase/firestore';

import NavHome from '../components/navHome';

import "../firebase";

const Register = () => {

    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

    const incrementNumber = async () => {


        try {
            // const docTotal = doc(db, 'clicks', 'totalClicks');
            // const value = await getDoc(docTotal);
            // const totalClicks = value.data();
            // console.log(getCurrentDate());
            // await updateDoc(docTotal, {
            //     totalClicks: totalClicks.totalClicks + 1
            // });
            // console.log('Document successfully updated!');


            const docTotal = doc(db, 'clicks', 'totalClicks');
            const docRef = doc(db, 'clicks', getCurrentDate());

            const docSnapDay = await getDoc(docRef);
            const docSnapTotal = await getDoc(docTotal);

            if (docSnapDay.exists()) {
                const data = docSnapDay.data();
                await updateDoc(docRef, {
                    totalClicks: data.totalClicks + 1
                });
            } else {
                await setDoc(docRef, {
                    totalClicks: 1
                });
            }

            await updateDoc(docTotal, {
                totalClicks: docSnapTotal.data().totalClicks + 1
            });


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
