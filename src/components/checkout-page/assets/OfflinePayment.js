import { useTheme } from '@mui/material'
import React from 'react'

const OfflinePayment = () => {
    const theme = useTheme();
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.48438 3.9375C3.75917 3.9375 3.06367 4.22559 2.55088 4.73838C2.03809 5.25117 1.75 5.94667 1.75 6.67188V8.09375H19.25V6.67188C19.25 5.94667 18.9619 5.25117 18.4491 4.73838C17.9363 4.22559 17.2408 3.9375 16.5156 3.9375H4.48438ZM1.75 14.3281V9.1875H19.25V14.3281C19.25 15.0533 18.9619 15.7488 18.4491 16.2616C17.9363 16.7744 17.2408 17.0625 16.5156 17.0625H4.48438C3.75917 17.0625 3.06367 16.7744 2.55088 16.2616C2.03809 15.7488 1.75 15.0533 1.75 14.3281ZM13.6719 12.9062C13.5268 12.9062 13.3877 12.9639 13.2852 13.0664C13.1826 13.169 13.125 13.3081 13.125 13.4531C13.125 13.5982 13.1826 13.7373 13.2852 13.8398C13.3877 13.9424 13.5268 14 13.6719 14H16.0781C16.2232 14 16.3623 13.9424 16.4648 13.8398C16.5674 13.7373 16.625 13.5982 16.625 13.4531C16.625 13.3081 16.5674 13.169 16.4648 13.0664C16.3623 12.9639 16.2232 12.9062 16.0781 12.9062H13.6719Z" fill={theme.palette.primary.main} />
        </svg>


    )
}

export default OfflinePayment;