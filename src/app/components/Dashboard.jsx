import React from 'react';
import logo from '../assets/dashboard.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { playfair } from './fonts';

const Dashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`bg-white flex flex-row items-center justify-center h-screen border border-red-700 p-10`}
        >
            <div className='w-full text-center mb-10'>
                <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Image src={logo} alt='Dashboard Image' className='h-[70vh] w-[90vh] mx-auto' />
                </motion.div>
            </div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className={`text-3xl my-auto text-black text-center w-full ${playfair.className}`}
            >
                <h1 className='text-4xl font-bold mb-4'>Find Your Dream Job</h1>
                <p className='text-2xl font-medium mb-2'>"If opportunity doesn't knock, build a door."</p>
                <p className='text-2xl font-medium'>"Believe you can and you're halfway there."</p>
            </motion.div>
        </motion.div>
    );
};

export default Dashboard;
