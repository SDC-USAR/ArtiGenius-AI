# Contributing

We want everyone to feel that they can contribute to the ARTGENIUS-AI project of SDC-USAR.  Whether you have an idea to share, a feature to add, an issue to report, or a pull-request of the finest code ever,which ever it may be, we want you to participate!

In the sections below, you'll find some easy way to connect with other developers as well as some useful informational links on our license and community policies.

Looking forward to building ARTGENIUS-AI with you!

## GITHUB
 
The main project fork lives here in Github:

* [https://github.com/SDC-USAR/ArtiGenius-AI](https://github.com/SDC-USAR/ArtiGenius-AI)

## SETUP GUIDE

-   After forking the website from the above link clone this repository to your local machine:

    ```bash
    git clone https://github.com/{your_username}/ArtiGenius-AI.git
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
    