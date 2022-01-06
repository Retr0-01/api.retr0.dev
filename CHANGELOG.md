# Change Log

## January 6th 2022
- Implemented the "isAuthed" middleware. Endpoints can now use that to have a valid API key required.
- Added an example API key to the the table create code.
- Added types for everything that needed a type.
- Secured any current POST/PUT/DELETE endpoints.
- Updated the docs.

## January 4th 2022
- Configure PM2 and its script.
- Set `trust proxy` to true so we have our proper IPs in logging.
- Rename the 'db' folder into 'install'.
- Breakdown the install.sql script into multiple smaller scripts.
- Create a new 'Classes' folder into /src/ and move all the classes in there.
- Renamed some files to match their Class name.
- Started working on auth.

## January 2nd 2022
- Installed and configured Helmet for additional security.
- Setup CI/CD.

## January 1st 2022
- Setup database integration.
- Created a generic routes files for route handling.
- Root endpoint now returns all available endpoints.
- Enabled file logging.
- Update the install.db script.
- Cleaned up the depends.

## December 30th 2021
- Setup TypeScript.
- Setup Express and the API backbone.
- Added the ``posts`` endpoint.
- Documented added endpoints.

## May 25th 2021
- Initialise project.
- Added a concept install script.
- Added a README.
