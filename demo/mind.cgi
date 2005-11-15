#!/usr/bin/perl
use warnings;
use strict;
use LWP::Simple;
print "Content-type: text/plain\n\n";
print get("http://localhost:1813/?$ENV{QUERY_STRING}");
