import { styled } from '@stitches/react'
import React, { useState } from 'react'

const DownloadForm = (props: any) => {
    // Create a state for the selected file type, default to 'png'
    const [selectedFileType, setSelectedFileType] = useState('png')

    const handleDownload = () => {
        // Format prompt for file name
        let formatPrompt = 'image'
        // Check if prompt is not empty
        if (props.prompt.trim() !== '') {
            // Remove extra spaces and replace spaces with underscores
            formatPrompt = props.prompt
                .trim()
                .replace(/\s+/g, ' ')
                .replace(/ /g, '_')
        }
        // Create a temporary anchor element
        const anchor = document.createElement('a')
        anchor.href = props.imgSource
        // Set the file name based on the search query, default to 'image.png'
        anchor.download = `${formatPrompt}.${selectedFileType}`
        anchor.style.display = 'none'

        // Add the anchor element to the DOM and trigger the download
        document.body.appendChild(anchor)
        anchor.click()

        // Remove the anchor element from the DOM
        document.body.removeChild(anchor)
    }
    return (
        <div>
            <StyledSelect
                onChange={e => setSelectedFileType(e.target.value)}
                value={selectedFileType}
            >
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
                <option value="gif">GIF</option>
                {/* Add more file types as needed */}
            </StyledSelect>
            <DownloadButton onClick={handleDownload}>Download</DownloadButton>
        </div>
    )
}

export default DownloadForm

const DownloadButton = styled('button', {
    all: 'unset',
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 15px',
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 500,
    height: 35,
    width: '100%',

    '&:disabled': {
        opacity: 0.5,
    },
    backgroundColor: '$yellow200',
    color: 'white',
    boxShadow: `0 2px 10px $gray400`,
    '&:not(:disabled):hover': { backgroundColor: '$yellow400' },
    '&:not(:disabled):focus': { boxShadow: `0 0 0 2px black` },
})

const StyledSelect = styled('select', {
    width: '10rem',
    padding: '10px',
    float: 'right',
    margin: '0.5rem 0',
    border: '1px solid $gray600',
    borderRadius: '4px',
    backgroundColor: '$gray400',
    fontSize: '1rem',
    outline: 'none',
    cursor: 'pointer',
    // Remove default OS styles
    appearance: 'none',
})
