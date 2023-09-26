# ArtiGenius

This is a simple Next.js project using [Stitches UI](https://stitches.dev/) that allows you to generate images using the [Hugging Face API](https://huggingface.co/). With this app, you can create images with text prompts, turning your ideas into visual art.

## Prerequisites

Before you begin, you'll need the following:

-   Node.js installed on your machine.
-   A Hugging Face API key. You can obtain one by signing up [here](https://huggingface.co/) if you don't have an account already.

## Getting Started

-   Clone this repository to your local machine:

    ```bash
    git clone https://github.com/SDC-USAR/ArtiGenius-AI.git
    ```

-   Change into the project directory:
    ```bash
    cd ArtiGenius-AI
    ```
-   Install project dependencies:
    ```bash
    pnpm install
    ```
-   Create a `.env.local` file in the project root and add your Hugging Face API key as `NEXT_PUBLIC_HUGGINGFACE_API_KEY`. You can get your API key from your Hugging Face account settings.

    ```bash
    NEXT_PUBLIC_HUGGINGFACE_API_KEY=your-api-key
    ```

-   Start the development server:
    ```bash
    pnpm run dev
    ```

## Feedback and Issues

If you encounter any issues or have suggestions for improvements, please [open an issue](https://github.com/SDC-USAR/ArtiGenius-AI/issues/new). We welcome your feedback!

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/SDC-USAR/ArtiGenius-AI/blob/main/LICENSE) file for details.
