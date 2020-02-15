import { useState, useEffect } from 'react'

export default function useApiCall(url, defaultValue) {
    const [data, setData] = useState(defaultValue)

    const fetchPosts = async (url) => {
        let response = await fetch(url)
        let data = await response.json()
        if (data.results) {
            setData(data.results)
        } else {
            setData(data)
        }
    }

    useEffect(() => {
        fetchPosts(url)
    }, [])

    return [data, setData]
}