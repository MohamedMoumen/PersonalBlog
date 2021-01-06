# Website Layout Project for Web2 course FCI AU

This project is a personal blog made with node.js, express and mongodb.
Project's [repl.it](https://repl.it/@MohamedMoumen/PersonalBlog#readme.md) link.

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install dependencies.

Then install [mongodb](https://www.mongodb.com/try/download/community) on your local machine.

And set up your local coding environment.

For references on how to setup a local coding environment view [Zarko's](https://zarkom.net/) blog. 

```bash
npm install
node app.js
```

## Important notes
This project uses [express](https://expressjs.com/) javascript backend framework.
This project uses the [ejs](https://ejs.co/) template library.
And it uses [mongoose](https://mongoosejs.com/) for database connection and queries.

Importing and using express.js framework.
```javascript
const express   = require('express');
const app = express();
```

Importing and using mongodb(mongoose).
```javascript
mongoose = require('mongoose');
const url = process.env.DATABASEURL || "mongodb://localhost/rest_blog_app";
mongoose.connect(url, { useUnifiedTopology: true });
```
Routs/Endpoints can be found in the `routes` directory.

Database model is located in `models` directory.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contributers
[Mohamed Moumen](https://github.com/MohamedMoumen)
[Mostafa Amar](https://github.com/Hazem-Akram)
[Mohamed Abd-Elaal](https://github.com/salahmansour9900)
[Hazem Akram](https://github.com/Hazem-Akram)
[Salah Mohamed](https://github.com/salahmansour9900)


## License
[MIT](https://choosealicense.com/licenses/mit/)
