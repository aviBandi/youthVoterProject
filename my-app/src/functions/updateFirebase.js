import "../firebase";

import { db, doc, setDoc, firebase } from '../firebase';
import { getDoc, updateDoc } from 'firebase/firestore';

const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

const incrementNumber = async () => {


    try {
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


export default incrementNumber;