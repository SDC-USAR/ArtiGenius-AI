import Head from 'next/head';
import { styled } from '../stitches.config';
import { PromptForm } from '../components/prompt-form';
import { useState } from 'react';
import { Output } from '../components/output';
import { darkTheme } from '../stitches.config';
import Logo from '../components/logo';
import ThemeToggle from '../components/button';

const Box = styled('div', {});

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
});

const LogoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
  marginTop: 'auto',
});

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
});

const PageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  position: 'relative',
});

const LogoText = styled('h2', {
  fontFamily: 'Poppins, sans-serif',
  fontSize: '50px',
  fontWeight: 'bold',
  color: darkTheme ? '$white' : '$loContrast',
  margin: '0',
});

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [output, setOutput] = useState<string | null>(null);

  const handleStartGeneration = async (prompt: string) => {
    if (typeof prompt !== 'string') {
      alert('Invalid prompt');
      return;
    }

    setOutput(null);
    setIsGenerating(true);

    try {
      const response = await generateImage(prompt);
      const blob: Blob = await response.blob();
      setOutput(URL.createObjectURL(blob));
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateImage = async (prompt: string) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append(
      'Authorization',
      `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`
    );

    const response = await fetch(
      'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5',
      {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
          inputs: prompt,
        }),
        redirect: 'follow',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to generate image');
    }

    return response;
  };

  return (
    <PageContainer>
      <ThemeToggle />
      <LogoWrapper>
        <Logo />
        <LogoText>ArtiGenius-AI</LogoText>
      </LogoWrapper>
      <Box css={{ paddingY: '$6' }}>
        <Head>
          <title>ArtiGenius-AI</title>
        </Head>
        <Container size={{ '@initial': '1', '@bp1': '2' }}>
          <Text
            as="h6"
            css={{
              color: darkTheme ? '$white' : '$loContrast',
              fontSize: '20px',
            }}
          >
            Generate lifelike images from your text prompts with precision and realism.
          </Text>
          <PromptForm onSubmit={handleStartGeneration} isGenerating={isGenerating} />
          <Output>{output && <img src={output} alt="Generated Image" />}</Output>
        </Container>
      </Box>
    </PageContainer>
  );
}
