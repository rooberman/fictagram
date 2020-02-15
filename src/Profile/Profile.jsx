import React, { useEffect, useState } from 'react'
import useApiCall from '../common/hooks/useApiCall'

export default function Profile() {

    const [info, setInfo] = useApiCall('http://www.mocky.io/v2/5db34985300000650057b5e8', {})

    return (
        <div>
            <div>username: {info.username}</div>
            <div>email: {info.email}</div>
        </div>
    )
}
