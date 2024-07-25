#!/bin/sh

rails assets:precompile
rails db:migrate RAILS_ENV=production
rails server -b -b 0.0.0.0 -e production
