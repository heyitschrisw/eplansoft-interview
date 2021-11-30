# PDF Reader and Annotator

### Start Server
In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Reading Files
To read PDF files, insert pdf files to read into the 'public' directory.

Modify file path within the `<Document />` component using 'file' property in App.js to read a specific pdf file with 'public' as the root path.

##### `file='sample.pdf'` refers to `public/sample.pdf` directory

### Features
Generate rectangle annotators using the 'New' button on the top left corner.

Rectangle annotators can be resized and dragged around the screen to highlight areas on the document.
