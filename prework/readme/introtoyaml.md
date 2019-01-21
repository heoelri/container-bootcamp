# Introduction to YAML

_YAML Ain't Markup Language​_
_YAML is a human friendly data serialization standard for all programming languages_
[Latest YAML Specification](https://yaml.org/spec/1.2/spec.html)

## Overview

Welcome to our Container Bootcamp, this workshop will guide you through migrating an application from "on-premise" server to containers running in Azure Kubernetes Service.

The labs are based upon a node.js application that allows for voting on the Justice League Superheroes (with more options coming soon). Data is stored in MongoDB.

> Note: These labs are designed to run on a Linux CentOS VM running in Azure (jumpbox) along with Azure Cloud Shell. They can potentially be run locally on a Mac or Windows, but the instructions are not written towards that experience. ie - "You're on your own."

> Note: Since we are working on a jumpbox, note that Copy and Paste are a bit different when working in the terminal. You can use Shift+Ctrl+C for Copy and Shift+Ctrl+V for Paste when working in the terminal. Outside of the terminal Copy and Paste behaves as expected using Ctrl+C and Ctrl+V. 

## What is YAML?

YAML, which stands for Yet Another Markup Language, or YAML Ain’t Markup Language (depending who you ask) is a human-readable text-based format for specifying configuration-type information

### History and name

YAML (/ˈjæməl/, rhymes with camel[2]) was first proposed by Clark Evans in 2001, who designed it together with Ingy döt Net and Oren Ben-Kiki. 

Originally YAML was said to mean Yet Another Markup Language, referencing its purpose as a markup language with the yet another construct, but it 
was then repurposed as YAML Ain't Markup Language, a recursive acronym, to distinguish its purpose as data-oriented, rather than document markup.


### YAML & JSON

YAML is a superset of JSON, which means that any valid JSON file is also a valid YAML file. 

