import { useState, useEffect } from 'react'

export function useLanguageState( initialState: any) {
    const [language, setLanguage] = useState() ;

    useEffect(()=> {
        localStorage.setItem('language', JSON.stringify(language))
    }, [language, initialState])

    return [language, setLanguage]
}