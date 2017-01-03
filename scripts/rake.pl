#!/usr/bin/perl
use strict;
use warnings;
no warnings 'uninitialized';

# Clean the cordova workspace
system "rm -rf /vagrant/tenthousandpoints/www/*";

# Copy the new files into the vagrant workspace
system "cp -rf /vagrant/src/static/* /vagrant/tenthousandpoints/www";

# Put static content in a static directory
system "mkdir /vagrant/tenthousandpoints/www/static";
system "mv /vagrant/tenthousandpoints/www/svg /vagrant/tenthousandpoints/www/static";
system "mv /vagrant/tenthousandpoints/www/css /vagrant/tenthousandpoints/www/static";
system "mv /vagrant/tenthousandpoints/www/js /vagrant/tenthousandpoints/www/static";
