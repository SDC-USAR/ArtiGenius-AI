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

## Issues

If you spot a bug, then please feel free to raise an issue in our main GitHub project:
* [https://github.com/SDC-USAR/ArtiGenius-AI/issues](https://github.com/SDC-USAR/ArtiGenius-AI/issues)

## Resolving Issues

If you're new to the project and looking for a place to start, we recommend checking out the issues tagged with "good first issues". These issues are specifically curated for newcomers to the project, providing an opportunity to get familiar with the codebase and make meaningful contributions.

You can view the list of [good first issues](https://github.com/SDC-USAR/ArtiGenius-AI/labels/good%20first%20issue) issues.

## Points to remember while making contributions

-  Before working on any issues please make another branch with your username , to make one use the command
    ```bash
    git branch {your_username}
    ```
-  Then switch to that branch using the command 
    ```bash
    git checkout {your_username}
    ```
-  Then follow the following commands to push your contributions on the github (please run one command at a time):
    ```bash
    git add .
    git commit -m "your message"
    git push --set-upstream origin {your_username}
    ```
- The upstream command is required for the first time then you can simply use
    ```bash
    git push
    ```

