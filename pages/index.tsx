import Head from 'next/head'
import { styled } from '../stitches.config'
import { PromptForm } from '../components/prompt-form'
import { useState } from 'react'
import { Output } from '../components/output'

const Box = styled('div', {})

const Text = styled('p', {
    fontFamily: '$system',
    color: '$hiContrast',
})

const Container = styled('div', {
    marginX: 'auto',
    paddingX: '$3',

    variants: {
        size: {
            1: {
                maxWidth: '300px',
            },
            2: {
                maxWidth: '585px',
            },
            3: {
                maxWidth: '865px',
            },
        },
    },
})

export default function Home() {
    const [isGenerating, setIsGenerating] = useState(false)
    const [output, setOutput] = useState<string | null>(null)

    const handleStartGeneration = async (prompt: string) => {
        if (typeof prompt != 'string') {
            alert('Invalid prompt')
            return
        }

        setOutput(null)
        setIsGenerating(true)

        try {
            const response = await generateImage(prompt)
            const blob: Blob = await response.blob()
            setOutput(URL.createObjectURL(blob))
        } catch (error) {
            console.error(error)
        } finally {
            setIsGenerating(false)
        }
    }

    const generateImage = async (prompt: string) => {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        myHeaders.append(
            'Authorization',
            `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
        )

        const response = await fetch(
            'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5',
            {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify({
                    inputs: prompt,
                }),
                redirect: 'follow',
            },
        )

        if (!response.ok) {
            throw new Error('Failed to generate image')
        }

        return response
    }

    const downloadImageJpg = () => {
        if (!output) return;
        const a = document.createElement("a");
        a.href = output;
        a.download = `${output}.jpg`;
        a.click();
    };

    const downloadImagePng = () => {
        if (!output) return;
        const a = document.createElement("a");
        a.href = output;
        a.download = `${output}.png`;
        a.click();
    };

    const Button = styled("button", {
        all: "unset",
        boxSizing: "border-box",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        padding: "0 15px",
        fontSize: 15,
        lineHeight: 1,
        fontWeight: 500,
        height: 35,
        width: "100%",
        backgroundColor: "$purple500",
        color: "white",
    });

    return (
        <Box css={{ paddingY: '$6' }}>
            <Head>
                <title>Image Generation AI</title>
            </Head>
            <Container size={{ '@initial': '1', '@bp1': '2' }}>
                <Text as="h1">
                    Create realistic images and art from a description in
                    natural language
                </Text>
                <PromptForm
                    onSubmit={handleStartGeneration}
                    isGenerating={isGenerating}
                />
                <Output>
                    {
                        output && (<>
                            <img src={output} alt="Generated Image" />
                            <Button css={{ marginTop: 10 }} onClick={downloadImageJpg}>
                                Download Image in JPG
                            </Button>
                            <Button css={{ marginTop: 10 }} onClick={downloadImagePng}>
                                Download Image in PNG
                            </Button>
                        </>)
                    }
                </Output>
            </Container>
        </Box>
    )
}
