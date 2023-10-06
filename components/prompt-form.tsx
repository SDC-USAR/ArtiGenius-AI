import React, { useState, useRef } from 'react';
import { useTheme } from 'next-themes';
import * as Form from '@radix-ui/react-form';
import { styled } from '@stitches/react';

const fontFamily = "'Poppins', sans-serif";

type Props = {
  onSubmit: (prompt: string) => void;
  isGenerating: boolean;
};

type ThemeVariants = 'dark' | 'light';

export const PromptForm: React.FC<Props> = ({ onSubmit, isGenerating }) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme: ThemeVariants = (theme || resolvedTheme || 'light') as ThemeVariants;

  const [randomPrompt, setRandomPrompt] = useState<string | null>(null);
  const promptInputRef = useRef<HTMLInputElement | null>(null);

  const handleSurpriseMeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    //An array of random prompts
    const randomPrompts = [
      'A beautiful sunset over the ocean',
      'A cozy cabin in the woods',
      'A futuristic cityscape',
      'A beautiful sunset over the ocean',
      'A cozy cabin in the woods',
      'A futuristic cityscape',
      'An enchanted forest with talking animals',
      'A bustling market in a foreign land',
      'A magical kingdom hidden in the clouds',
      'A secret underground laboratory',
      'A time-traveling adventure to the past',
      'Exploring an alien planet with strange creatures',
      'A pirate ship sailing the high seas',
      'A haunted house on a dark and stormy night',
      'An epic battle between dragons and knights',
      'A journey through a mysterious portal',
      'A hidden treasure map leading to riches',
      'A deserted island with a message in a bottle',
      'A parallel universe with alternate versions of yourself',
      'A quest to save the world from an evil sorcerer',
      'A trip to the moon in a rocket ship',
      'A magical spell that goes awry',
      'A visit to a futuristic city of robots',
      
    ];

    
    const randomIndex = Math.floor(Math.random() * randomPrompts.length);
    const randomPrompt = randomPrompts[randomIndex];

    
    if (promptInputRef.current) {
      promptInputRef.current.value = randomPrompt;
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const prompt = (e.target as HTMLFormElement | undefined)?.prompt?.value as string;
    onSubmit(prompt);
  };

  return (
    <StyledFormRoot onSubmit={handleSubmit}>
      <StyledFormField name="email">
        <StyledFlex css={{ alignItems: 'baseline', justifyContent: 'space-between' }}>
          <StyledFormLabel>Prompt</StyledFormLabel>
          <StyledFormMessage match="valueMissing">Please enter a prompt</StyledFormMessage>
          <StyledFormMessage match="typeMismatch">Please enter a valid prompt</StyledFormMessage>
        </StyledFlex>
        <Form.Control asChild>
          <StyledInput
            type="text"
            name="prompt"
            ref={promptInputRef}
            required
            placeholder="Enter a prompt like 'a painting of a cat'"
            autoComplete="off"
            theme={currentTheme}
          />
        </Form.Control>
      </StyledFormField>
      <StyledFlex css={{ alignItems: 'center' }}>
        <Form.Submit asChild>
          <StyledButton css={{ marginRight: 5, flex: 1, borderRadius: 15 }} disabled={isGenerating}>
            {isGenerating ? 'Generating..' : 'Start Generating'}
          </StyledButton>
        </Form.Submit>
        <StyledButton
          css={{ marginLeft: 5, flex: 1, borderRadius: 15 }}
          onClick={handleSurpriseMeClick}
          type="button" // Added type="button" to prevent generation on its own
        >
          Surprise Me
        </StyledButton>
      </StyledFlex>
    </StyledFormRoot>
  );
};

const StyledFormRoot = styled(Form.Root, {});

const StyledFormField = styled(Form.Field, {
  display: 'grid',
  marginBottom: 10,
});

const StyledFormLabel = styled(Form.Label, {
  fontSize: 15,
  fontWeight: 500,
  lineHeight: '35px',
  color: '$foreground',
  fontFamily: fontFamily, 
});

const StyledFormMessage = styled(Form.Message, {
  fontSize: 13,
  color: '$red600',
  opacity: 0.8,
  fontFamily: fontFamily, 
});

const StyledFlex = styled('div', { display: 'flex' });

const inputStyles = {
  all: 'unset',
  boxSizing: 'border-box',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,

  fontSize: 15,
  color: 'black',
  backgroundColor: '$gray300',
  boxShadow: '0 0 0 1px $gray400',
  '&:hover': { boxShadow: '0 0 0 1px $gray600' },
  '&:focus': { boxShadow: '0 0 0 2px $purple600' },
  '&::selection': { backgroundColor: '$gray600', color: 'white' },
  fontFamily: fontFamily, 
};

const StyledInput = styled('input', {
  ...inputStyles,
  height: 35,
  lineHeight: 1,
  padding: '0 10px',
  borderRadius: 15, 
  variants: {
    theme: {
      dark: {
        backgroundColor: '$gray600',
        color: 'white',
        '&::placeholder': {
          color: 'white',
        },
      },
      light: {
        backgroundColor: '$gray300',
      },
    },
  },
});

const StyledButton = styled('button', {
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
  cursor: 'pointer',

  '&:disabled': {
    opacity: 0.5,
  },
  backgroundColor: '$purple500',
  color: 'white',
  boxShadow: '0 2px 10px $gray400',
  '&:not(:disabled):hover': { backgroundColor: '$purple600' },
  '&:not(:disabled):focus': { boxShadow: '0 0 0 2px black' },
  fontFamily: fontFamily, 
});
