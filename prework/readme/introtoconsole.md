
### What is a shell?


The shell acts as the 'shell' around your operating system kernel.  The operating system kernel provides the ability to do useful things like write to disk, launch a process, or talk to a peripheral.  The shell is a simple interface that allows you to easily tell the kernel to do things using short 'commands'.  The 'shell' is usually what we call the 'command-line' interface.

There are many common shells in Linux/Unix:

 * bash
 * dash
 * sh
 * zsh
 * tsch

Many of these shells have syntax that is mostly identical for simple operations, but advanced features are generally unique.

What Are the Basic Unix Shell Commands?
ls - List files

pwd - Print out the current directory paths

cd - Change directories

cat - Print out contents of a file

mkdir - Create a directory

rm - Delete a file

mv - Move or rename a file

cp - Copy a file

Most Important Productivity Tips for Unix Command Line

The two most important productivity tips for command-line are tab completion and history.  I would stress that these are extremely important, so make sure you understand them and use them frequently:

1) Press tab frequently when typing commands because they will often auto-complete.
2) Press the up arrow key multiple times to bring up recently typed commands.
Command-line Flags and Parameters
Most commands have a number of options and arguments. Some of them are specified as single-letter flags that can be specified individually, or each with their own '-' characters.  For example, you can do

ls -latr
or

ls -l -a -t -r
In this example the above flags have the following meaning:

-l  List view
-a  All files
-t  Sort by time
-r  Sort in reverse
Some command-line parameters can be whole words:

gcc -ansi
Using Man Pages
     On Linux, you're going to need to refer to documentation on how to run commands, and this can done by putting 'man' before any command.  'man' is short for manual:

man <command>
for example

man ls
will give you something like this:


will show you the documentation on all the command-line parameters to the 'ls' command.

There are a couple important things to know about navigating around in man pages:  The first is that you can get out of the man pages by pressing 'q'.  The second is that you can search for something by pressing the '/' character, typing something, then pressing enter.

Managing Processes
On Windows, when you need to see what's running on your computer, you'll press CTRL + ALT + Delete.  On Linux, you'll run a command called 'top'.  To run top, just type 'top'.  Press 'q' to exit top.

Task Manager On Windows
	
Top On Linux

How to Find A Process On Linux
I'll skip a few things by not completely explaining the command below, but if you want to find a process on your system, you can type:

ps -e | grep <command_name>
For example, you can type

ps -e | grep apache
to find all apache web server processes running on your machine.  Here is some example output:

 1753 ?        00:00:00 apache2
 1756 ?        00:00:00 apache2
 1757 ?        00:00:00 apache2
 1758 ?        00:00:00 apache2
 1759 ?        00:00:00 apache2
 1760 ?        00:00:00 apache2
The first number on each line is the process id that identifies that process.  We'll use it in the next part.

How to End A Process On Linux
In the previous section, we saw how you can obtain a process's id.  Once you have the id of the process, you can kill the process by doing:

kill -9 <process_number>
For example, to kill the first process in from the last section, you would do:
![File](../../../../../source/repos/container-bootcamp/prework/readme/file.png)
kill -9 1753
How to Edit A File On Linux
There are a couple programs for editing files that are likely to be installed on your distro.  One is a command-line editor:

nano my_new_file
The other is a graphical editor, which you can launch directly from the command-line (and likely also from shortcuts found through whatever windowing system you use).

gedit my_new_file
How to Search For A File On Linux
You can use the 'find' command.  This command has many different syntaxes, but I'll show you just one that you can use:

find <directory_name> | grep <search_expression>
For example, to find all files in the Desktop folder that have the name "blue" in them, you can do

find ~/Desktop | grep blue
How to Download A File On Linux
Use wget:

wget http://www.example.com/some_file.zip
How to Send An HTTP Request On Linux
Normally, you would probably send HTTP requests through a browser, but you can also send them directly from the command line.  This is extremely useful for testing.  This example will send a normal HTTP GET request to google.com:

curl https://google.com/
How to Compile A Program On Linux
gcc is the most commonly used C compiler on Linux, but clang is another alternative.  To compile the following program, place this example in a file called 'main.c'.

#include <stdio.h>

int main(void){
	printf("Hello World!\n");
	return 0;
}
Then run

gcc main.c
The executable program will be found in a file called 'a.out'.  You can run it by typing:

./a.out
Piping
Another useful thing you can do in the Linux command line is piping.  Piping allow you to take output from one command and feed it directly into the input of another command. There are different ways to re-direct input and output, but in the following pipe, the individual commands are separated by the '|' character.  For example, this command will run 3 different programs that will 1) Read a few random numbers 2) Convert these to hexadecimal numbers 3) sort them in reverse and display them.

head /dev/urandom | xxd | sort -r
There are a number of useful programs that you can use in pipes, but here is a list of ones to do some research on:

sort
uniq
grep
sed
awk
Shell Scripting
There is lots to say about shell scripting, but because this is a 'quick' intro, let's just say that all the commands we've run so far can be put in a script and run automatically!  Just put them one after another each on a different line, in a file and then make that file executable:

chmod u+x your_script_file.sh
Now you can run a bunch of commands at once like this:

./your_script_file.sh