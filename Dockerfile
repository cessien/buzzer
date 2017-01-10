FROM gcr.io/google_appengine/nodejs

# Install Node.js
RUN /usr/local/bin/install_node

# Install dependencies.
RUN npm install

# Copy application code.
COPY . /app/

# Run the app, default is "npm start"
CMD npm start
