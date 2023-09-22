# Neobook

## Description

Neobook is a web application that allows users to take notes using the power of markdown and render them in real time. Neobook also allows users to create and manage their own books and notes.

## Features

- Create and manage notes.
- Real time markdown rendering.
- Support mermaid, Katex, Pretty Code, and more.

## Coming Soon Features

- Create and manage books and notes.
- Export notes to PDF and HTML.
- Share notes with other users.
- Search for notes and books.
- Create and manage tags.
- Create and manage categories.

## Requirements

- Node.js or Bun

## Installation

Neobook is currently in development and is not ready for production. However, if you would like to test it out, you can clone the repository and run the following commands:

```bash
# clone the repository
git clone https://github.com/CMOISDEAD/neobook.git

# frontend steps
cd frontend
npm install
npm run dev # to run the development environment

# backend steps
cd backend
npm install
npm run dev # to run the development environment

```

## Usage

Currently is a work in progress, so you can only use the development version as is explained in the installation section.

All the supported markdown syntax can be found [test.md](./backend/notes/progress.md).

## Configuration

Currently you can configure your options in `backend/src/config.ts`, in a future release you will be able to configure your options in a personal and more comfy file.

### Options

- `notesDir`: The directory where the notes will be stored.
- `imagesDir`: The directory where the images will be stored, this images gonna be served by the backend thats the importances of this path.

## Image Gallery

![1695270436](https://github.com/CMOISDEAD/neobook/assets/51010598/7bf98acc-5700-4a1a-ae48-cb166f714bbd)
![College Book](https://github.com/CMOISDEAD/neobook/assets/51010598/9b2665ba-4369-4b67-8b60-b3bba9bcf007)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Neobook is a open source project, so feel free to fork the repository and make your own changes, i will be happy to see them.

## License

NeoBook is licensed under the MIT license.
