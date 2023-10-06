import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const toggleTheme = () => {
        const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light'
        setTheme(targetTheme)
    }

    const sliderStyle = {
        width: '70px',
        height: '25px',
        borderRadius: '12.5px',
        backgroundColor: resolvedTheme === 'dark' ? '#333' : '#ddd',
        position: 'relative' as 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }

    const knobStyle = {
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        backgroundColor: resolvedTheme === 'dark' ? '#ddd' : '#333',
        position: 'absolute' as 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        left: resolvedTheme === 'dark' ? '0' : '45px',
        transition: 'left 0.3s, background-color 0.3s',
    }

    const textStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '100%',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        color: resolvedTheme === 'dark' ? '#333' : '#ddd',
    }

    return (
        <div
            style={{
                position: 'fixed',
                top: '2rem',
                right: '2rem',
                zIndex: 9999, // Ensure it's above other content
            }}
        >
            <div
                style={sliderStyle}
                onClick={toggleTheme}
                className="theme-slider"
                role="button"
                tabIndex={0}
            >
                {/* <div style={textStyle}>{resolvedTheme === 'dark' ? 'Dark' : 'Light'}</div> */}
                <div style={knobStyle} className="theme-knob"></div>
            </div>
        </div>
    )
}

export default ThemeToggle
