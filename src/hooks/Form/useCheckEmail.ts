// import axios from 'axios';
// import {useEffect, useState} from 'react';
//
// const useCheckEmail = (email) => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         const checkEmail = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get(`/api/check-email?email=${email}`);
//                 setError(null);
//             } catch (err) {
//                 if (axios.isAxiosError(err)) {
//                     setError(err.response?.data.message || 'Unknown error');
//                 } else {
//                     setError(err.message);
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         checkEmail();
//     }, [email]);
//
//     return {loading, error};
// };