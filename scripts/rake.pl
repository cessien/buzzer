#!/usr/bin/perl
use strict;
use warnings;
no warnings 'uninitialized';

# Clean the cordova workspace
system "rm -rf /vagrant/tenthousandpoints/www/*";

# Copy the new files into the vagrant workspace
system "cp -rf /vagrant/src/static/* /vagrant/tenthousandpoints/www";
