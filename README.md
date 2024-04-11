## Usage

```bash
$ npm install # or pnpm install or yarn install
```
## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

### CDN

````html
<!-- Include script at the end of body tag -->
  <script defer async src="https://cdn.jsdelivr.net/gh/findustrial/finance-with-findustrial/dist.js"><script>


<!-- Include the button the following ways -->
  <div class="finance-with-findustrial"></div>
  <div class="finance-with-findustrial" data-style="light"></div>
  <div class="finance-with-findustrial" data-style="dark"></div>

````
