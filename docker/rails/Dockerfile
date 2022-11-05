FROM ruby:3.1

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    default-mysql-client \
    yarn

WORKDIR /myapp

COPY ./api/Gemfile /myapp/Gemfile
COPY ./api/Gemfile.lock /myapp/Gemfile.lock

RUN bundle install

COPY docker/rails/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
EXPOSE 4040

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]