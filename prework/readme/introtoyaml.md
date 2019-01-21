# Introduction to YAML

_YAML Ain't Markup Language​_

> [Latest YAML Specification](https://yaml.org/spec/1.2/spec.html)

> [YAML Reference Card](https://yaml.org/refcard.html)

## What is YAML?

YAML, which stands for Yet Another Markup Language, or YAML Ain’t Markup Language is a human-readable text-based format for specifying configuration-type information

### History and name

YAML (/ˈjæməl/, rhymes with camel[2]) was first proposed by Clark Evans in 2001, who designed it together with Ingy döt Net and Oren Ben-Kiki. 

Originally YAML was said to mean Yet Another Markup Language, referencing its purpose as a markup language with the yet another construct, but it 
was then repurposed as YAML Ain't Markup Language, a recursive acronym, to distinguish its purpose as data-oriented, rather than document markup.


### YAML & JSON

YAML is a superset of JSON, which means that any valid JSON file is also a valid YAML file. 

### YAML Structure

There are only two types of structures you need to know about in YAML:

* Lists
* Maps

in YAML, you indent with spaces, not tabs, in addition, there MUST be spaces between element parts.


For example, this is correct:

	Key: Value

but this will fail:

	Key:Value

<span style="color:red"> ^^ no space after the colon!</span>


YAML Maps

Maps let you associate name-value pairs.  

For example, you might have a config file that starts like this:

```YAML
apiVersion: v1
kind: Pod
```

The first line is a separator, and is optional unless you’re trying to define multiple structures in a single file. 


We have two values, v1 and Pod, mapped to two keys, apiVersion and kind.

