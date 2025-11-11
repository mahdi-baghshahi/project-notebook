import React from 'react'
import styles from './SearchNavBar.module.css'
import { useState } from 'react';
import Inputd from '../Inputd';
import { Cheveron_left } from '../../Icons/Icons';

export default function SearchNavBar() {
   const [searchTerm, setSearchTerm] = useState('');


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);

    };
    

    return (
        <nav  >
            <Inputd 
                placeholdertext="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ 
                    flex: 1 , width:'292px' , height:'36px'
                }}
            />
        </nav>
    );
}
